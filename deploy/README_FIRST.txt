╔════════════════════════════════════════════════════════════════════════════╗
║                  ⚠️  WEBSITE NOT LOADING? ⚠️                              ║
╚════════════════════════════════════════════════════════════════════════════╝

IF YOUR WEBSITE IS NOT LOADING AFTER UPLOAD, FOLLOW THESE STEPS:

═══════════════════════════════════════════════════════════════════════════════

STEP 1: SSH INTO YOUR SERVER
─────────────────────────────
ssh username@your-server-ip

STEP 2: NAVIGATE TO YOUR WEBSITE
─────────────────────────────────
cd /path/to/your/website
# Usually: /home/username/public_html or /var/www/html

STEP 3: INSTALL DEPENDENCIES (CRITICAL!)
─────────────────────────────────────────
npm install --production

STEP 4: CREATE ENVIRONMENT FILE
─────────────────────────────────
nano .env.local

# Copy from .env.example and fill in your actual values
# Save: Ctrl+X, then Y, then Enter

STEP 5: START THE APPLICATION
──────────────────────────────
npm start

# OR use the helper script:
chmod +x START_APP.sh
./START_APP.sh

═══════════════════════════════════════════════════════════════════════════════

COMMON ISSUES:
──────────────

❌ "Cannot find module"
   → Run: npm install --production

❌ "Port already in use"
   → Add to .env.local: PORT=3001

❌ App starts but website doesn't load
   → Check domain DNS settings
   → Check reverse proxy configuration
   → Verify NEXT_PUBLIC_BASE_URL in .env.local

═══════════════════════════════════════════════════════════════════════════════

QUICK DIAGNOSTIC:
─────────────────
Run: chmod +x test-server.sh && ./test-server.sh

This will check:
✅ Node.js version
✅ Required files
✅ Dependencies
✅ Environment variables
✅ Port availability

═══════════════════════════════════════════════════════════════════════════════

FOR DETAILED HELP:
──────────────────
See: QUICK_FIX.md or TROUBLESHOOTING.md

═══════════════════════════════════════════════════════════════════════════════

