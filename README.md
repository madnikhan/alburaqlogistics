# Al Buraq Logistics

A modern online booking system for logistics services including removals, office moving, house moving, and pallet services in Birmingham, UK.

## Features

- 🏠 **Multiple Services**: Removals, Office Moving, House Moving, and Pallet Services
- 📦 **Package Selection**: Pre-configured packages tailored for the Birmingham UK market
- 💳 **Online Payment**: Integrated Stripe payment processing
- 📱 **Responsive Design**: Modern, mobile-friendly interface
- 🔥 **Firebase Integration**: Real-time database with Firestore
- ✅ **Booking Management**: Complete booking system with status tracking
- 👨‍💼 **Admin Dashboard**: View and manage all bookings with statistics
- 📧 **Contact Page**: Customer contact form and business information
- 🔍 **My Bookings**: Customers can lookup their bookings by email
- 💳 **Demo Payment System**: Built-in demo payment for testing without Stripe setup

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Firebase Firestore
- **Payment**: Stripe
- **Form Validation**: React Hook Form + Zod

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Firebase project created
- Stripe account set up

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd alburaqlogistics
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Fill in your environment variables in `.env.local`:
   - Firebase configuration from your Firebase project settings
   - Stripe keys from your Stripe dashboard
   - Base URL for your application

### Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Copy your Firebase configuration to `.env.local`

### Stripe Setup

1. Create a Stripe account at [Stripe](https://stripe.com/)
2. Get your API keys from the Stripe Dashboard
3. Set up a webhook endpoint pointing to `/api/webhook`
4. Copy your keys to `.env.local`

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
alburaqlogistics/
├── app/
│   ├── admin/            # Admin dashboard for managing bookings
│   ├── api/              # API routes (Stripe checkout, webhooks)
│   ├── book/             # Booking page
│   ├── booking-success/  # Success page after payment
│   ├── contact/          # Contact page with form
│   ├── my-bookings/      # Customer booking lookup
│   ├── services/         # Service pages
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/           # React components (Header, Footer, PackageCard)
├── lib/                  # Utilities and configurations
│   ├── firebase.ts       # Firebase initialization
│   ├── firestore.ts      # Firestore operations
│   ├── packages.ts       # Package definitions
│   └── services.ts       # Service definitions
└── types/                # TypeScript type definitions
```

## Services & Packages

The application includes pre-configured packages for:

- **Removals**: Basic, Standard, Premium
- **Office Moving**: Small, Medium, Large
- **House Moving**: Studio/1 Bed, 2 Bed, 3 Bed, 4+ Bed
- **Pallets**: Single, Multiple, Bulk

All packages are priced for the Birmingham UK market.

## Booking Flow

1. User selects a service
2. User chooses a package
3. User fills in booking form
4. Booking is created in Firestore
5. **Payment Processing:**
   - If Stripe is configured: User is redirected to Stripe checkout
   - If Stripe is NOT configured: User is redirected to demo payment page
6. After payment, booking status is updated to "confirmed" and "paid"
7. User sees confirmation page

### Demo Payment System

The application includes a built-in demo payment system that activates automatically when Stripe is not configured. This allows you to:

- Test the complete booking flow without Stripe setup
- See how payments work without real transactions
- Develop and demo the application easily

**Demo Payment Features:**
- Simulated payment form with demo card details
- Automatic payment processing (1.5 second delay)
- Updates booking status to "confirmed" and "paid"
- Redirects to booking success page

**To use demo payment:** Simply don't configure Stripe keys, and the system will automatically use demo mode.

## Pages & Routes

- `/` - Homepage with services overview
- `/services` - List of all services
- `/services/[slug]` - Individual service page with packages
- `/book` - Booking form
- `/demo-payment` - Demo payment page (auto-redirects if Stripe not configured)
- `/booking-success` - Payment confirmation page
- `/my-bookings` - Customer booking lookup by email
- `/contact` - Contact page with form
- `/admin` - Admin dashboard (password protected)

## Environment Variables

See `.env.example` for all required environment variables.

### Admin Access

The admin dashboard is protected by a simple password (set via `NEXT_PUBLIC_ADMIN_PASSWORD`). 
**Note**: For production, implement proper authentication (e.g., Firebase Auth).

## Deployment

### Deploy to Vercel (Recommended - Easiest)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. **Push your code to GitHub/GitLab/Bitbucket**
2. **Import project in Vercel Dashboard** (vercel.com)
3. **Add environment variables** (see `VERCEL_ENV_TEMPLATE.txt`)
4. **Deploy** - Done! 🎉

See `VERCEL_DEPLOY.md` for detailed step-by-step instructions.

**Benefits:**
- ✅ Zero configuration
- ✅ Automatic SSL
- ✅ Global CDN
- ✅ Automatic deployments on Git push
- ✅ Free tier available

### Deploy to Fasthosts or Other Node.js Hosting

The application is also ready for deployment to Fasthosts.co.uk or any Node.js hosting provider.

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Prepare deployment package:**
   ```bash
   npm run deploy:prepare
   ```

3. **Upload to server** and follow instructions in `FASTHOSTS_DEPLOY.md`

### Deployment Documentation

- `VERCEL_DEPLOY.md` - **Vercel deployment guide (recommended)**
- `FASTHOSTS_DEPLOY.md` - Detailed Fasthosts deployment guide
- `DEPLOYMENT.md` - General deployment information
- `DEPLOYMENT_CHECKLIST.md` - Step-by-step deployment checklist

## License

Private - Al Buraq Logistics
