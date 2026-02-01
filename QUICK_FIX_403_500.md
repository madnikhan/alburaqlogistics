# 🚨 QUICK FIX: 403/500 Errors on Fasthosts

## Immediate Steps to Fix

### Step 1: Connect via SSH

```bash
ssh yourusername@ssh.alburaqlogistics.co.uk
```

### Step 2: Find Your Website Directory

```bash
# Try these one by one:
cd ~/htdocs
ls -la

# OR
cd ~/public_html
ls -la

# OR
cd ~/www
ls -la
```

**You should see:** `package.json`, `.next/`, `public/`, etc.

### Step 3: Check if App is Running

```bash
pm2 status
```

**If nothing shows or app is stopped:**

```bash
# Install PM2 if not installed
npm install -g pm2

# Navigate to your website directory
cd ~/htdocs  # or wherever your files are

# Make sure dependencies are installed
npm install --production

# Start the app
pm2 start npm --name "alburaq-logistics" -- start
pm2 save
pm2 startup
```

### Step 4: Check if .env.local Exists

```bash
ls -la .env.local
```

**If it doesn't exist, create it:**

```bash
nano .env.local
```

**Paste this (press Ctrl+X, then Y, then Enter to save):**

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDa1YU9LKzv2rVmp6-ONHrFbQwrSpjehmM
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=alburaqlogistics-76788.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=alburaqlogistics-76788
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=alburaqlogistics-76788.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1038841940420
NEXT_PUBLIC_FIREBASE_APP_ID=1:1038841940420:web:5386e4368fdb13a7ad3c91
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-J6PBRQELME
NEXT_PUBLIC_BASE_URL=https://alburaqlogistics.co.uk
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password_here
PORT=3000
HOSTNAME=0.0.0.0
NODE_ENV=production
```

### Step 5: Restart the App

```bash
pm2 restart alburaq-logistics
pm2 logs alburaq-logistics
```

**Look for:** `Ready on http://0.0.0.0:3000` or similar

### Step 6: Check cPanel Node.js Selector

1. **Log into Fasthosts cPanel**
2. **Look for "Node.js Selector" or "Node.js App"**
3. **If it exists:**
   - Create new application
   - Point to your directory (`htdocs` or `public_html`)
   - Set startup file: `server.js`
   - Add environment variables
   - Click "Run NPM Install"
   - Click "Restart App"

---

## If Still Not Working

### Option A: Check What Port to Use

Fasthosts might use a different port. Check your cPanel or contact support.

### Option B: Use Static Export (Last Resort)

If Node.js doesn't work, use static files:

**On your local computer:**

```bash
# Backup current config
mv next.config.ts next.config.backup.ts

# Use static config
cp next.config.static.ts next.config.ts

# Build static version
npm run build
```

**Then upload the `out/` folder contents** to `htdocs` via FileZilla.

**Note:** This won't support API routes or server-side features.

---

## Most Common Issue

**The app isn't running!** Make sure PM2 shows your app as "online":

```bash
pm2 status
```

If it shows "stopped" or "errored", check logs:

```bash
pm2 logs alburaq-logistics
```

---

## Need Help?

1. Run this diagnostic:
   ```bash
   echo "=== Node Version ===" && node --version
   echo "=== PM2 Status ===" && pm2 status
   echo "=== Current Directory ===" && pwd
   echo "=== Files in Directory ===" && ls -la
   echo "=== Port Check ===" && netstat -tuln | grep 3000
   ```

2. Share the output with support or check `FASTHOSTS_TROUBLESHOOTING.md` for detailed help.

