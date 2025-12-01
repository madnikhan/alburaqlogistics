# Your Fasthosts Server Setup Guide

## Your Server Details

```
Host: ssh.alburaqlogistics.co.uk
IP: 77.68.64.22
Port: 22
```

## Step 1: Connect to Your Server

```bash
ssh username@ssh.alburaqlogistics.co.uk
# Or use IP:
ssh username@77.68.64.22

# If you need to specify port:
ssh -p 22 username@ssh.alburaqlogistics.co.uk
```

**Note:** Replace `username` with your actual Fasthosts username.

## Step 2: Find Your Website Directory

Once connected, find where your files are:

```bash
# Common locations:
cd ~/public_html
# OR
cd ~/www
# OR
cd /var/www/html
# OR
cd /home/username/public_html

# List files to verify:
ls -la
# Should see: package.json, .next/, public/, etc.
```

## Step 3: Install Dependencies

```bash
# Make sure you're in the website directory
pwd
# Should show your website path

# Install dependencies (CRITICAL!)
npm install --production

# Wait for it to complete (may take 2-5 minutes)
```

## Step 4: Create Environment File

```bash
# Copy example file
cp .env.example .env.local

# Edit with your values
nano .env.local
```

**Add these variables (replace with your actual values):**

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

# Application Configuration
NEXT_PUBLIC_BASE_URL=https://alburaqlogistics.co.uk
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password

# Stripe (Optional)
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

**Save:** Press `Ctrl+X`, then `Y`, then `Enter`

## Step 5: Check Node.js Version

```bash
node --version
# Should show: v18.x.x or higher

# If not installed or wrong version, contact Fasthosts support
```

## Step 6: Start the Application

### Option A: Test Start (for checking)

```bash
npm start
# Should see: "Ready on http://localhost:3000"
# Keep this running to test
```

### Option B: Production Start with PM2 (Recommended)

```bash
# Install PM2 globally
npm install -g pm2

# Start the application
pm2 start npm --name "alburaq-logistics" -- start

# Check status
pm2 status

# View logs
pm2 logs alburaq-logistics

# Save configuration
pm2 save

# Set to start on server reboot
pm2 startup
# Follow the instructions it gives you
```

## Step 7: Test the Application

### Test locally on server:

```bash
# In another terminal or new SSH session:
curl http://localhost:3000
# Should return HTML content
```

### Test via domain:

Visit: `https://alburaqlogistics.co.uk`

## Troubleshooting

### If "npm: command not found"

```bash
# Check if Node.js is installed
which node
which npm

# If not found, contact Fasthosts support to install Node.js 18+
```

### If "Cannot find module"

```bash
# Make sure dependencies are installed
npm install --production

# Verify node_modules exists
ls node_modules/ | head -5
```

### If port 3000 is in use

```bash
# Check what's using the port
netstat -tuln | grep 3000

# Use different port
echo "PORT=3001" >> .env.local
npm start
```

### If app starts but website doesn't load

1. **Check domain DNS:**
   - Verify `alburaqlogistics.co.uk` points to `77.68.64.22`
   - Check A record in your domain settings

2. **Check reverse proxy:**
   - Fasthosts may need Nginx/Apache configuration
   - Contact Fasthosts support for reverse proxy setup

3. **Check firewall:**
   - Ensure port 3000 (or your port) is open
   - Check Fasthosts firewall settings

## Quick Commands Reference

```bash
# Connect to server
ssh username@ssh.alburaqlogistics.co.uk

# Navigate to website
cd ~/public_html  # (adjust path as needed)

# Install dependencies
npm install --production

# Start application
npm start

# PM2 commands
pm2 start npm --name "alburaq-logistics" -- start
pm2 status
pm2 logs alburaq-logistics
pm2 restart alburaq-logistics
pm2 stop alburaq-logistics

# Check if app is running
ps aux | grep node

# Check port
netstat -tuln | grep 3000
```

## Still Need Help?

Run the diagnostic script:

```bash
chmod +x test-server.sh
./test-server.sh
```

This will check everything and tell you what's missing.

