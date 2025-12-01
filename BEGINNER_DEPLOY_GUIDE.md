# 🚀 Complete Beginner's Guide: Deploy to Fasthosts

This guide will walk you through deploying your Al Buraq Logistics website to Fasthosts step-by-step, assuming you're completely new to this.

## 📋 What You'll Need

Before starting, make sure you have:
- ✅ Fasthosts hosting account (with SSH access)
- ✅ Your domain: `alburaqlogistics.co.uk`
- ✅ Your SSH login details (username and password)
- ✅ A computer with internet connection

## 🎯 Overview

We're going to:
1. Prepare files on your computer
2. Connect to your Fasthosts server
3. Upload files
4. Install dependencies
5. Configure environment variables
6. Start the website

---

## STEP 1: Prepare Files on Your Computer

### 1.1 Open Terminal/Command Prompt

**On Mac:**
- Press `Cmd + Space`
- Type "Terminal"
- Press Enter

**On Windows:**
- Press `Windows + R`
- Type `cmd`
- Press Enter

### 1.2 Navigate to Your Project

Type this command (press Enter after each line):

```bash
cd /Users/muhammadmadni/alburaqlogistics
```

**Note:** If you're on Windows, the path will be different. Use:
```bash
cd C:\Users\YourName\alburaqlogistics
```
(Replace `YourName` with your actual Windows username)

### 1.3 Build the Website

Type this command:

```bash
npm run build
```

Wait for it to finish (takes 1-2 minutes). You should see "✓ Compiled successfully" at the end.

### 1.4 Prepare Deployment Package

Type this command:

```bash
npm run deploy:prepare
```

This creates a `deploy/` folder with all files ready to upload.

**✅ Check:** You should see a message saying "✅ Deployment package created in 'deploy/' directory"

---

## STEP 2: Connect to Your Fasthosts Server

### 2.1 Open a New Terminal Window

Keep the first terminal open, open a new one.

### 2.2 Connect via SSH

Type this command (replace `yourusername` with your Fasthosts username):

```bash
ssh yourusername@ssh.alburaqlogistics.co.uk
```

**Or use the IP address:**

```bash
ssh yourusername@77.68.64.22
```

### 2.3 Enter Your Password

When prompted, type your Fasthosts password and press Enter.

**Note:** You won't see the password as you type - this is normal for security!

### 2.4 Verify You're Connected

You should see something like:
```
yourusername@server:~$
```

If you see this, you're connected! ✅

---

## STEP 3: Find Your Website Directory

### 3.1 Check Where You Are

Type:
```bash
pwd
```

This shows your current location.

### 3.2 Find Your Website Folder

Common locations on Fasthosts:
- `~/public_html` (most common)
- `~/www`
- `/var/www/html`
- `/home/yourusername/public_html`

Try these commands one by one:

```bash
cd ~/public_html
```

If that doesn't work, try:
```bash
cd ~/www
```

If that doesn't work, try:
```bash
cd /var/www/html
```

### 3.3 Check What's There

Type:
```bash
ls -la
```

This lists all files. If you see files like `index.html` or other website files, you're in the right place!

**Note:** If the folder is empty or doesn't exist, that's okay - we'll upload files there.

---

## STEP 4: Upload Files to Server

### Option A: Using SCP (Recommended - Easy)

**On your LOCAL computer** (not the server), open a NEW terminal window.

Navigate to your project:
```bash
cd /Users/muhammadmadni/alburaqlogistics
```

Upload all files:
```bash
scp -r deploy/* yourusername@ssh.alburaqlogistics.co.uk:~/public_html/
```

Replace `yourusername` with your actual username.

Enter your password when prompted.

**Wait for upload to complete** (may take 2-5 minutes).

### Option B: Using FTP Client (Alternative)

1. Download FileZilla (free): https://filezilla-project.org/
2. Install and open FileZilla
3. Enter these details:
   - **Host:** `ftp.alburaqlogistics.co.uk` or `77.68.64.22`
   - **Username:** Your Fasthosts username
   - **Password:** Your Fasthosts password
   - **Port:** 21
4. Click "Quickconnect"
5. Navigate to `public_html` folder on the right side
6. On the left side, navigate to your `deploy` folder
7. Select ALL files in `deploy` folder
8. Right-click → Upload

---

## STEP 5: Go Back to Server Terminal

Switch back to your SSH terminal (where you're connected to the server).

### 5.1 Navigate to Website Directory

```bash
cd ~/public_html
```

### 5.2 Verify Files Are There

```bash
ls -la
```

You should see files like:
- `package.json`
- `next.config.ts`
- `.next/` folder
- `public/` folder
- etc.

If you don't see these files, go back to Step 4 and upload again.

---

## STEP 6: Install Node.js (If Not Already Installed)

### 6.1 Check if Node.js is Installed

```bash
node --version
```

**If you see a version number** (like `v18.17.0`), skip to Step 7.

**If you see "command not found"**, continue below.

### 6.2 Install Node.js Using NVM (Recommended)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

Then restart your terminal connection (disconnect and reconnect via SSH).

After reconnecting, install Node.js:

```bash
nvm install 18
nvm use 18
```

Verify:
```bash
node --version
```

Should show `v18.x.x` or higher.

---

## STEP 7: Install Website Dependencies

### 7.1 Navigate to Website Directory

```bash
cd ~/public_html
```

### 7.2 Install Dependencies

```bash
npm install --production
```

**Wait for this to complete** (takes 2-5 minutes).

You should see:
```
added XXX packages in XXs
```

---

## STEP 8: Create Environment Variables File

### 8.1 Create the File

```bash
nano .env.local
```

This opens a text editor called "nano".

### 8.2 Add Your Configuration

Copy and paste this template, then replace the values:

```env
# Firebase Configuration (REQUIRED)
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDa1YU9LKzv2rVmp6-ONHrFbQwrSpjehmM
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=alburaqlogistics-76788.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=alburaqlogistics-76788
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=alburaqlogistics-76788.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1038841940420
NEXT_PUBLIC_FIREBASE_APP_ID=1:1038841940420:web:5386e4368fdb13a7ad3c91
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-J6PBRQELME

# Application Configuration (REQUIRED)
NEXT_PUBLIC_BASE_URL=https://alburaqlogistics.co.uk
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password_here

# Stripe (OPTIONAL - leave empty if not using)
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=

# Optional APIs
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
NEXT_PUBLIC_OPENROUTE_API_KEY=
```

### 8.3 Save the File

1. Press `Ctrl + X` (to exit)
2. Press `Y` (to confirm save)
3. Press `Enter` (to confirm filename)

---

## STEP 9: Start the Website

### Option A: Test Run (Recommended First)

```bash
npm start
```

This starts the website. You should see:
```
> alburaqlogistics@0.1.0 start
> next start

   ▲ Next.js 16.0.4
   - Local:        http://localhost:3000
```

**Keep this terminal open!** The website is now running.

Open your browser and visit: `https://alburaqlogistics.co.uk`

**If it works:** Press `Ctrl + C` to stop, then continue to Option B.

**If it doesn't work:** Check the error messages and see Troubleshooting section.

### Option B: Run in Background (Production)

We'll use PM2 to keep the website running even after you disconnect.

#### Install PM2

```bash
npm install -g pm2
```

#### Start Website with PM2

```bash
pm2 start npm --name "alburaq-logistics" -- start
```

#### Save PM2 Configuration

```bash
pm2 save
```

#### Make PM2 Start on Server Reboot

```bash
pm2 startup
```

Follow the instructions it shows (usually just copy and paste a command).

#### Check Status

```bash
pm2 status
```

You should see your website listed as "online".

#### View Logs (if needed)

```bash
pm2 logs alburaq-logistics
```

---

## STEP 10: Configure Domain & SSL

### 10.1 Point Domain to Server

1. Log into Fasthosts Control Panel
2. Go to "Domains" → "DNS Settings"
3. Make sure your domain points to your server IP: `77.68.64.22`
4. Set A record: `@` → `77.68.64.22`
5. Set CNAME record: `www` → `alburaqlogistics.co.uk`

### 10.2 Set Up SSL Certificate (HTTPS)

1. In Fasthosts Control Panel, go to "SSL Certificates"
2. Click "Install SSL" or "Let's Encrypt"
3. Select your domain: `alburaqlogistics.co.uk`
4. Click "Install" or "Generate"
5. Wait 5-10 minutes for certificate to activate

---

## STEP 11: Configure Reverse Proxy (If Needed)

If your website doesn't load directly, you may need to configure a reverse proxy.

### Check if Nginx is Installed

```bash
nginx -v
```

If Nginx is installed, create a configuration:

```bash
sudo nano /etc/nginx/sites-available/alburaqlogistics
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name alburaqlogistics.co.uk www.alburaqlogistics.co.uk;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Save (`Ctrl+X`, `Y`, `Enter`), then:

```bash
sudo ln -s /etc/nginx/sites-available/alburaqlogistics /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## ✅ Testing Your Website

1. Open your browser
2. Visit: `https://alburaqlogistics.co.uk`
3. You should see your website!

**Test these pages:**
- Homepage: `https://alburaqlogistics.co.uk`
- Services: `https://alburaqlogistics.co.uk/services`
- Booking: `https://alburaqlogistics.co.uk/book`
- Contact: `https://alburaqlogistics.co.uk/contact`

---

## 🔧 Troubleshooting

### Website Shows "Cannot GET /"

**Problem:** Website isn't running or wrong port.

**Solution:**
```bash
cd ~/public_html
pm2 status
```

If not running:
```bash
pm2 start npm --name "alburaq-logistics" -- start
```

### Website Shows "502 Bad Gateway"

**Problem:** Website crashed or port conflict.

**Solution:**
```bash
pm2 logs alburaq-logistics
```

Check for errors, then restart:
```bash
pm2 restart alburaq-logistics
```

### Can't Connect via SSH

**Problem:** Wrong credentials or server down.

**Solution:**
- Double-check username and password
- Try using IP address instead: `ssh username@77.68.64.22`
- Contact Fasthosts support if still not working

### "npm: command not found"

**Problem:** Node.js not installed.

**Solution:** Go back to Step 6 and install Node.js.

### Files Not Uploading

**Problem:** Wrong path or permissions.

**Solution:**
- Check you're uploading to `~/public_html`
- Verify permissions: `chmod 755 ~/public_html`
- Try uploading via FTP instead (FileZilla)

### Environment Variables Not Working

**Problem:** File not created or wrong location.

**Solution:**
```bash
cd ~/public_html
ls -la .env.local
```

If file doesn't exist, create it again (Step 8).

---

## 📞 Getting Help

If you get stuck:

1. **Check PM2 logs:**
   ```bash
   pm2 logs alburaq-logistics
   ```

2. **Check if website is running:**
   ```bash
   pm2 status
   ```

3. **Restart website:**
   ```bash
   pm2 restart alburaq-logistics
   ```

4. **Contact Fasthosts Support:**
   - Phone: Check your Fasthosts account
   - Email: support@fasthosts.co.uk
   - Live Chat: Available in control panel

---

## 🎉 Success!

If your website is loading at `https://alburaqlogistics.co.uk`, congratulations! 🎊

Your website is now live and accessible to everyone!

---

## 📝 Quick Reference Commands

**Connect to server:**
```bash
ssh yourusername@ssh.alburaqlogistics.co.uk
```

**Go to website folder:**
```bash
cd ~/public_html
```

**Check if website is running:**
```bash
pm2 status
```

**Start website:**
```bash
pm2 start npm --name "alburaq-logistics" -- start
```

**Stop website:**
```bash
pm2 stop alburaq-logistics
```

**Restart website:**
```bash
pm2 restart alburaq-logistics
```

**View logs:**
```bash
pm2 logs alburaq-logistics
```

**Update website (after making changes):**
```bash
cd ~/public_html
git pull  # if using git
npm install --production
pm2 restart alburaq-logistics
```

---

## 🔄 Updating Your Website

When you make changes to your website:

1. **On your computer:** Make changes, test locally
2. **Build:** `npm run build`
3. **Prepare:** `npm run deploy:prepare`
4. **Upload:** Upload new `deploy/` folder files to server
5. **On server:** `cd ~/public_html && npm install --production`
6. **Restart:** `pm2 restart alburaq-logistics`

---

Good luck! You've got this! 💪

