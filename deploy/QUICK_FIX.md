# Quick Fix: Website Not Loading

## Immediate Steps to Check

### 1. SSH into Your Server

```bash
ssh username@your-server-ip
```

### 2. Navigate to Website Directory

```bash
cd /path/to/your/website
# Usually: /home/username/public_html or /var/www/html
```

### 3. Check if Node.js is Installed

```bash
node --version
# Must be 18 or higher
# If not installed, contact Fasthosts support
```

### 4. Install Dependencies

```bash
npm install --production
# This is CRITICAL - must run this after uploading files
```

### 5. Create Environment File

```bash
nano .env.local
```

**Add these variables (minimum required):**
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
NEXT_PUBLIC_BASE_URL=https://yourdomain.co.uk
NEXT_PUBLIC_ADMIN_PASSWORD=your_password
```

Save: `Ctrl+X`, then `Y`, then `Enter`

### 6. Start the Application

```bash
npm start
```

**Expected output:**
```
> alburaqlogistics@0.1.0 start
> next start

   ▲ Next.js 16.0.4
   - Local:        http://localhost:3000
   - Environments: .env.local

 ✓ Ready in Xms
```

### 7. If It Works Locally But Not via Domain

**The issue is domain/routing. Check:**

1. **Domain DNS:**
   - A record pointing to server IP
   - CNAME for www (if using)

2. **Reverse Proxy (Nginx/Apache):**
   - Needs to forward requests to `http://localhost:3000`

3. **Port Configuration:**
   - Fasthosts might require a specific port
   - Check your hosting panel for assigned port

## Common Error Messages

### "Cannot find module 'next'"
**Fix:**
```bash
npm install --production
```

### "Port 3000 is already in use"
**Fix:**
```bash
# Use different port
echo "PORT=3001" >> .env.local
npm start
```

### "EADDRINUSE: address already in use"
**Fix:**
```bash
# Find what's using the port
lsof -i :3000
# Kill the process or use different port
```

### "NEXT_PUBLIC_BASE_URL is not set"
**Fix:**
```bash
# Add to .env.local
echo "NEXT_PUBLIC_BASE_URL=https://yourdomain.co.uk" >> .env.local
```

## Still Not Working?

Run this diagnostic script on your server:

```bash
cd /path/to/your/website

echo "=== DIAGNOSTIC CHECK ==="
echo ""
echo "1. Node.js version:"
node --version
echo ""
echo "2. Files present:"
ls -la | grep -E "package.json|next.config|.next|public"
echo ""
echo "3. Dependencies installed:"
test -d node_modules && echo "✅ node_modules exists" || echo "❌ node_modules MISSING - run: npm install --production"
echo ""
echo "4. Environment file:"
test -f .env.local && echo "✅ .env.local exists" || echo "❌ .env.local MISSING - create it!"
echo ""
echo "5. Try starting:"
npm start
```

Send the output to get more specific help.

