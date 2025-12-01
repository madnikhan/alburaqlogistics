# Quick Deployment Checklist for Fasthosts

## Pre-Deployment

- [ ] All environment variables ready
- [ ] Firebase project configured
- [ ] Stripe account set up (optional)
- [ ] Domain name ready
- [ ] Fasthosts account active

## Deployment Steps

### 1. Build Application
```bash
npm run build
```

### 2. Prepare Deployment Package
```bash
npm run deploy:prepare
# Or manually: ./deploy.sh
```

### 3. Upload Files
Upload contents of `deploy/` folder to your Fasthosts server via:
- FTP/SFTP (FileZilla, WinSCP)
- SSH (scp command)
- cPanel File Manager

### 4. Server Setup

**On your Fasthosts server:**

```bash
# Navigate to your website directory
cd /path/to/your/website

# Install production dependencies
npm install --production

# Create .env.local file with your variables
nano .env.local
# (Add all environment variables)

# Start the application
npm start
# OR use PM2 for production:
pm2 start npm --name "alburaq-logistics" -- start
pm2 save
```

### 5. Configure Domain

- Point domain to your server IP
- Set up SSL certificate (HTTPS)
- Configure DNS records if needed

### 6. Test

- [ ] Homepage loads
- [ ] Services pages work
- [ ] Booking form works
- [ ] Contact form works
- [ ] Admin dashboard accessible
- [ ] Mobile responsive

## Important Files

- `FASTHOSTS_DEPLOY.md` - Detailed deployment guide
- `DEPLOYMENT.md` - General deployment information
- `.env.example` - Environment variables template
- `deploy.sh` - Automated deployment preparation script

## Need Help?

- Check `FASTHOSTS_DEPLOY.md` for detailed instructions
- Contact Fasthosts support for hosting-specific issues
- Check Next.js deployment docs: https://nextjs.org/docs/deployment

