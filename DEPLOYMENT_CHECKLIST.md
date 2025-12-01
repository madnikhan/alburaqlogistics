# Fasthosts Deployment Checklist

## Pre-Deployment Preparation

### 1. Environment Variables
- [ ] Firebase configuration ready
- [ ] Stripe keys ready (if using Stripe)
- [ ] Admin password set
- [ ] Base URL determined (e.g., https://yourdomain.co.uk)
- [ ] Optional API keys ready (Google Maps, OpenRouteService)

### 2. Build & Test
- [ ] Run `npm run build` successfully
- [ ] Test production build locally: `npm start`
- [ ] Verify all pages load correctly
- [ ] Test booking flow
- [ ] Test contact form
- [ ] Test admin dashboard

### 3. Files Preparation
- [ ] Run deployment script: `npm run deploy:prepare` or `./deploy.sh`
- [ ] Review files in `deploy/` folder
- [ ] Ensure `.env.local` is NOT included (create on server)

## Fasthosts Account Setup

### 4. Hosting Type Check
- [ ] Determine hosting type:
  - [ ] VPS/Cloud (supports Node.js) → Use Option 1
  - [ ] Shared Hosting (no Node.js) → Use Static Export

### 5. Server Access
- [ ] FTP/SFTP credentials ready
- [ ] SSH access (if available)
- [ ] cPanel access (if available)

### 6. Domain Configuration
- [ ] Domain name ready
- [ ] DNS configured (if needed)
- [ ] SSL certificate plan (Let's Encrypt recommended)

## Deployment Steps

### 7. Upload Files
- [ ] Connect to Fasthosts server (FTP/SSH)
- [ ] Upload `deploy/` folder contents
- [ ] Verify all files uploaded correctly

### 8. Server Configuration

**For VPS/Cloud (Node.js support):**
- [ ] SSH into server
- [ ] Navigate to website directory
- [ ] Run `npm install --production`
- [ ] Create `.env.local` file with all variables
- [ ] Test: `npm start`
- [ ] Set up PM2: `pm2 start npm --name "alburaq-logistics" -- start`
- [ ] Configure reverse proxy (Nginx/Apache)

**For Shared Hosting (Static Export):**
- [ ] Update `next.config.ts` with `output: 'export'`
- [ ] Rebuild: `npm run build`
- [ ] Upload `out/` folder contents to `public_html`
- [ ] Upload `.htaccess` file

### 9. Domain & SSL
- [ ] Point domain to server
- [ ] Set up SSL certificate (HTTPS)
- [ ] Test domain loads correctly
- [ ] Verify HTTPS works

### 10. Environment Variables on Server
- [ ] Create `.env.local` on server
- [ ] Add all Firebase variables
- [ ] Add Stripe variables (if using)
- [ ] Set `NEXT_PUBLIC_BASE_URL` to your domain
- [ ] Set admin password
- [ ] Restart application after adding variables

## Post-Deployment Testing

### 11. Functionality Tests
- [ ] Homepage loads: `https://yourdomain.co.uk`
- [ ] Services pages work: `/services/removals`
- [ ] Packages display correctly
- [ ] Booking form works
- [ ] Price calculator works
- [ ] Contact form submits
- [ ] Admin dashboard accessible
- [ ] My Bookings page works
- [ ] Payment flow works (Stripe or demo)

### 12. Performance & Security
- [ ] Pages load quickly
- [ ] HTTPS redirects HTTP
- [ ] Mobile responsive on all pages
- [ ] No console errors
- [ ] Firebase connection working
- [ ] Images load correctly

### 13. Monitoring Setup
- [ ] PM2 monitoring (if using): `pm2 monit`
- [ ] Check logs: `pm2 logs alburaq-logistics`
- [ ] Set up error monitoring (optional)

## Troubleshooting

### Common Issues:

**App won't start:**
- Check Node.js version (needs 18+)
- Verify environment variables
- Check port availability
- Review PM2 logs

**404 errors:**
- Verify base URL in environment variables
- Check reverse proxy configuration
- Ensure routes are built correctly

**Firebase errors:**
- Verify all Firebase env variables
- Check Firebase project settings
- Verify domain is allowed in Firebase

**Stripe webhook errors:**
- Update webhook URL in Stripe dashboard
- Verify webhook secret matches
- Check server can receive webhooks

## Maintenance

### Regular Tasks:
- [ ] Monitor PM2 logs weekly
- [ ] Update dependencies monthly
- [ ] Backup database (Firebase) regularly
- [ ] Review error logs
- [ ] Update SSL certificate (if manual)

## Support Resources

- **Fasthosts Support:** Your account dashboard
- **Next.js Docs:** https://nextjs.org/docs/deployment
- **PM2 Docs:** https://pm2.keymetrics.io/docs/
- **Firebase Docs:** https://firebase.google.com/docs

## Quick Commands Reference

```bash
# Build for production
npm run build

# Test production build
npm start

# Prepare deployment package
npm run deploy:prepare

# On server - Install dependencies
npm install --production

# On server - Start with PM2
pm2 start npm --name "alburaq-logistics" -- start
pm2 save
pm2 startup

# On server - View logs
pm2 logs alburaq-logistics

# On server - Restart app
pm2 restart alburaq-logistics

# On server - Stop app
pm2 stop alburaq-logistics
```

