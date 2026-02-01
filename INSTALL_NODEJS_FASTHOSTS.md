# 🔧 Installing Node.js on Fasthosts Server

## Current Issue
- `npm: command not found` - Node.js is not installed
- `pm2: command not found` - PM2 is not installed (needs Node.js first)

## Solution: Install Node.js

### Option 1: Use cPanel Node.js Selector (EASIEST - Recommended)

1. **Log out of SSH** (type `exit`)

2. **Log into Fasthosts cPanel**
   - Go to: https://cpanel.alburaqlogistics.co.uk (or your cPanel URL)
   - Or access via Fasthosts control panel

3. **Find "Node.js Selector" or "Node.js App"**
   - Look in the "Software" section
   - Or search for "Node.js" in cPanel

4. **Create New Application:**
   - **Node.js Version:** Select 18.x or 20.x (latest LTS)
   - **Application Root:** `htdocs` (or wherever your files are)
   - **Application URL:** `/` or leave default
   - **Application Startup File:** `server.js`
   - **Application Mode:** Production
   - **Application Port:** Leave default (usually auto-assigned)

5. **Add Environment Variables:**
   Click "Add Variable" for each:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY = AIzaSyDa1YU9LKzv2rVmp6-ONHrFbQwrSpjehmM
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = alburaqlogistics-76788.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID = alburaqlogistics-76788
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = alburaqlogistics-76788.firebasestorage.app
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = 1038841940420
   NEXT_PUBLIC_FIREBASE_APP_ID = 1:1038841940420:web:5386e4368fdb13a7ad3c91
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID = G-J6PBRQELME
   NEXT_PUBLIC_BASE_URL = https://alburaqlogistics.co.uk
   NEXT_PUBLIC_ADMIN_PASSWORD = your_secure_password_here
   NODE_ENV = production
   ```

6. **Click "Create"**

7. **After creation:**
   - Click "Run NPM Install" button
   - Wait for it to complete
   - Click "Restart App" button

8. **Your website should now work!**

---

### Option 2: Install Node.js via SSH (If cPanel not available)

**Connect via SSH again:**

```bash
ssh csh3366588@ssh.alburaqlogistics.co.uk
cd ~/htdocs
```

**Install NVM (Node Version Manager):**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

**Reload your shell:**

```bash
source ~/.bashrc
# OR
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

**Install Node.js:**

```bash
nvm install 18
nvm use 18
nvm alias default 18
```

**Verify installation:**

```bash
node --version
npm --version
```

**Should show:**
```
v18.x.x
9.x.x
```

**Now install dependencies:**

```bash
cd ~/htdocs
npm install --production
```

**Create .env.local:**

```bash
cat > .env.local << 'EOF'
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
EOF
```

**Install PM2:**

```bash
npm install -g pm2
```

**Start the app:**

```bash
pm2 start npm --name "alburaq-logistics" -- start
pm2 save
pm2 startup
```

**Check status:**

```bash
pm2 status
pm2 logs alburaq-logistics
```

---

## ⚠️ Important Notes

1. **cPanel Node.js Selector is EASIER** - It handles everything automatically
2. **If cPanel doesn't have Node.js Selector**, contact Fasthosts support to enable it
3. **Some shared hosting plans don't support Node.js** - You may need to upgrade to VPS/Cloud hosting

---

## 🆘 If Neither Option Works

**Contact Fasthosts Support:**
- Ask: "Do you support Node.js applications on my hosting plan?"
- Ask: "How do I install Node.js on my server?"
- Ask: "Do you have Node.js Selector in cPanel?"

**Alternative: Use Static Export**
If Node.js isn't supported, you can use static files (but API routes won't work).

---

## ✅ After Node.js is Installed

Your website should work! Visit: https://alburaqlogistics.co.uk

If you still see errors, check:
- cPanel shows app as "Running"
- Environment variables are set correctly
- Files are in the correct directory

