# Fasthosts.co.uk Deployment Guide

## Quick Start Guide

### Step 1: Build Your Application

```bash
# Install dependencies (if not already done)
npm install

# Create production build
npm run build

# Test production build locally
npm start
```

### Step 2: Prepare Files for Upload

**Files to upload:**
- `.next/` folder (built application)
- `public/` folder (static assets)
- `package.json` and `package-lock.json`
- `next.config.ts`
- `tsconfig.json`
- `.env.local` (create on server, don't upload via FTP for security)

**Files NOT to upload:**
- `node_modules/` (install on server)
- `.git/` folder
- `.next/cache/` (can be regenerated)

### Step 3: Upload to Fasthosts

#### Option A: Using FTP/SFTP (FileZilla, WinSCP, etc.)

1. Connect to your Fasthosts FTP server
2. Navigate to your domain's root directory (usually `public_html` or `www`)
3. Upload the prepared files

#### Option B: Using SSH (if available)

```bash
# Connect via SSH
ssh username@your-server-ip

# Navigate to your domain directory
cd /path/to/your/domain

# Upload files using scp from your local machine
scp -r .next public package*.json next.config.ts tsconfig.json username@server:/path/to/domain/
```

### Step 4: Server Configuration

#### If Fasthosts Supports Node.js (VPS/Cloud):

1. **SSH into your server**

2. **Install Node.js** (if needed):
   ```bash
   # Check if Node.js is installed
   node --version
   
   # Should be 18 or higher
   # If not installed, contact Fasthosts support or install via nvm
   ```

3. **Install dependencies:**
   ```bash
   cd /path/to/your/website
   npm install --production
   ```

4. **Set environment variables:**
   ```bash
   # Create .env.local file
   nano .env.local
   
   # Add all your environment variables (see .env.example)
   # Save and exit (Ctrl+X, then Y, then Enter)
   ```

5. **Start the application:**
   ```bash
   # Option 1: Direct start (for testing)
   npm start
   
   # Option 2: Using PM2 (recommended for production)
   npm install -g pm2
   pm2 start npm --name "alburaq-logistics" -- start
   pm2 save
   pm2 startup
   ```

6. **Configure reverse proxy** (if using Nginx):
   - Point your domain to `http://localhost:3000`
   - See Nginx configuration in DEPLOYMENT.md

#### If Using Shared Hosting (Static Export):

1. **Update next.config.ts** to enable static export:
   ```typescript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true
     }
   }
   ```

2. **Build static version:**
   ```bash
   npm run build
   ```

3. **Upload `out/` folder contents** to `public_html` via FTP

4. **Upload `.htaccess` file** (included in project) to root directory

**Note:** Static export means:
- ✅ Works on any hosting
- ❌ No API routes (Stripe webhooks won't work)
- ❌ No server-side features
- ✅ Client-side features work

### Step 5: Domain Configuration

1. **Point your domain** to your hosting account in Fasthosts control panel
2. **Set up SSL certificate** (Let's Encrypt is usually free)
3. **Configure DNS** if needed:
   - A record: `@` → Your server IP
   - CNAME: `www` → Your domain

### Step 6: Environment Variables

Create `.env.local` on your server with:

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

# Stripe (Optional)
STRIPE_SECRET_KEY=your_stripe_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable
STRIPE_WEBHOOK_SECRET=your_webhook_secret

# App Config
NEXT_PUBLIC_BASE_URL=https://yourdomain.co.uk
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password

# Optional APIs
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key
NEXT_PUBLIC_OPENROUTE_API_KEY=your_key
```

### Step 7: Testing

After deployment, test:

1. ✅ Homepage loads: `https://yourdomain.co.uk`
2. ✅ Services pages work: `https://yourdomain.co.uk/services/removals`
3. ✅ Booking form works
4. ✅ Contact form submits
5. ✅ Admin dashboard accessible
6. ✅ Mobile responsive

## Fasthosts cPanel Setup (If Available)

1. **Login to cPanel**
2. **Find "Node.js Selector"** or "Node.js App"
3. **Create New Application:**
   - Node.js version: 18 or higher
   - Application root: `/home/username/yourdomain.co.uk`
   - Application URL: `/`
   - Application startup file: `server.js` (if using custom server) or leave blank for `npm start`
4. **Set Environment Variables** in the Node.js app settings
5. **Start Application**

## Troubleshooting

### "Cannot find module" errors:
- Run `npm install --production` on server
- Ensure `node_modules/` is present

### Port already in use:
- Change PORT in `.env.local`: `PORT=3001`
- Update reverse proxy configuration

### 404 errors on routes:
- Check `NEXT_PUBLIC_BASE_URL` is set correctly
- Ensure not using static export if you need API routes

### Firebase connection errors:
- Verify all Firebase environment variables are set
- Check Firebase project settings allow your domain

### PM2 not keeping app running:
```bash
pm2 logs alburaq-logistics  # Check logs
pm2 restart alburaq-logistics  # Restart app
pm2 delete alburaq-logistics  # Remove and recreate
```

## Alternative: Use Vercel (Easier)

If Fasthosts setup is complex, consider Vercel:

1. Push code to GitHub
2. Go to vercel.com
3. Import GitHub repository
4. Add environment variables
5. Deploy (automatic)

Vercel is free for personal projects and optimized for Next.js.

## Support Contacts

- **Fasthosts Support:** Check your Fasthosts account dashboard
- **Next.js Docs:** https://nextjs.org/docs/deployment
- **PM2 Docs:** https://pm2.keymetrics.io/docs/

