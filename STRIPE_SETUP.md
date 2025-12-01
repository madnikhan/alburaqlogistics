# Stripe Payment Setup Instructions

## Current Status

⚠️ **Stripe is not configured yet** - The checkout session is failing because Stripe keys are not set up.

## Quick Setup Guide

### 1. Create a Stripe Account

1. Go to [Stripe.com](https://stripe.com/) and sign up for an account
2. Complete the account setup process

### 2. Get Your Stripe API Keys

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com/)
2. Go to **Developers** → **API keys**
3. You'll see two keys:
   - **Publishable key** (starts with `pk_test_` or `pk_live_`)
   - **Secret key** (starts with `sk_test_` or `sk_live_`)

### 3. Update `.env.local` File

Open `.env.local` and replace the placeholder values:

```env
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_actual_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
```

**Important**: 
- Use `pk_test_` and `sk_test_` keys for development/testing
- Use `pk_live_` and `sk_live_` keys for production
- Never commit your secret keys to git (they're already in `.gitignore`)

### 4. Set Up Webhook (For Production)

Webhooks are needed to automatically update booking status after payment.

1. In Stripe Dashboard, go to **Developers** → **Webhooks**
2. Click **Add endpoint**
3. Set endpoint URL to: `https://yourdomain.com/api/webhook`
4. Select events: `checkout.session.completed`
5. Copy the **Signing secret** (starts with `whsec_`)
6. Add it to `.env.local` as `STRIPE_WEBHOOK_SECRET`

**For Local Development:**
- Use [Stripe CLI](https://stripe.com/docs/stripe-cli) to forward webhooks:
  ```bash
  stripe listen --forward-to localhost:3000/api/webhook
  ```
- This will give you a webhook signing secret to use locally

### 5. Test Payment Flow

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Test with Stripe test card:
   - Card number: `4242 4242 4242 4242`
   - Expiry: Any future date (e.g., `12/25`)
   - CVC: Any 3 digits (e.g., `123`)
   - ZIP: Any 5 digits (e.g., `12345`)

3. Create a test booking and complete the payment

## Testing Different Scenarios

Stripe provides test cards for different scenarios:

- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **Requires Authentication**: `4000 0025 0000 3155`

See more test cards: https://stripe.com/docs/testing

## Troubleshooting

### Error: "Stripe is not configured"
- Make sure `.env.local` exists and has correct keys
- Restart the development server after updating `.env.local`
- Check that keys start with `pk_test_` or `pk_live_` (publishable) and `sk_test_` or `sk_live_` (secret)

### Error: "Invalid API Key"
- Verify you copied the keys correctly (no extra spaces)
- Make sure you're using test keys for development
- Check that the keys match your Stripe account

### Payment succeeds but booking status doesn't update
- Webhook might not be configured
- Check Stripe Dashboard → Webhooks for delivery logs
- Verify webhook secret is correct in `.env.local`

## Security Notes

- ⚠️ Never expose your secret key (`sk_`) in client-side code
- ✅ Only use `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` in client-side code
- ✅ Keep secret keys in server-side environment variables only
- ✅ Use test keys during development
- ✅ Switch to live keys only in production

## Next Steps

After setting up Stripe:
1. Test the complete booking flow
2. Verify payments are being processed
3. Check that booking status updates after payment
4. Set up webhooks for production deployment

