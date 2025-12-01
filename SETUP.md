# Setup Guide for Al Buraq Logistics

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your credentials.

3. **Run Development Server**
   ```bash
   npm run dev
   ```

## Detailed Setup

### Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable **Firestore Database**:
   - Go to Firestore Database
   - Click "Create database"
   - Start in test mode (you can secure it later)
   - Choose a location (e.g., `europe-west2` for UK)
4. Get your Firebase config:
   - Go to Project Settings > General
   - Scroll to "Your apps" section
   - Click the web icon (`</>`) to add a web app
   - Copy the config values to `.env.local`

### Stripe Configuration

1. Sign up at [Stripe](https://stripe.com/)
2. Get your API keys:
   - Go to Developers > API keys
   - Copy **Publishable key** → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - Copy **Secret key** → `STRIPE_SECRET_KEY`
3. Set up Webhook:
   - Go to Developers > Webhooks
   - Click "Add endpoint"
   - Endpoint URL: `https://yourdomain.com/api/webhook`
   - Select events: `checkout.session.completed`
   - Copy the **Signing secret** → `STRIPE_WEBHOOK_SECRET`

### Environment Variables

Create `.env.local` with:

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# App URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Firestore Security Rules (Production)

For production, update your Firestore rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /bookings/{bookingId} {
      allow read: if request.auth != null || 
                     resource.data.email == request.auth.token.email;
      allow create: if request.resource.data.keys().hasAll([
        'customerName', 'email', 'phone', 'serviceType', 
        'packageId', 'pickupAddress', 'deliveryAddress',
        'pickupDate', 'pickupTime', 'status', 'paymentStatus', 'totalPrice'
      ]);
      allow update: if request.auth != null;
    }
  }
}
```

## Testing the Application

1. **Test Booking Flow:**
   - Navigate to `/book`
   - Fill in the booking form
   - Use Stripe test card: `4242 4242 4242 4242`
   - Any future expiry date and any CVC

2. **Test Services:**
   - Visit `/services` to see all services
   - Click on any service to see packages
   - Select a package to go to booking page

## Production Deployment

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel (Recommended):**
   - Connect your GitHub repository to Vercel
   - Add environment variables in Vercel dashboard
   - Deploy automatically on push

3. **Update Stripe Webhook:**
   - Change webhook URL to your production domain
   - Update `NEXT_PUBLIC_BASE_URL` in environment variables

## Troubleshooting

### Firebase Connection Issues
- Verify all environment variables are set correctly
- Check Firebase project settings
- Ensure Firestore is enabled

### Stripe Payment Issues
- Verify Stripe keys are correct
- Check webhook endpoint is accessible
- Use Stripe Dashboard > Events to debug

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

