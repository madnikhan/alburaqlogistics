# Demo Payment System

## Overview

The Al Buraq Logistics application includes a built-in **demo payment system** that allows you to test the complete booking and payment flow without setting up Stripe.

## How It Works

### Automatic Activation

The demo payment system **automatically activates** when:
- Stripe API keys are not configured in `.env.local`
- Stripe keys are set to placeholder values (`your_stripe_publishable_key`)
- Stripe API returns an error

### Payment Flow

1. **User completes booking form** → Booking is saved to Firestore
2. **System checks Stripe configuration:**
   - ✅ **Stripe configured** → Redirects to Stripe checkout
   - ❌ **Stripe NOT configured** → Redirects to demo payment page
3. **Demo payment page shows:**
   - Booking summary
   - Demo card form (pre-filled with test values)
   - Payment button
4. **User clicks "Pay"** → Payment is processed (simulated)
5. **Booking status updated** → Status: "confirmed", Payment: "paid"
6. **Redirect to success page** → Shows booking confirmation

## Demo Payment Page Features

### Pre-filled Demo Card Details

- **Card Number:** `4242 4242 4242 4242` (always works)
- **Expiry Date:** `12/25` (any future date)
- **CVC:** `123` (any 3 digits)
- **Cardholder Name:** Auto-filled from booking

### Visual Indicators

- ⚠️ **Warning banner** indicating demo mode
- **"DEMO" badge** on card number field
- Clear messaging that no real payment is processed

## Testing the Demo Payment

### Step 1: Ensure Stripe is NOT Configured

Make sure your `.env.local` has placeholder values:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Step 2: Create a Booking

1. Go to `/book`
2. Select a service and package
3. Fill in the booking form
4. Submit the form

### Step 3: Complete Demo Payment

1. You'll be redirected to `/demo-payment`
2. Review the booking summary
3. Click "Pay £X.XX" button
4. Payment processes automatically (1.5 second delay)
5. Redirects to booking success page

### Step 4: Verify Payment

1. Check `/admin` dashboard
2. Booking should show:
   - Status: **confirmed**
   - Payment: **paid**
3. Check `/my-bookings` with customer email
4. Booking should appear with paid status

## API Endpoint

The demo payment uses a simple API endpoint:

**POST** `/api/demo-payment`

**Request Body:**
```json
{
  "bookingId": "booking_id_here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Demo payment processed successfully",
  "bookingId": "booking_id_here"
}
```

## Switching Between Demo and Real Stripe

### To Use Demo Payment:
- Don't configure Stripe keys, OR
- Set keys to placeholder values

### To Use Real Stripe:
1. Get Stripe API keys from Stripe Dashboard
2. Update `.env.local`:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   ```
3. Restart development server
4. System will automatically use Stripe checkout

## Benefits of Demo Payment

✅ **No Stripe account needed** for development/testing  
✅ **Complete flow testing** without real transactions  
✅ **Easy demos** for clients/stakeholders  
✅ **No test card setup** required  
✅ **Instant activation** - works out of the box  

## Security Notes

⚠️ **Important:** The demo payment system is for **development and testing only**.

- Never use demo payment in production
- Always configure real Stripe for production deployments
- Demo payments don't process real money
- All demo payments are marked as "paid" automatically

## Troubleshooting

### Demo payment not showing
- Check that Stripe keys are not configured
- Verify `.env.local` has placeholder values
- Restart development server after changing env vars

### Payment not processing
- Check browser console for errors
- Verify Firestore is configured correctly
- Check that booking was created successfully

### Booking status not updating
- Check Firestore connection
- Verify `/api/demo-payment` endpoint is accessible
- Check browser network tab for API errors

