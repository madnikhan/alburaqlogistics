# 📦 Deploy Static Website Using FileZilla (No Node.js Needed)

## ✅ Use This If:
- Node.js is not available on your hosting
- You only need a static website (no API routes)
- You want the simplest deployment method

---

## ⚠️ Limitations of Static Export:
- ❌ API routes won't work (Stripe webhooks, etc.)
- ❌ No server-side rendering
- ❌ No dynamic server features
- ✅ But: Website will work for basic pages and forms

---

## Step 1: Prepare Static Build (On Your Computer)

### 1.1 Switch to Static Config

Open Terminal on your Mac and run:

```bash
cd /Users/muhammadmadni/alburaqlogistics

# Backup current config
mv next.config.ts next.config.backup.ts

# Use static config
cp next.config.static.ts next.config.ts
```

### 1.2 Build Static Version

```bash
npm run build
```

This creates an `out/` folder with static HTML files.

**Wait for build to complete** (1-2 minutes)

### 1.3 Verify Build

```bash
ls -la out/
```

You should see:
- `index.html`
- `about.html`
- `services/` folder
- `_next/` folder
- etc.

---

## Step 2: Upload via FileZilla

### 2.1 Open FileZilla

1. **Open FileZilla** on your computer

2. **Connect to your server:**
   - **Host:** `ftp.alburaqlogistics.co.uk` or `77.68.64.22`
   - **Username:** `csh3366588` (or your FTP username)
   - **Password:** Your FTP password
   - **Port:** `21` (or `22` for SFTP)
   - Click **"Quickconnect"**

### 2.2 Navigate to Website Directory

**On the right side (server):**
- Navigate to `htdocs` or `public_html` or `www`
- This is your website's root directory

**On the left side (local computer):**
- Navigate to your project folder
- Go into the `out/` folder

### 2.3 Upload All Files

1. **Select ALL files and folders** in the `out/` folder:
   - Click any file
   - Press `Ctrl+A` (Windows) or `Cmd+A` (Mac) to select all

2. **Upload to server:**
   - Drag and drop from left to right
   - OR right-click → "Upload"

3. **Wait for upload to complete** (2-5 minutes)

### 2.4 Verify Upload

**On the right side (server), you should see:**
- `index.html`
- `about.html`
- `services/` folder
- `_next/` folder
- `public/` folder (if it exists)

---

## Step 3: Test Your Website

1. **Open your browser**

2. **Visit:** https://alburaqlogistics.co.uk

3. **Your website should now work!** ✅

---

## Step 4: Create .htaccess (Optional but Recommended)

If you want clean URLs (without .html), create a `.htaccess` file:

### 4.1 Create .htaccess on Your Computer

Create a file named `.htaccess` in your `out/` folder with this content:

```apache
# Enable Rewrite Engine
RewriteEngine On
RewriteBase /

# Remove .html extension
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}\.html -f
RewriteRule ^(.*)\.html$ /$1 [R=301,L]

# Add .html extension internally
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}\.html -f
RewriteRule ^(.*)$ $1.html [L]

# Default page
DirectoryIndex index.html

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### 4.2 Upload .htaccess via FileZilla

1. **Upload the `.htaccess` file** to your website root (same place as `index.html`)

2. **Make sure it's named exactly:** `.htaccess` (with the dot at the start)

---

## 🔄 Updating Your Website

When you make changes:

1. **On your computer:**
   ```bash
   cd /Users/muhammadmadni/alburaqlogistics
   npm run build
   ```

2. **Upload new files via FileZilla:**
   - Delete old files on server (or just overwrite)
   - Upload new files from `out/` folder

3. **Done!** Your website is updated.

---

## ✅ Advantages of Static Export

- ✅ No Node.js needed
- ✅ Works on any hosting (even basic shared hosting)
- ✅ Fast loading (all static files)
- ✅ Easy to update (just upload files)
- ✅ No server configuration needed

---

## ❌ Disadvantages

- ❌ No API routes (contact form won't work server-side)
- ❌ No server-side features
- ❌ Client-side only

---

## 💡 Making Contact Form Work

Since API routes don't work with static export, you have options:

### Option 1: Use Client-Side Form Submission
- Forms can submit directly to external services
- Use services like Formspree, Netlify Forms, or EmailJS

### Option 2: Use Firebase Functions
- Keep Firebase integration for forms
- Forms submit directly to Firebase (client-side)

---

## 🎉 Success!

If your website loads at https://alburaqlogistics.co.uk, you're done!

This is the simplest deployment method - no server configuration needed, just upload files via FileZilla.

---

## 📋 Quick Checklist

- [ ] Switched to static config (`next.config.static.ts`)
- [ ] Built static version (`npm run build`)
- [ ] Connected FileZilla to server
- [ ] Uploaded all files from `out/` folder
- [ ] Created and uploaded `.htaccess` file
- [ ] Tested website in browser
- [ ] Website loads successfully

---

**This method works great if you don't need server-side features!** 🚀

