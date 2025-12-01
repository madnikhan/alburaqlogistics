# Troubleshooting: Website Not Loading on Fasthosts

## Quick Diagnostic Steps

### Step 1: Check if Application is Running

**SSH into your server and run:**

```bash
# Check if Node.js is installed
node --version
# Should show v18 or higher

# Check if npm is installed
npm --version

# Navigate to your website directory
cd /path/to/your/website

# Check if files are there
ls -la

# Check if node_modules exists
ls node_modules/ | head -5
```

### Step 2: Install Dependencies

If `node_modules` folder is missing or empty:

```bash
cd /path/to/your/website
npm install --production
```

### Step 3: Check Environment Variables

```bash
# Check if .env.local exists
ls -la .env.local

# If it doesn't exist, create it:
nano .env.local
# Add all your environment variables
# Save: Ctrl+X, then Y, then Enter
```

### Step 4: Try Starting the Application

```bash
# Test start
npm start

# Should see: "Ready on http://localhost:3000"
# If you see errors, note them down
```

### Step 5: Check Port Configuration

```bash
# Check what port the app is using
# Default is 3000, but Fasthosts might require a different port

# Check if port 3000 is available
netstat -tuln | grep 3000

# Or check what's running
ps aux | grep node
```

## Common Issues & Solutions

### Issue 1: "Cannot find module" errors

**Solution:**
```bash
cd /path/to/your/website
rm -rf node_modules
npm install --production
```

### Issue 2: Port already in use

**Solution:**
Create or update `.env.local`:
```env
PORT=3001
# Or use the port Fasthosts assigned to you
```

Then restart:
```bash
npm start
```

### Issue 3: Application starts but website doesn't load

**Possible causes:**
1. **Domain not pointing to server**
   - Check DNS settings in Fasthosts
   - Verify domain A record points to server IP

2. **No reverse proxy configured**
   - If using Nginx, configure reverse proxy
   - If using Apache, may need mod_proxy

3. **Firewall blocking port**
   - Check Fasthosts firewall settings
   - Ensure port 3000 (or your port) is open

### Issue 4: 404 errors on all routes

**Solution:**
Check `NEXT_PUBLIC_BASE_URL` in `.env.local`:
```env
NEXT_PUBLIC_BASE_URL=https://yourdomain.co.uk
# Make sure it matches your actual domain
```

### Issue 5: Application crashes immediately

**Check logs:**
```bash
# If using PM2
pm2 logs alburaq-logistics

# Or check npm logs
npm start 2>&1 | tee app.log
```

## Fasthosts-Specific Issues

### cPanel Node.js Selector

If using cPanel:

1. **Go to Node.js Selector** in cPanel
2. **Create Application:**
   - Application root: `/home/username/yourdomain.co.uk`
   - Application URL: `/`
   - Application startup file: `server.js` (or leave blank)
   - Node.js version: 18 or higher
3. **Set Environment Variables** in the Node.js app settings
4. **Start Application** from cPanel

### Shared Hosting (No Node.js)

If you only have shared hosting without Node.js:

1. **Use Static Export:**
   ```bash
   # On your local machine, update next.config.ts:
   # Change to: output: 'export'
   
   # Rebuild
   npm run build
   
   # Upload 'out' folder contents instead
   ```

## Step-by-Step Debugging

### 1. Verify Files Uploaded Correctly

```bash
# On server, check these exist:
ls -la .next/
ls -la public/
ls -la package.json
ls -la next.config.ts
```

### 2. Verify Dependencies Installed

```bash
npm list --depth=0
# Should show all dependencies
```

### 3. Test Application Locally on Server

```bash
npm start
# Keep this running and test: http://localhost:3000
# If this works, the issue is with domain/routing
```

### 4. Check Application Logs

```bash
# Start with verbose logging
DEBUG=* npm start

# Or check PM2 logs
pm2 logs alburaq-logistics --lines 50
```

### 5. Verify Environment Variables

```bash
# Check if variables are loaded
node -e "require('dotenv').config({path:'.env.local'}); console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? 'Firebase: OK' : 'Firebase: MISSING')"
```

## Quick Fixes

### Fix 1: Complete Reinstall

```bash
cd /path/to/your/website
rm -rf node_modules
rm -rf .next/cache
npm install --production
npm run build
npm start
```

### Fix 2: Use PM2 for Production

```bash
# Install PM2
npm install -g pm2

# Start app
pm2 start npm --name "alburaq-logistics" -- start

# Check status
pm2 status

# View logs
pm2 logs alburaq-logistics

# Save configuration
pm2 save

# Auto-start on reboot
pm2 startup
```

### Fix 3: Check File Permissions

```bash
# Ensure files are readable
chmod -R 755 /path/to/your/website
chmod 644 /path/to/your/website/.env.local
```

## Still Not Working?

### Get More Information

1. **Check Fasthosts error logs:**
   - cPanel → Error Logs
   - Or: `/var/log/` directory

2. **Check application logs:**
   ```bash
   pm2 logs alburaq-logistics --err
   ```

3. **Test with curl:**
   ```bash
   curl http://localhost:3000
   # If this works, app is running but domain isn't configured
   ```

4. **Contact Fasthosts Support:**
   - Ask about Node.js hosting setup
   - Ask about port configuration
   - Ask about reverse proxy setup

## Emergency: Use Static Export

If Node.js hosting isn't working, use static export:

1. **On your local machine:**
   ```bash
   # Backup current next.config.ts
   cp next.config.ts next.config.backup.ts
   
   # Use static config
   cp next.config.static.ts next.config.ts
   
   # Rebuild
   npm run build
   
   # Upload 'out' folder contents to public_html
   ```

2. **Note:** Static export means no API routes (Stripe webhooks won't work)

