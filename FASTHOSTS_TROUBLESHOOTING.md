# 🔧 Fasthosts Deployment Troubleshooting - 403/500 Errors

## Problem: 403 Forbidden / 500 Internal Server Error

If you're seeing these errors after deploying to Fasthosts, follow these steps:

---

## ✅ Quick Diagnosis

### Step 1: Check if Node.js App is Running

**Connect via SSH:**
```bash
ssh yourusername@ssh.alburaqlogistics.co.uk
```

**Check if the app is running:**
```bash
cd ~/htdocs  # or wherever you uploaded files
pm2 status
```

**If PM2 shows nothing or the app is stopped:**
```bash
# Start the app
pm2 start npm --name "alburaq-logistics" -- start
pm2 save
```

---

## 🔍 Common Issues & Solutions

### Issue 1: Files in Wrong Directory

**Problem:** Files uploaded to `htdocs` but server expects them elsewhere.

**Solution:**
1. Check where your website files should be:
   ```bash
   # Common locations:
   cd ~/public_html
   # OR
   cd ~/www
   # OR
   cd ~/htdocs
   ```

2. Verify files are there:
   ```bash
   ls -la
   # Should see: package.json, .next/, public/, etc.
   ```

3. If files are in wrong location, move them:
   ```bash
   # Example: Move from htdocs to public_html
   mv ~/htdocs/* ~/public_html/
   ```

---

### Issue 2: Node.js Not Running

**Problem:** The Next.js application isn't running.

**Solution:**

1. **Navigate to your website directory:**
   ```bash
   cd ~/htdocs  # or public_html, www, etc.
   ```

2. **Check if Node.js is installed:**
   ```bash
   node --version
   # Should show v18.x.x or higher
   ```

3. **If Node.js not installed, install it:**
   ```bash
   # Using NVM (recommended)
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   # Disconnect and reconnect SSH, then:
   nvm install 18
   nvm use 18
   ```

4. **Install dependencies:**
   ```bash
   npm install --production
   ```

5. **Start the application:**
   ```bash
   # Test first
   npm start
   # If it works, stop it (Ctrl+C) and use PM2:
   pm2 start npm --name "alburaq-logistics" -- start
   pm2 save
   ```

---

### Issue 3: Wrong Port Configuration

**Problem:** App running on wrong port or port not accessible.

**Solution:**

1. **Check what port your app is using:**
   ```bash
   # Check PM2 logs
   pm2 logs alburaq-logistics
   # Look for: "Ready on http://localhost:XXXX"
   ```

2. **Set correct port in environment:**
   ```bash
   # Create or edit .env.local
   nano .env.local
   ```
   
   Add:
   ```env
   PORT=3000
   HOSTNAME=0.0.0.0
   ```

3. **Restart the app:**
   ```bash
   pm2 restart alburaq-logistics
   ```

---

### Issue 4: Missing .env.local File

**Problem:** Environment variables not set, causing errors.

**Solution:**

1. **Create .env.local file:**
   ```bash
   cd ~/htdocs  # or your website directory
   nano .env.local
   ```

2. **Add required variables:**
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDa1YU9LKzv2rVmp6-ONHrFbQwrSpjehmM
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=alburaqlogistics-76788.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=alburaqlogistics-76788
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=alburaqlogistics-76788.firebasestorage.app
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1038841940420
   NEXT_PUBLIC_FIREBASE_APP_ID=1:1038841940420:web:5386e4368fdb13a7ad3c91
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-J6PBRQELME

   # Application Configuration
   NEXT_PUBLIC_BASE_URL=https://alburaqlogistics.co.uk
   NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password_here

   # Server Configuration
   PORT=3000
   HOSTNAME=0.0.0.0
   NODE_ENV=production
   ```

3. **Save and restart:**
   ```bash
   # Press Ctrl+X, Y, Enter to save
   pm2 restart alburaq-logistics
   ```

---

### Issue 5: No Reverse Proxy Configured

**Problem:** Fasthosts is trying to serve files directly instead of routing to Node.js app.

**Solution A: Use cPanel Node.js Selector (Easiest)**

1. **Log into Fasthosts cPanel**
2. **Find "Node.js Selector" or "Node.js App"**
3. **Create New Application:**
   - Node.js Version: 18 or higher
   - Application Root: `htdocs` (or your directory)
   - Application URL: `/` or your domain
   - Application Startup File: `server.js` or leave blank
   - Application Mode: Production
4. **Add Environment Variables** in cPanel
5. **Click "Create"**
6. **Click "Run NPM Install"**
7. **Click "Restart App"**

**Solution B: Configure Apache .htaccess (If using shared hosting)**

Create `.htaccess` in your website root:

```apache
# Redirect all requests to Node.js app
RewriteEngine On
RewriteBase /

# Don't rewrite files that exist
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d

# Proxy to Node.js app (if Fasthosts supports it)
# Note: This may not work on all shared hosting plans
RewriteRule ^(.*)$ http://localhost:3000/$1 [P,L]
```

**Solution C: Use Static Export (If Node.js not available)**

If Fasthosts doesn't support Node.js, use static export:

1. **On your local computer:**
   ```bash
   # Rename next.config.ts temporarily
   mv next.config.ts next.config.dynamic.ts
   cp next.config.static.ts next.config.ts
   
   # Build static version
   npm run build
   ```

2. **Upload the `out/` folder contents** to `htdocs` via FileZilla

3. **Note:** This won't support API routes or server-side features

---

### Issue 6: File Permissions

**Problem:** Server can't read files due to permissions.

**Solution:**

```bash
cd ~/htdocs  # or your website directory
chmod 755 .
chmod 644 package.json
chmod -R 755 .next
chmod -R 755 public
chmod 644 .env.local
```

---

### Issue 7: Missing Dependencies

**Problem:** `node_modules` not installed or incomplete.

**Solution:**

```bash
cd ~/htdocs  # or your website directory
rm -rf node_modules
npm install --production
pm2 restart alburaq-logistics
```

---

## 🔄 Complete Reset & Redeploy

If nothing works, try a complete reset:

### On Server (via SSH):

```bash
# 1. Stop the app
pm2 stop alburaq-logistics
pm2 delete alburaq-logistics

# 2. Navigate to website directory
cd ~/htdocs  # or public_html, www

# 3. Remove old files (keep .env.local if you have it)
rm -rf node_modules .next

# 4. Reinstall dependencies
npm install --production

# 5. Rebuild (if needed)
npm run build

# 6. Start with PM2
pm2 start npm --name "alburaq-logistics" -- start
pm2 save
pm2 startup
```

### Check Logs:

```bash
# View PM2 logs
pm2 logs alburaq-logistics

# View last 50 lines
pm2 logs alburaq-logistics --lines 50
```

---

## 📋 Verification Checklist

After fixing, verify:

- [ ] Node.js is installed (`node --version`)
- [ ] Dependencies installed (`ls node_modules`)
- [ ] `.env.local` file exists and has correct values
- [ ] App is running (`pm2 status` shows "online")
- [ ] Port is correct (check logs: `pm2 logs`)
- [ ] Files are in correct directory
- [ ] File permissions are correct
- [ ] cPanel Node.js Selector configured (if available)
- [ ] Reverse proxy configured (if needed)

---

## 🆘 Still Not Working?

### Check Error Logs:

```bash
# PM2 logs
pm2 logs alburaq-logistics --err

# System logs (if accessible)
tail -f /var/log/apache2/error.log
# OR
tail -f /var/log/nginx/error.log
```

### Contact Fasthosts Support:

1. **Ask them:**
   - Do you support Node.js applications?
   - What port should I use?
   - Do you have Node.js Selector in cPanel?
   - How do I configure a reverse proxy?

2. **Provide them:**
   - Your domain: alburaqlogistics.co.uk
   - Error messages from logs
   - What you've tried

---

## 💡 Alternative: Use Static Export

If Fasthosts doesn't support Node.js well, use static export:

1. **On your local computer:**
   ```bash
   # Switch to static config
   mv next.config.ts next.config.backup.ts
   cp next.config.static.ts next.config.ts
   
   # Build
   npm run build
   ```

2. **Upload `out/` folder contents** to `htdocs` via FileZilla

3. **Note:** API routes won't work with static export

---

## ✅ Success Indicators

Your site is working when:
- ✅ No 403/500 errors
- ✅ Homepage loads
- ✅ All pages accessible
- ✅ No console errors in browser
- ✅ PM2 shows app as "online"

---

**Need more help?** Check the main deployment guide: `BEGINNER_DEPLOY_GUIDE.md`

