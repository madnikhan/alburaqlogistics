# Verify Your Setup - Step by Step

## After Uploading Files, Run These Commands on Your Server

### 1. Check You're in the Right Directory

```bash
pwd
# Should show your website directory
ls -la
# Should show: package.json, .next/, public/, etc.
```

### 2. Verify Node.js

```bash
node --version
# Must show: v18.x.x or higher
# If not, contact Fasthosts support
```

### 3. Install Dependencies (MOST IMPORTANT!)

```bash
npm install --production
# This will take a few minutes
# Wait for it to complete
```

### 4. Verify Installation

```bash
ls node_modules/ | head -5
# Should show folders like: next, react, firebase, etc.
```

### 5. Create Environment File

```bash
# Copy example
cp .env.example .env.local

# Edit it
nano .env.local
# Add all your actual values
# Save: Ctrl+X, Y, Enter
```

### 6. Test Start

```bash
npm start
# Should see: "Ready on http://localhost:3000"
# Keep this running and test in another terminal:
curl http://localhost:3000
# Should return HTML
```

### 7. If Local Test Works But Domain Doesn't

**The issue is domain/routing, not the application.**

Check:
- Domain DNS settings
- Reverse proxy configuration
- Port forwarding
- Firewall rules

## Quick Commands Summary

```bash
# Full setup sequence:
cd /path/to/your/website
npm install --production
cp .env.example .env.local
nano .env.local  # Add your values
npm start

# For production (PM2):
npm install -g pm2
pm2 start npm --name "alburaq-logistics" -- start
pm2 save
pm2 startup
```

## What to Check If Still Not Working

1. **Error messages** - What exact error do you see?
2. **Server logs** - Check PM2 logs or npm output
3. **Domain configuration** - Is domain pointing to server?
4. **Port access** - Can you access http://your-server-ip:3000?

