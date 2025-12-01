# Free Distance Calculation APIs

## Overview

The Al Buraq Logistics system supports multiple distance calculation providers, including several **completely free options**. The system automatically tries them in order until one works.

## Free Options (No Credit Card Required)

### 1. Postcode.io API ⭐ **RECOMMENDED - Easiest**
- **Cost:** Completely FREE
- **No API key required** for basic usage
- **UK-specific:** Perfect for Birmingham/UK moves
- **How it works:** Uses UK postcode coordinates to calculate straight-line distance
- **Limitations:** 
  - UK postcodes only
  - Straight-line distance (adds 20% for road distance estimate)
  - No travel time

**Setup:** None required! Works automatically.

**Example:**
```
Postcode: B1 1AA → B2 2BB
Distance: ~2 miles (straight-line) → ~2.4 miles (road estimate)
```

### 2. OpenRouteService ⭐ **BEST FREE OPTION**
- **Cost:** FREE tier - 2,000 requests/day
- **API Key:** Free signup at https://openrouteservice.org/
- **Features:**
  - Real road distances (not straight-line)
  - Travel time estimates
  - Works worldwide
  - Very accurate

**Setup:**
1. Sign up at https://openrouteservice.org/
2. Get your free API key
3. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_OPENROUTE_API_KEY=your_openroute_api_key
   ```

**Free Tier Limits:**
- 2,000 requests per day
- More than enough for most businesses
- Can upgrade if needed

### 3. Postcode Estimation (Built-in Fallback)
- **Cost:** FREE - Always works
- **No setup required**
- **How it works:** Estimates distance based on UK postcode area codes
- **Accuracy:** Good for local moves, approximate for long distances

**Works automatically** - No configuration needed.

## Paid Options (Optional)

### Google Maps Distance Matrix API
- **Cost:** Pay-as-you-go (first $200/month free)
- **Features:** Very accurate, includes traffic data
- **Setup:** Requires API key and billing account

## How the System Works

The distance calculator tries providers in this order:

1. **OpenRouteService** (if API key configured)
2. **Google Maps** (if API key configured)
3. **Postcode.io** (automatic - no key needed)
4. **Postcode Estimation** (always works as fallback)

## Recommended Setup

### For Development/Testing:
- **Use:** Postcode.io (automatic) or Postcode Estimation
- **Setup:** None required
- **Cost:** FREE

### For Production:
- **Use:** OpenRouteService
- **Setup:** 
  1. Sign up for free account
  2. Add API key to `.env.local`
- **Cost:** FREE (2,000 requests/day)
- **Benefits:** Real road distances, travel time

## Comparison

| Provider | Cost | Accuracy | Setup | UK Postcodes | Road Distance |
|----------|------|----------|-------|---------------|---------------|
| **Postcode.io** | FREE | Good | None | ✅ | ⚠️ Estimated |
| **OpenRouteService** | FREE | Excellent | API Key | ✅ | ✅ Yes |
| **Google Maps** | Paid* | Excellent | API Key | ✅ | ✅ Yes |
| **Postcode Estimation** | FREE | Fair | None | ✅ | ⚠️ Estimated |

*Google Maps: First $200/month free, then pay-as-you-go

## Setting Up OpenRouteService (Recommended)

### Step 1: Sign Up
1. Go to https://openrouteservice.org/
2. Click "Sign Up" (free)
3. Verify your email

### Step 2: Get API Key
1. Log in to dashboard
2. Go to "API Keys"
3. Copy your default API key

### Step 3: Add to Environment
Add to `.env.local`:
```env
NEXT_PUBLIC_OPENROUTE_API_KEY=your_api_key_here
```

### Step 4: Restart Server
```bash
npm run dev
```

## Current Status

The system is configured to use **Postcode.io** automatically (no setup needed). This provides:
- ✅ Free distance calculation
- ✅ Works for UK postcodes
- ✅ No API key required
- ✅ Good accuracy for local moves

For better accuracy, add OpenRouteService API key (free, 2,000 requests/day).

## Testing

Test the distance calculation:
1. Go to `/book`
2. Select a package
3. Enter addresses with UK postcodes:
   - Pickup: "123 High Street, Birmingham B1 1AA"
   - Delivery: "456 Main Road, Birmingham B2 2BB"
4. See the price calculator update automatically

## Troubleshooting

### Distance seems incorrect
- Check if postcodes are in correct format (e.g., "B1 1AA")
- Verify addresses include postcodes
- System falls back to estimation if APIs fail

### Want more accuracy?
- Sign up for OpenRouteService (free)
- Add API key to `.env.local`
- Restart server

### API errors
- Check browser console for errors
- Verify API keys are correct (if using)
- System automatically falls back to estimation

