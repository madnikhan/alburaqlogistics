/**
 * Calculate distance between two UK addresses
 * Supports multiple providers:
 * 1. OpenRouteService (FREE - recommended)
 * 2. Google Maps API (requires API key)
 * 3. Postcode estimation (fallback - always works)
 */

export interface Location {
  address: string;
  postcode?: string;
}

export interface DistanceResult {
  distance: number; // in miles
  duration?: number; // in minutes
  error?: string;
}

/**
 * Extract postcode from address string
 */
export function extractPostcode(address: string): string | null {
  // UK postcode pattern: e.g., B1 1AA, B12 8AB, etc.
  const postcodeRegex = /([A-Z]{1,2}[0-9][A-Z0-9]?\s?[0-9][A-Z]{2})/i;
  const match = address.match(postcodeRegex);
  return match ? match[1].toUpperCase().replace(/\s/g, ' ') : null;
}

/**
 * Calculate distance using OpenRouteService API (FREE)
 * Sign up at https://openrouteservice.org/ for a free API key
 * Free tier: 2,000 requests/day
 */
async function calculateDistanceWithOpenRouteService(
  startAddress: string,
  endAddress: string
): Promise<DistanceResult | null> {
  const apiKey = process.env.NEXT_PUBLIC_OPENROUTE_API_KEY;
  
  if (!apiKey) {
    return null; // API not configured
  }

  try {
    // First, geocode addresses to get coordinates
    const geocodeStart = await fetch(
      `https://api.openrouteservice.org/geocoding/search?` +
      `api_key=${apiKey}` +
      `&text=${encodeURIComponent(startAddress)}` +
      `&boundary.country=GB`
    );
    const geocodeEnd = await fetch(
      `https://api.openrouteservice.org/geocoding/search?` +
      `api_key=${apiKey}` +
      `&text=${encodeURIComponent(endAddress)}` +
      `&boundary.country=GB`
    );

    const startData = await geocodeStart.json();
    const endData = await geocodeEnd.json();

    if (!startData.features?.[0] || !endData.features?.[0]) {
      return null; // Geocoding failed
    }

    const startCoords = startData.features[0].geometry.coordinates; // [lng, lat]
    const endCoords = endData.features[0].geometry.coordinates;

    // Calculate distance using directions API
    const directionsResponse = await fetch(
      `https://api.openrouteservice.org/v2/directions/driving-car?` +
      `api_key=${apiKey}` +
      `&start=${startCoords[0]},${startCoords[1]}` +
      `&end=${endCoords[0]},${endCoords[1]}`
    );

    const directionsData = await directionsResponse.json();

    if (directionsData.features?.[0]?.properties?.segments?.[0]) {
      const segment = directionsData.features[0].properties.segments[0];
      const distanceInMeters = segment.distance;
      const durationInSeconds = segment.duration;
      
      const distanceInMiles = distanceInMeters / 1609.34; // Convert to miles
      const durationInMinutes = durationInSeconds / 60;

      return {
        distance: Math.round(distanceInMiles * 10) / 10,
        duration: Math.round(durationInMinutes),
      };
    }

    return null;
  } catch (error) {
    console.error('OpenRouteService API error:', error);
    return null; // Fall back to other methods
  }
}

/**
 * Calculate distance using Google Maps Distance Matrix API
 */
async function calculateDistanceWithGoogleMaps(
  startAddress: string,
  endAddress: string
): Promise<DistanceResult | null> {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  
  if (!apiKey) {
    return null;
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/distancematrix/json?` +
      `origins=${encodeURIComponent(startAddress)}` +
      `&destinations=${encodeURIComponent(endAddress)}` +
      `&units=imperial` +
      `&key=${apiKey}`
    );

    const data = await response.json();

    if (data.status === 'OK' && data.rows[0]?.elements[0]?.status === 'OK') {
      const element = data.rows[0].elements[0];
      const distanceInMiles = element.distance.value / 1609.34;
      const durationInMinutes = element.duration.value / 60;

      return {
        distance: Math.round(distanceInMiles * 10) / 10,
        duration: Math.round(durationInMinutes),
      };
    }

    return null;
  } catch (error) {
    console.error('Google Maps API error:', error);
    return null;
  }
}

/**
 * Calculate distance using UK Postcode.io API (FREE for UK postcodes)
 * No API key required for basic distance calculation
 */
async function calculateDistanceWithPostcodeIO(
  startAddress: string,
  endAddress: string
): Promise<DistanceResult | null> {
  const startPostcode = extractPostcode(startAddress);
  const endPostcode = extractPostcode(endAddress);

  if (!startPostcode || !endPostcode) {
    return null; // Need postcodes for this API
  }

  try {
    // Get coordinates for both postcodes
    const startResponse = await fetch(
      `https://api.postcodes.io/postcodes/${encodeURIComponent(startPostcode.replace(/\s/g, ''))}`
    );
    const endResponse = await fetch(
      `https://api.postcodes.io/postcodes/${encodeURIComponent(endPostcode.replace(/\s/g, ''))}`
    );

    const startData = await startResponse.json();
    const endData = await endResponse.json();

    if (startData.status !== 200 || endData.status !== 200) {
      return null;
    }

    const startLat = startData.result.latitude;
    const startLng = startData.result.longitude;
    const endLat = endData.result.latitude;
    const endLng = endData.result.longitude;

    // Calculate straight-line distance (Haversine formula)
    const R = 3959; // Earth's radius in miles
    const dLat = (endLat - startLat) * Math.PI / 180;
    const dLng = (endLng - startLng) * Math.PI / 180;
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(startLat * Math.PI / 180) * Math.cos(endLat * Math.PI / 180) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    // Add 20% for road distance vs straight-line
    const roadDistance = distance * 1.2;

    return {
      distance: Math.round(roadDistance * 10) / 10,
    };
  } catch (error) {
    console.error('Postcode.io API error:', error);
    return null;
  }
}

/**
 * Estimate distance based on UK postcodes (fallback method)
 * Uses postcode area codes to estimate distance
 */
function estimateDistanceFromPostcodes(startAddress: string, endAddress: string): number {
  const startPostcode = extractPostcode(startAddress);
  const endPostcode = extractPostcode(endAddress);

  // If we can't extract postcodes, estimate based on address similarity
  if (!startPostcode || !endPostcode) {
    if (startAddress.toLowerCase().includes('birmingham') && 
        endAddress.toLowerCase().includes('birmingham')) {
      return 8; // Average local Birmingham move
    }
    return 15; // Default estimate
  }

  // Extract area codes (first part of postcode)
  const startArea = startPostcode.split(' ')[0];
  const endArea = endPostcode.split(' ')[0];

  // Same area code = very local (1-5 miles)
  if (startArea === endArea) {
    return 3;
  }

  // Different area codes in Birmingham (B postcodes)
  if (startArea.startsWith('B') && endArea.startsWith('B')) {
    return 12; // Average Birmingham local move
  }

  // One is Birmingham (B), other is not = regional (20-50 miles)
  if ((startArea.startsWith('B') && !endArea.startsWith('B')) ||
      (!startArea.startsWith('B') && endArea.startsWith('B'))) {
    return 35;
  }

  // Both non-Birmingham = long distance (50+ miles)
  return 75;
}

/**
 * Calculate distance between two addresses
 * Tries multiple methods in order:
 * 1. OpenRouteService (FREE - recommended)
 * 2. Google Maps API (if configured)
 * 3. Postcode.io (FREE - UK postcodes only)
 * 4. Postcode estimation (always works)
 */
export async function calculateDistance(
  startAddress: string,
  endAddress: string
): Promise<DistanceResult> {
  // Try OpenRouteService first (free and accurate)
  const openRouteResult = await calculateDistanceWithOpenRouteService(startAddress, endAddress);
  if (openRouteResult) {
    return openRouteResult;
  }

  // Try Google Maps API
  const googleResult = await calculateDistanceWithGoogleMaps(startAddress, endAddress);
  if (googleResult) {
    return googleResult;
  }

  // Try Postcode.io (free for UK postcodes)
  const postcodeIOResult = await calculateDistanceWithPostcodeIO(startAddress, endAddress);
  if (postcodeIOResult) {
    return postcodeIOResult;
  }

  // Fallback to postcode estimation
  const estimatedDistance = estimateDistanceFromPostcodes(startAddress, endAddress);
  return {
    distance: estimatedDistance,
  };
}

/**
 * Calculate price based on base price + distance
 * Local moves (under 50 miles): Base price only
 * Long-distance (50-100 miles): Base price + £1.20 per mile for miles over 50
 * Very long distance (100+ miles): Base price + £1.50 per mile for miles over 100
 */
export function calculatePrice(
  basePrice: number,
  distance: number,
  pricePerMile: number = 1.20
): number {
  const LOCAL_MOVE_THRESHOLD = 50; // Miles included in base price
  const LONG_DISTANCE_THRESHOLD = 100; // Miles for higher rate

  // Local moves: base price only (distance included)
  if (distance <= LOCAL_MOVE_THRESHOLD) {
    return basePrice;
  }

  // Long-distance moves: charge per mile for miles over threshold
  const milesOverThreshold = distance - LOCAL_MOVE_THRESHOLD;
  
  // For very long distances (100+ miles), use higher rate
  if (distance > LONG_DISTANCE_THRESHOLD) {
    const miles50to100 = LONG_DISTANCE_THRESHOLD - LOCAL_MOVE_THRESHOLD;
    const milesOver100 = distance - LONG_DISTANCE_THRESHOLD;
    const distanceCharge = (miles50to100 * pricePerMile) + (milesOver100 * 1.50);
    return basePrice + distanceCharge;
  }

  // Standard long-distance (50-100 miles)
  const distanceCharge = milesOverThreshold * pricePerMile;
  return basePrice + distanceCharge;
}

/**
 * Format distance for display
 */
export function formatDistance(distance: number): string {
  if (distance < 1) {
    return `${Math.round(distance * 10) / 10} miles`;
  }
  return `${Math.round(distance * 10) / 10} miles`;
}

/**
 * Get pricing breakdown for display
 */
export function getPricingBreakdown(basePrice: number, distance: number) {
  const LOCAL_MOVE_THRESHOLD = 50;
  const LONG_DISTANCE_THRESHOLD = 100;
  const PRICE_PER_MILE = 1.20;
  const PRICE_PER_MILE_LONG = 1.50;

  if (distance <= LOCAL_MOVE_THRESHOLD) {
    return {
      basePrice,
      distance,
      includedMiles: distance,
      chargeableMiles: 0,
      distanceCharge: 0,
      totalPrice: basePrice,
      isLocalMove: true,
    };
  }

  const milesOverThreshold = distance - LOCAL_MOVE_THRESHOLD;
  let distanceCharge = 0;
  let chargeableMiles = 0;

  if (distance > LONG_DISTANCE_THRESHOLD) {
    const miles50to100 = LONG_DISTANCE_THRESHOLD - LOCAL_MOVE_THRESHOLD;
    const milesOver100 = distance - LONG_DISTANCE_THRESHOLD;
    distanceCharge = (miles50to100 * PRICE_PER_MILE) + (milesOver100 * PRICE_PER_MILE_LONG);
    chargeableMiles = milesOverThreshold;
  } else {
    distanceCharge = milesOverThreshold * PRICE_PER_MILE;
    chargeableMiles = milesOverThreshold;
  }

  return {
    basePrice,
    distance,
    includedMiles: LOCAL_MOVE_THRESHOLD,
    chargeableMiles,
    distanceCharge,
    totalPrice: basePrice + distanceCharge,
    isLocalMove: false,
  };
}

/**
 * Price per mile for distance calculation
 */
export const PRICE_PER_MILE = 1.20;
export const LOCAL_MOVE_THRESHOLD = 50; // Miles included in base price
export const LONG_DISTANCE_THRESHOLD = 100; // Miles for higher per-mile rate
