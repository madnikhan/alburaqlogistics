# 📤 Upload Static Files via FileZilla - Step by Step

## ✅ Your static build is ready!

The `out/` folder contains all your static website files. Now upload them via FileZilla.

---

## Step 1: Open FileZilla

1. **Open FileZilla** on your computer

2. **Connect to your server:**
   - **Host:** `ftp.alburaqlogistics.co.uk` or `77.68.64.22`
   - **Username:** `csh3366588` (or your FTP username)
   - **Password:** Your FTP password
   - **Port:** `21` (or `22` for SFTP)
   - Click **"Quickconnect"**

---

## Step 2: Navigate to Website Directory

**On the RIGHT side (Remote server):**
- Navigate to `htdocs` folder
- OR `public_html` folder
- OR `www` folder
- This is your website's root directory

**On the LEFT side (Local computer):**
- Navigate to: `/Users/muhammadmadni/alburaqlogistics/out/`
- You should see files like:
  - `index.html`
  - `about.html`
  - `services/` folder
  - `_next/` folder
  - `.htaccess` file
  - etc.

---

## Step 3: Clear Old Files (Optional but Recommended)

**Before uploading, you may want to delete old files:**

1. **On the RIGHT side (server):**
   - Select all files and folders
   - Right-click → **"Delete"**
   - Confirm deletion

**OR keep old files and just overwrite them.**

---

## Step 4: Upload All Files

1. **On the LEFT side (local), select ALL files and folders:**
   - Click on any file in the `out/` folder
   - Press `Ctrl+A` (Windows) or `Cmd+A` (Mac) to select all
   - You should see all files highlighted

2. **Upload to server:**
   - **Method 1:** Drag and drop from LEFT to RIGHT
   - **Method 2:** Right-click on selected files → **"Upload"**

3. **Wait for upload to complete:**
   - This will take 2-10 minutes depending on:
     - Number of files
     - File sizes
     - Your internet speed
   - Watch the bottom panel for progress

---

## Step 5: Verify Upload

**On the RIGHT side (server), you should see:**
- ✅ `index.html`
- ✅ `about.html`
- ✅ `services/` folder
- ✅ `_next/` folder (contains JavaScript and CSS)
- ✅ `public/` folder (if it exists)
- ✅ `.htaccess` file
- ✅ `sitemap.xml`
- ✅ `robots.txt`

---

## Step 6: Set File Permissions (If Needed)

If files don't work, you may need to set permissions:

**Via SSH:**
```bash
ssh csh3366588@ssh.alburaqlogistics.co.uk
cd ~/htdocs
chmod 644 *.html
chmod 644 .htaccess
chmod -R 755 _next
chmod -R 755 services
```

**OR via FileZilla:**
- Right-click on files → **"File permissions"**
- Set to: `644` for files, `755` for folders

---

## Step 7: Test Your Website

1. **Open your browser**

2. **Visit:** https://alburaqlogistics.co.uk

3. **Your website should now work!** ✅

---

## ✅ Success Checklist

- [ ] Connected to server via FileZilla
- [ ] Navigated to `htdocs` (or `public_html`/`www`)
- [ ] Selected all files from `out/` folder
- [ ] Uploaded all files to server
- [ ] Verified files are on server
- [ ] Website loads in browser
- [ ] All pages work correctly

---

## 🔧 Troubleshooting

### Website shows 403 Forbidden
- Check file permissions (should be 644 for files, 755 for folders)
- Make sure `.htaccess` file is uploaded
- Verify you're in the correct directory

### Website shows 404 Not Found
- Make sure `index.html` is in the root directory
- Check that all files uploaded successfully
- Verify directory structure matches local `out/` folder

### Pages don't load correctly
- Check browser console for errors (F12)
- Verify `_next/` folder uploaded completely
- Make sure JavaScript files are accessible

### CSS/Images not loading
- Check that `_next/` folder uploaded
- Verify `public/` folder uploaded (if it exists)
- Check file permissions

---

## 🎉 Done!

Your static website is now live! 

**Note:** API routes won't work with static export. If you need API functionality later, you'll need to set up Node.js.

---

## 📋 Quick Reference

**Local files location:**
```
/Users/muhammadmadni/alburaqlogistics/out/
```

**Server location:**
```
~/htdocs/  (or public_html/ or www/)
```

**Website URL:**
```
https://alburaqlogistics.co.uk
```

---

**Need to update?** Just rebuild (`npm run build`) and upload the new `out/` folder files again!

