# 🚀 Deploy Next.js Website Using FileZilla - Complete Guide

This guide will walk you through deploying your Next.js website to your server using FileZilla (FTP client).

## 📋 Prerequisites

Before you begin, make sure you have:
- ✅ Your hosting account credentials (FTP username, password, host)
- ✅ FileZilla installed on your computer ([Download here](https://filezilla-project.org/))
- ✅ SSH access to your server (for post-upload setup)
- ✅ Node.js installed on your server (version 18 or higher)

---

## STEP 1: Prepare Your Files for Upload

### 1.1 Build Your Next.js Application

Open Terminal (Mac) or Command Prompt (Windows) and navigate to your project:

```bash
cd /Users/muhammadmadni/alburaqlogistics
```

Build the production version:

```bash
npm run build
```

Wait for the build to complete. You should see "✓ Compiled successfully" at the end.

### 1.2 Prepare Deployment Package

Run the deployment preparation script:

```bash
npm run deploy:prepare
```

This creates a `deploy/` folder with all the files you need to upload.

**✅ Verify:** Check that the `deploy/` folder exists and contains:
- `.next/` folder (built application)
- `public/` folder (static assets)
- `package.json`
- `package-lock.json`
- `next.config.ts`
- `tsconfig.json`
- `server.js` (if present)

---

## STEP 2: Install and Set Up FileZilla

### 2.1 Download FileZilla

1. Go to https://filezilla-project.org/
2. Click "Download FileZilla Client"
3. Download and install the version for your operating system

### 2.2 Open FileZilla

After installation, open FileZilla. You'll see:
- **Left side:** Your local computer files
- **Right side:** Remote server files (empty until connected)

---

## STEP 3: Connect to Your Server via FileZilla

### 3.1 Get Your FTP Credentials

You'll need these from your hosting provider:
- **Host:** Usually `ftp.yourdomain.com` or your server IP (e.g., `77.68.64.22`)
- **Username:** Your FTP username
- **Password:** Your FTP password
- **Port:** Usually `21` for FTP or `22` for SFTP

### 3.2 Connect in FileZilla

**Method 1: Quick Connect (Temporary)**

1. At the top of FileZilla, enter:
   - **Host:** `ftp.alburaqlogistics.co.uk` (or your server IP)
   - **Username:** Your FTP username
   - **Password:** Your FTP password
   - **Port:** `21` (or `22` for SFTP)
2. Click **"Quickconnect"**

**Method 2: Site Manager (Recommended - Saves Connection)**

1. Click **"File"** → **"Site Manager"** (or press `Ctrl+S` / `Cmd+S`)
2. Click **"New Site"** and give it a name (e.g., "Al Buraq Logistics")
3. Enter your connection details:
   - **Protocol:** Choose `FTP - File Transfer Protocol` or `SFTP - SSH File Transfer Protocol`
   - **Host:** `ftp.alburaqlogistics.co.uk` or your server IP
   - **Port:** `21` for FTP, `22` for SFTP
   - **Logon Type:** `Normal`
   - **User:** Your FTP username
   - **Password:** Your FTP password
4. Click **"Connect"**

### 3.3 Verify Connection

Once connected, you should see:
- ✅ Status message: "Directory listing successful"
- ✅ Right side shows your server's directory structure
- ✅ Common folders: `public_html`, `www`, or `htdocs`

**If connection fails:**
- Double-check your credentials
- Try using SFTP (port 22) instead of FTP (port 21)
- Contact your hosting provider for correct FTP details

---

## STEP 4: Navigate to Your Website Directory

### 4.1 Find Your Website Folder

On the **right side** (remote server), navigate to your website's root directory. Common locations:

- `public_html/` (most common)
- `www/`
- `htdocs/`
- `/home/yourusername/public_html/`

**To navigate:**
- Double-click folders to enter them
- Use the folder path at the top to see where you are
- Look for existing website files (like `index.html`) to confirm you're in the right place

### 4.2 Create a Backup (Optional but Recommended)

Before uploading, backup existing files:
1. Select all files in the current directory
2. Right-click → **"Download"** to save a backup to your computer

---

## STEP 5: Upload Files to Server

### 5.1 Navigate to Your Local Deploy Folder

On the **left side** (local computer), navigate to your project's `deploy/` folder:

```
/Users/muhammadmadni/alburaqlogistics/deploy
```

### 5.2 Select All Files

1. Click on any file in the `deploy/` folder
2. Press `Ctrl+A` (Windows) or `Cmd+A` (Mac) to select all files and folders
3. You should see all files highlighted:
   - `.next/` folder
   - `public/` folder
   - `package.json`
   - `package-lock.json`
   - `next.config.ts`
   - `tsconfig.json`
   - etc.

### 5.3 Upload Files

**Method 1: Drag and Drop**
- Drag all selected files from the left side to the right side (server)
- Drop them in your website directory

**Method 2: Right-Click Menu**
- Right-click on the selected files
- Choose **"Upload"**

### 5.4 Monitor Upload Progress

You'll see:
- **Bottom panel:** Shows upload queue and progress
- **Status:** "Transferring..." for each file
- **Time remaining:** Estimated time to complete

**Upload time:** Usually takes 2-10 minutes depending on:
- Number of files
- File sizes (`.next/` folder can be large)
- Your internet speed

### 5.5 Verify Upload Complete

Wait until you see:
- ✅ All files show "Successful" in the transfer queue
- ✅ No files remaining in queue
- ✅ Right side shows all uploaded files

**Important:** Make sure the `.next/` folder uploaded completely (it contains many files).

---

## STEP 6: Post-Upload Setup (Via SSH)

After uploading files, you need to complete setup via SSH (command line). FileZilla only uploads files; you still need to:

1. Install dependencies
2. Set up environment variables
3. Start the application

### 6.1 Connect to Server via SSH

**On Mac/Linux:**
```bash
ssh yourusername@ssh.alburaqlogistics.co.uk
```

**On Windows:**
- Use PuTTY or Windows Terminal
- Or use FileZilla's built-in terminal (View → Command → Enter custom command)

### 6.2 Navigate to Website Directory

```bash
cd ~/public_html
```

(Or wherever you uploaded your files)

### 6.3 Verify Files Are There

```bash
ls -la
```

You should see your uploaded files.

### 6.4 Install Dependencies

```bash
npm install --production
```

This installs all required packages. Wait 2-5 minutes for completion.

### 6.5 Create Environment Variables File

```bash
nano .env.local
```

Add your environment variables (press `Ctrl+X`, then `Y`, then `Enter` to save):

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

# Stripe (Optional)
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=

# Optional APIs
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
NEXT_PUBLIC_OPENROUTE_API_KEY=
```

### 6.6 Start the Application

**Option A: Test Run**
```bash
npm start
```

**Option B: Production with PM2 (Recommended)**
```bash
# Install PM2 globally (if not already installed)
npm install -g pm2

# Start the application
pm2 start npm --name "alburaq-logistics" -- start

# Save PM2 configuration
pm2 save

# Make PM2 start on server reboot
pm2 startup
```

---

## STEP 7: Test Your Website

1. Open your web browser
2. Visit: `https://alburaqlogistics.co.uk`
3. Your website should load!

**Test these pages:**
- Homepage: `https://alburaqlogistics.co.uk`
- Services: `https://alburaqlogistics.co.uk/services`
- Booking: `https://alburaqlogistics.co.uk/book`
- Contact: `https://alburaqlogistics.co.uk/contact`

---

## 🔄 Updating Your Website (Future Deployments)

When you make changes to your website:

1. **Build locally:**
   ```bash
   npm run build
   npm run deploy:prepare
   ```

2. **Connect FileZilla** to your server

3. **Upload only changed files** (or upload everything to be safe)

4. **Via SSH, restart the application:**
   ```bash
   cd ~/public_html
   npm install --production  # If you added new dependencies
   pm2 restart alburaq-logistics
   ```

---

## 🛠️ Troubleshooting

### FileZilla Connection Issues

**Problem:** "Connection refused" or "Connection timeout"

**Solutions:**
- Verify FTP credentials with your hosting provider
- Try SFTP (port 22) instead of FTP (port 21)
- Check if your IP is blocked (contact hosting support)
- Try connecting from a different network

### Files Not Uploading

**Problem:** Upload fails or files are incomplete

**Solutions:**
- Check your internet connection
- Try uploading in smaller batches
- Verify you have write permissions on the server
- Check available disk space on server: `df -h` (via SSH)

### Website Shows "Cannot GET /"

**Problem:** Website isn't running

**Solutions:**
- Connect via SSH and check: `pm2 status`
- Start the app: `pm2 start npm --name "alburaq-logistics" -- start`
- Check logs: `pm2 logs alburaq-logistics`

### "npm: command not found" on Server

**Problem:** Node.js not installed on server

**Solutions:**
- Install Node.js via SSH (see Step 6 in BEGINNER_DEPLOY_GUIDE.md)
- Or contact your hosting provider to install Node.js

### Environment Variables Not Working

**Problem:** Configuration not loading

**Solutions:**
- Verify `.env.local` file exists in the website directory
- Check file permissions: `chmod 644 .env.local`
- Restart the application: `pm2 restart alburaq-logistics`

---

## 📝 FileZilla Tips & Best Practices

### 1. Use SFTP Instead of FTP
- SFTP is more secure (encrypted)
- Use port 22 for SFTP
- Most modern hosting supports SFTP

### 2. Save Connection in Site Manager
- Saves time on future uploads
- Can store multiple server connections
- Access via: File → Site Manager

### 3. Enable Transfer Queue
- FileZilla shows upload progress
- Can pause/resume transfers
- View failed transfers easily

### 4. Compare Directories
- View → Directory Comparison
- Helps identify which files changed
- Useful for updates

### 5. Set Transfer Type
- Transfer → Transfer Type → Binary
- Important for images and compiled files
- Prevents file corruption

---

## ✅ Quick Checklist

Before deploying:
- [ ] Built the application (`npm run build`)
- [ ] Prepared deployment package (`npm run deploy:prepare`)
- [ ] Have FTP credentials ready
- [ ] FileZilla installed

During deployment:
- [ ] Connected to server via FileZilla
- [ ] Navigated to correct website directory
- [ ] Uploaded all files from `deploy/` folder
- [ ] Verified all files uploaded successfully

After deployment:
- [ ] Connected via SSH
- [ ] Installed dependencies (`npm install --production`)
- [ ] Created `.env.local` file
- [ ] Started application (PM2 or `npm start`)
- [ ] Tested website in browser

---

## 🎉 Success!

If your website loads at `https://alburaqlogistics.co.uk`, congratulations! 🎊

Your Next.js website is now live using FileZilla!

---

## 📚 Additional Resources

- **FileZilla Documentation:** https://wiki.filezilla-project.org/
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **PM2 Documentation:** https://pm2.keymetrics.io/docs/

---

## 💡 Alternative: Upload via FileZilla, Setup via cPanel

If your hosting has cPanel:

1. Upload files via FileZilla (Steps 1-5)
2. Log into cPanel
3. Use "Node.js Selector" to:
   - Select Node.js version (18+)
   - Point to your application directory
   - Set startup file: `server.js` or `npm start`
   - Add environment variables
   - Start the application

This avoids needing SSH access.

---

**Need Help?** Check the troubleshooting section or refer to `BEGINNER_DEPLOY_GUIDE.md` for more detailed server setup instructions.

