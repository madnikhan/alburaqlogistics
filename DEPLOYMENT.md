# Deployment Guide for Fasthosts.co.uk

This guide will help you deploy the Al Buraq Logistics website to Fasthosts.co.uk hosting.

## Prerequisites

- Fasthosts hosting account with Node.js support (VPS or Cloud hosting recommended)
- FTP/SFTP access or SSH access
- Domain name configured in Fasthosts

## Deployment Options

### Option 1: VPS/Cloud Hosting (Recommended)

Fasthosts VPS or Cloud hosting supports Node.js applications directly.

#### Step 1: Prepare the Application

1. **Build the production version:**
   ```bash
   npm run build
   ```

2. **Test the production build locally:**
   ```bash
   npm start
   ```

#### Step 2: Upload Files

Upload the following files/folders to your Fasthosts server:

```
alburaqlogistics/
├── .next/              # Built application
├── public/             # Static assets
├── node_modules/      # Dependencies (or install on server)
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
└── .env.local          # Environment variables (keep secure!)
```

**Important:** Do NOT upload:
- `.git/` folder
- `node_modules/` (can be large, install on server instead)
- Development files

#### Step 3: Server Setup

1. **SSH into your Fasthosts server**

2. **Install Node.js** (if not already installed):
   ```bash
   # Check Node.js version
   node --version
   
   # If not installed, install Node.js 18+ using nvm or package manager
   ```

3. **Navigate to your project directory:**
   ```bash
   cd /path/to/your/website
   ```

4. **Install dependencies:**
   ```bash
   npm install --production
   ```

5. **Set up environment variables:**
   ```bash
   # Create .env.local file with your configuration
   nano .env.local
   ```
   
   Add your environment variables (see `.env.example` for reference)

6. **Start the application:**
   ```bash
   npm start
   ```

#### Step 4: Set Up Process Manager (PM2)

For production, use PM2 to keep the app running:

```bash
# Install PM2 globally
npm install -g pm2

# Start the app with PM2
pm2 start npm --name "alburaq-logistics" -- start

# Save PM2 configuration
pm2 save

# Set PM2 to start on server reboot
pm2 startup
```

#### Step 5: Configure Reverse Proxy (Nginx)

If using Nginx, create a configuration file:

```nginx
server {
    listen 80;
    server_name yourdomain.co.uk www.yourdomain.co.uk;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Option 2: Static Export (For Shared Hosting)

If you only have shared hosting without Node.js support, you can export a static version:

#### Step 1: Update next.config.ts

Add static export configuration:

```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
}
```

#### Step 2: Build Static Export

```bash
npm run build
```

This creates an `out/` folder with static HTML files.

#### Step 3: Upload Static Files

Upload the entire `out/` folder contents to your web hosting's `public_html` or `www` directory via FTP.

**Note:** Static export has limitations:
- No API routes (Stripe webhooks won't work)
- No server-side features
- Client-side only functionality

### Option 3: Use Vercel/Netlify (Easiest)

For the easiest deployment, consider using Vercel (made by Next.js creators) or Netlify:

1. **Push your code to GitHub**
2. **Connect to Vercel/Netlify**
3. **Add environment variables**
4. **Deploy automatically**

This is recommended if Fasthosts doesn't support Node.js well.

## Environment Variables Setup

Create a `.env.local` file on your server with:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

# Stripe Configuration (Optional)
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret

# Application Configuration
NEXT_PUBLIC_BASE_URL=https://yourdomain.co.uk
NEXT_PUBLIC_ADMIN_PASSWORD=your_admin_password

# Optional: Distance Calculation APIs
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key
NEXT_PUBLIC_OPENROUTE_API_KEY=your_openroute_key
```

## Fasthosts-Specific Instructions

### If Using cPanel:

1. **Access cPanel** from your Fasthosts account
2. **Use Node.js Selector** (if available):
   - Go to "Node.js Selector" in cPanel
   - Create a new application
   - Set Node.js version to 18 or higher
   - Point to your application directory
   - Set startup file to `server.js` (if using custom server) or use `npm start`

3. **Set Environment Variables** in cPanel Node.js Selector

### If Using SSH/VPS:

Follow Option 1 instructions above.

## Post-Deployment Checklist

- [ ] Test homepage loads correctly
- [ ] Test service pages display packages
- [ ] Test booking form submission
- [ ] Test payment processing (Stripe or demo)
- [ ] Test admin dashboard access
- [ ] Verify Firebase connection
- [ ] Check mobile responsiveness
- [ ] Test contact form
- [ ] Verify SSL certificate (HTTPS)
- [ ] Set up domain redirects (www to non-www or vice versa)

## Troubleshooting

### App won't start:
- Check Node.js version: `node --version` (needs 18+)
- Check environment variables are set correctly
- Check port 3000 is available or configure custom port
- Check PM2 logs: `pm2 logs alburaq-logistics`

### 404 errors on routes:
- Ensure you're using the correct base URL in environment variables
- Check Nginx/Apache configuration for proper routing

### API routes not working:
- Verify server-side rendering is enabled (not using static export)
- Check API route files are uploaded correctly

## Support

For Fasthosts-specific issues, contact Fasthosts support.
For application issues, check the logs and error messages.

