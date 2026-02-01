# 🎯 Install Node.js via cPanel (EASIEST Method for Fasthosts)

## ✅ This is the EASIEST way - No SSH needed!

---

## Step 1: Access cPanel

1. **Log into Fasthosts Control Panel**
   - Go to: https://www.fasthosts.co.uk/customer/login
   - Or: https://cpanel.alburaqlogistics.co.uk
   - Or access via your Fasthosts account dashboard

2. **Find your hosting account** and click "Manage" or "cPanel"

---

## Step 2: Find Node.js Selector

1. **In cPanel, look for one of these:**
   - **"Node.js Selector"** (most common)
   - **"Node.js App"**
   - **"Node.js"** (in Software section)
   - **"Setup Node.js App"**

2. **If you can't find it:**
   - Use the search box in cPanel (top right)
   - Search for "Node.js"
   - Or check under "Software" or "Web Applications"

---

## Step 3: Create New Node.js Application

1. **Click "Create Application"** or **"Create"** button

2. **Fill in the form:**

   **Node.js Version:**
   - Select: **18.x** or **20.x** (latest LTS version)
   - Avoid versions below 18

   **Application Mode:**
   - Select: **Production**

   **Application Root:**
   - Enter: `htdocs`
   - OR: `public_html`
   - OR: `www`
   - (This is where you uploaded your files)

   **Application URL:**
   - Leave as `/` (default)
   - OR select your domain: `alburaqlogistics.co.uk`

   **Application Startup File:**
   - Enter: `server.js`
   - OR leave blank (it will auto-detect)

   **Application Port:**
   - Leave as default (usually auto-assigned)
   - OR enter: `3000` if you know the port

3. **Click "Create"** button

---

## Step 4: Add Environment Variables

After creating the application, you'll see a section for **Environment Variables**.

1. **Click "Add Variable"** for each of these:

   ```
   Variable Name: NEXT_PUBLIC_FIREBASE_API_KEY
   Variable Value: AIzaSyDa1YU9LKzv2rVmp6-ONHrFbQwrSpjehmM
   ```

   ```
   Variable Name: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
   Variable Value: alburaqlogistics-76788.firebaseapp.com
   ```

   ```
   Variable Name: NEXT_PUBLIC_FIREBASE_PROJECT_ID
   Variable Value: alburaqlogistics-76788
   ```

   ```
   Variable Name: NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
   Variable Value: alburaqlogistics-76788.firebasestorage.app
   ```

   ```
   Variable Name: NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
   Variable Value: 1038841940420
   ```

   ```
   Variable Name: NEXT_PUBLIC_FIREBASE_APP_ID
   Variable Value: 1:1038841940420:web:5386e4368fdb13a7ad3c91
   ```

   ```
   Variable Name: NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
   Variable Value: G-J6PBRQELME
   ```

   ```
   Variable Name: NEXT_PUBLIC_BASE_URL
   Variable Value: https://alburaqlogistics.co.uk
   ```

   ```
   Variable Name: NEXT_PUBLIC_ADMIN_PASSWORD
   Variable Value: your_secure_password_here
   ```

   ```
   Variable Name: NODE_ENV
   Variable Value: production
   ```

   ```
   Variable Name: PORT
   Variable Value: 3000
   ```

   ```
   Variable Name: HOSTNAME
   Variable Value: 0.0.0.0
   ```

2. **Click "Save"** after adding all variables

---

## Step 5: Install Dependencies

1. **Find the "Run NPM Install" button** (usually near the application details)

2. **Click "Run NPM Install"**

3. **Wait for it to complete** (takes 2-5 minutes)
   - You'll see progress/output
   - Wait until it says "Installation complete" or similar

---

## Step 6: Start/Restart Application

1. **Find the "Restart App" or "Start App" button**

2. **Click it**

3. **Wait a few seconds** for the app to start

4. **Check the status** - should show "Running" or "Active"

---

## Step 7: Test Your Website

1. **Open a new browser tab**

2. **Visit:** https://alburaqlogistics.co.uk

3. **Your website should now work!** ✅

---

## 🎉 Success!

If your website loads, you're done! The Node.js app is now running automatically.

---

## 🔧 Troubleshooting

### If Node.js Selector is NOT available:

**Option 1: Contact Fasthosts Support**
- Ask: "How do I enable Node.js on my hosting plan?"
- Ask: "Do you have Node.js Selector in cPanel?"
- They may need to enable it for your account

**Option 2: Upgrade Your Plan**
- Some shared hosting plans don't include Node.js
- You may need to upgrade to VPS or Cloud hosting
- Contact Fasthosts to discuss options

**Option 3: Use Static Export**
- If Node.js isn't available, you can use static files
- See "STATIC_EXPORT_OPTION.md" for instructions
- Note: API routes won't work with static export

---

## 📋 Quick Checklist

- [ ] Logged into cPanel
- [ ] Found Node.js Selector
- [ ] Created new application
- [ ] Set Node.js version to 18.x or 20.x
- [ ] Set Application Root to `htdocs` (or your directory)
- [ ] Set Startup File to `server.js`
- [ ] Added all environment variables
- [ ] Ran NPM Install
- [ ] Started/Restarted the app
- [ ] Website loads successfully

---

## 💡 Tips

1. **Bookmark your cPanel URL** for easy access
2. **Note the application port** - you might need it later
3. **Keep environment variables secure** - don't share them
4. **Check logs** in cPanel if something goes wrong

---

## 🆘 Still Need Help?

If Node.js Selector isn't available:
1. Contact Fasthosts support
2. Ask about Node.js support on your plan
3. Consider upgrading to a plan with Node.js support

---

**This method is much easier than SSH!** No command line needed. 🎊

