# Deploy to Vercel - Step by Step Guide

Vercel is the easiest way to deploy Next.js applications. It's made by the creators of Next.js and provides automatic deployments, SSL, and global CDN.

## 🚀 Quick Deploy (5 Minutes)

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket (free)

2. **Import Your Project**
   - Click "Add New Project"
   - Import your Git repository (GitHub/GitLab/Bitbucket)
   - Or drag and drop your project folder

3. **Configure Project**
   - Framework: **Next.js** (auto-detected)
   - Root Directory: `.` (root)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Add Environment Variables**
   - Click "Environment Variables" section
   - Add all variables from `.env.example`:
   
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
   
   # Stripe (Optional - for real payments)
   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_WEBHOOK_SECRET=your_webhook_secret
   
   # App Configuration
   NEXT_PUBLIC_BASE_URL=https://your-app.vercel.app
   NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password
   
   # Optional APIs
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key
   NEXT_PUBLIC_OPENROUTE_API_KEY=your_openroute_key
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live at `https://your-app.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Link to existing project? **No** (first time)
   - Project name: **alburaqlogistics** (or your choice)
   - Directory: **./** (current directory)
   - Override settings? **No**

4. **Add Environment Variables**
   ```bash
   vercel env add NEXT_PUBLIC_FIREBASE_API_KEY
   vercel env add NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
   # ... repeat for all variables
   ```
   
   Or add them via Vercel Dashboard (easier).

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## 📋 Environment Variables Checklist

Make sure to add these in Vercel Dashboard → Settings → Environment Variables:

### Required:
- ✅ `NEXT_PUBLIC_FIREBASE_API_KEY`
- ✅ `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- ✅ `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- ✅ `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- ✅ `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- ✅ `NEXT_PUBLIC_FIREBASE_APP_ID`
- ✅ `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`
- ✅ `NEXT_PUBLIC_BASE_URL` (set to your Vercel URL after first deploy)
- ✅ `NEXT_PUBLIC_ADMIN_PASSWORD`

### Optional (for payments):
- ⚠️ `STRIPE_SECRET_KEY` (if using Stripe)
- ⚠️ `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (if using Stripe)
- ⚠️ `STRIPE_WEBHOOK_SECRET` (if using Stripe)

### Optional (for distance calculation):
- ⚠️ `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- ⚠️ `NEXT_PUBLIC_OPENROUTE_API_KEY`

## 🔧 Post-Deployment Setup

### 1. Update Firebase Authorized Domains

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Go to **Authentication** → **Settings** → **Authorized domains**
4. Add your Vercel domain: `your-app.vercel.app`
5. Add your custom domain (if you set one up)

### 2. Update Stripe Webhook (if using Stripe)

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Go to **Developers** → **Webhooks**
3. Add endpoint: `https://your-app.vercel.app/api/webhook`
4. Select events: `checkout.session.completed`
5. Copy the webhook secret
6. Add to Vercel environment variables as `STRIPE_WEBHOOK_SECRET`

### 3. Set Custom Domain (Optional)

1. In Vercel Dashboard → **Settings** → **Domains**
2. Add your domain: `alburaqlogistics.co.uk`
3. Follow DNS instructions:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Or A record: `@` → Vercel IP (shown in dashboard)
4. Update `NEXT_PUBLIC_BASE_URL` to your custom domain

## ✅ What Works on Vercel

- ✅ All pages (homepage, services, booking, contact, etc.)
- ✅ Firebase client-side and server-side
- ✅ API routes (`/api/*`)
- ✅ Stripe payments (with webhooks)
- ✅ Server-side rendering (SSR)
- ✅ Static site generation (SSG)
- ✅ Image optimization
- ✅ Automatic SSL certificates
- ✅ Global CDN
- ✅ Automatic deployments on Git push

## 🎯 Automatic Deployments

Once connected to Git:

1. **Push to main branch** → Auto-deploys to production
2. **Push to other branches** → Creates preview deployment
3. **Pull requests** → Creates preview deployment for testing

## 📊 Monitoring

- **Vercel Dashboard**: View deployments, logs, analytics
- **Real-time logs**: See build and runtime logs
- **Analytics**: Track page views and performance (optional add-on)

## 🆘 Troubleshooting

### Build Fails

1. Check build logs in Vercel Dashboard
2. Common issues:
   - Missing environment variables
   - TypeScript errors
   - Missing dependencies

### Environment Variables Not Working

1. Make sure variables start with `NEXT_PUBLIC_` for client-side
2. Redeploy after adding variables
3. Check variable names match exactly

### Firebase Not Working

1. Check Firebase authorized domains include Vercel URL
2. Verify all Firebase env variables are set
3. Check Firebase console for errors

### Stripe Webhook Not Working

1. Verify webhook URL is correct: `https://your-app.vercel.app/api/webhook`
2. Check webhook secret is set correctly
3. View webhook logs in Stripe Dashboard

## 💰 Pricing

**Free Tier Includes:**
- ✅ Unlimited personal projects
- ✅ 100GB bandwidth/month
- ✅ 100 builds/month
- ✅ Automatic SSL
- ✅ Global CDN
- ✅ Preview deployments

**Hobby Plan ($0/month):**
- Everything in Free tier
- Custom domains
- Team collaboration

**Pro Plan ($20/month):**
- Everything in Hobby
- More bandwidth
- More builds
- Advanced analytics

## 🎉 You're Done!

Your site is now live on Vercel with:
- ✅ Automatic deployments
- ✅ SSL certificates
- ✅ Global CDN
- ✅ Serverless functions
- ✅ Zero configuration

Visit your site at: `https://your-app.vercel.app`

