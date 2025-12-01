# Quick Start: Deploy to Fasthosts

## 🚀 Fastest Way to Deploy

### Step 1: Prepare Files (2 minutes)

```bash
# Build and prepare deployment package
npm run deploy:prepare
```

This creates a `deploy/` folder with all files ready to upload.

### Step 2: Upload to Fasthosts (5 minutes)

**Using FTP (FileZilla, WinSCP, etc.):**
1. Connect to your Fasthosts FTP server
2. Navigate to your domain's root directory
3. Upload ALL contents of the `deploy/` folder

**Using SSH:**
```bash
scp -r deploy/* username@your-server:/path/to/your/domain/
```

### Step 3: Server Setup (5 minutes)

**SSH into your Fasthosts server:**

```bash
# Navigate to your website
cd /path/to/your/website

# Install dependencies
npm install --production

# Create environment file
nano .env.local
# (Paste your environment variables, save with Ctrl+X, Y, Enter)

# Start the app
npm start
```

### Step 4: Keep It Running (PM2)

```bash
# Install PM2
npm install -g pm2

# Start with PM2
pm2 start npm --name "alburaq-logistics" -- start

# Save configuration
pm2 save

# Auto-start on reboot
pm2 startup
```

### Step 5: Test

Visit `https://yourdomain.co.uk` and test:
- ✅ Homepage loads
- ✅ Services pages work
- ✅ Booking form works

## 📝 What You Need

Before deploying, make sure you have:
- [ ] Firebase configuration
- [ ] Domain name ready
- [ ] Fasthosts account with Node.js support (VPS/Cloud)
- [ ] FTP/SSH access

## 📚 Need More Help?

- **Detailed Guide:** See `FASTHOSTS_DEPLOY.md`
- **Checklist:** See `DEPLOYMENT_CHECKLIST.md`
- **Troubleshooting:** Check logs with `pm2 logs alburaq-logistics`

## ⚠️ Important Notes

1. **Environment Variables:** Never upload `.env.local` via FTP. Create it directly on the server.

2. **Node.js Version:** Your server needs Node.js 18 or higher.

3. **Port:** Default port is 3000. Make sure it's available or configure a different port.

4. **SSL:** Set up HTTPS/SSL certificate for security.

5. **Static Export:** If you only have shared hosting (no Node.js), see `FASTHOSTS_DEPLOY.md` for static export option.

## 🆘 Quick Troubleshooting

**App won't start:**
```bash
node --version  # Should be 18+
pm2 logs alburaq-logistics  # Check errors
```

**404 errors:**
- Check `NEXT_PUBLIC_BASE_URL` in `.env.local`
- Verify domain is pointing to your server

**Firebase errors:**
- Verify all Firebase env variables are set
- Check Firebase console for domain restrictions

