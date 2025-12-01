# Distance Calculation System

## Overview

The Al Buraq Logistics booking system includes a sophisticated distance calculation system that determines the exact distance between pickup and delivery addresses, then calculates pricing accordingly.

## Pricing Structure

### Local Moves (Up to 50 miles)
- **Base price includes all distance** - No additional charge
- Perfect for moves within Birmingham and the West Midlands
- Example: 2 Bedroom Move (£600 base) for 30 miles = **£600 total**

### Long-Distance Moves (50-100 miles)
- **Base price + £1.20 per mile** for miles over 50
- Example: 2 Bedroom Move (£600 base) for 75 miles = £600 + (25 × £1.20) = **£630 total**

### Very Long-Distance Moves (100+ miles)
- **Base price + £1.20/mile (50-100 miles) + £1.50/mile (100+ miles)**
- Example: 2 Bedroom Move (£600 base) for 120 miles = £600 + (50 × £1.20) + (20 × £1.50) = **£690 total**

## Distance Calculation Methods

### 1. Google Maps Distance Matrix API (Primary)
- **Most accurate** - Uses real road distances
- Requires Google Maps API key
- Returns exact distance and estimated travel time
- Set `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` in `.env.local`

### 2. Postcode Estimation (Fallback)
- **Automatic fallback** if Google Maps API is not configured
- Estimates distance based on UK postcode areas
- Works well for local Birmingham moves
- Less accurate for long distances

## How It Works

1. **User enters addresses** → System extracts postcodes
2. **Distance calculation:**
   - Tries Google Maps API first (if configured)
   - Falls back to postcode estimation if API unavailable
3. **Price calculation:**
   - Checks if distance ≤ 50 miles (local move)
   - Calculates additional miles if distance > 50 miles
   - Applies appropriate per-mile rate
4. **Display breakdown:**
   - Shows base price
   - Shows included miles (up to 50)
   - Shows additional miles and charge (if applicable)
   - Shows total price

## Setting Up Google Maps API

### Step 1: Get API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable **Distance Matrix API**
4. Create credentials → API Key
5. Restrict the key to Distance Matrix API (recommended)

### Step 2: Add to Environment
Add to `.env.local`:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

### Step 3: Restart Server
```bash
npm run dev
```

## API Endpoint

**POST** `/api/calculate-distance`

**Request:**
```json
{
  "pickupAddress": "123 High Street, Birmingham B1 1AA",
  "deliveryAddress": "456 Main Road, Birmingham B2 2BB"
}
```

**Response:**
```json
{
  "distance": 8.5,
  "duration": 15,
  "formattedDistance": "8.5 miles"
}
```

## Examples

### Example 1: Local Move (30 miles)
- Package: 2 Bedroom Move (£600 base)
- Distance: 30 miles
- **Calculation:** £600 (all included)
- **Total: £600**

### Example 2: Regional Move (75 miles)
- Package: 2 Bedroom Move (£600 base)
- Distance: 75 miles
- **Calculation:** £600 + (25 miles × £1.20) = £600 + £30
- **Total: £630**

### Example 3: Long-Distance Move (120 miles)
- Package: 2 Bedroom Move (£600 base)
- Distance: 120 miles
- **Calculation:** £600 + (50 miles × £1.20) + (20 miles × £1.50) = £600 + £60 + £30
- **Total: £690**

## Postcode Estimation Logic

The fallback system uses UK postcode patterns:

- **Same postcode area** (e.g., B1 to B1): 1-5 miles
- **Different Birmingham postcodes** (e.g., B1 to B2): 5-20 miles
- **Birmingham to regional** (e.g., B1 to CV1): 20-50 miles
- **Long distance** (non-Birmingham to non-Birmingham): 50+ miles

## Testing

### Without Google Maps API
- System automatically uses postcode estimation
- Works immediately, no setup required
- Good for development and testing

### With Google Maps API
- More accurate distances
- Includes travel time estimates
- Better user experience
- Requires API key setup

## Troubleshooting

### Distance seems incorrect
- Check if Google Maps API is configured
- Verify postcodes are in correct format (e.g., "B1 1AA")
- Check browser console for API errors

### API errors
- Verify API key is correct
- Check Distance Matrix API is enabled
- Verify API key restrictions allow your domain
- Check API quota/billing is set up

### Price calculation issues
- Verify distance is calculated correctly
- Check base price matches selected package
- Ensure distance > 50 miles for additional charges

