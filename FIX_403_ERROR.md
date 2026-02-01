# 🔧 Fix 403 Forbidden Error on Demo Payment Page

## Problem
Getting "403 Forbidden" when accessing:
```
https://alburaqlogistics.co.uk/demo-payment/?booking_id=...
```

## Solution

I've updated the `.htaccess` file to properly handle query parameters. You need to:

### Step 1: Upload the Updated .htaccess File

1. **Open FileZilla**
2. **Connect to your server**
3. **Navigate to your website root** (`htdocs` or `public_html`)
4. **Upload the updated `.htaccess` file** from:
   ```
   /Users/muhammadmadni/alburaqlogistics/out/.htaccess
   ```
5. **Overwrite the existing `.htaccess` file**

### Step 2: Verify File Permissions

Make sure `.htaccess` has correct permissions:

**Via SSH:**
```bash
ssh csh3366588@ssh.alburaqlogistics.co.uk
cd ~/htdocs
chmod 644 .htaccess
```

**OR via FileZilla:**
- Right-click on `.htaccess` → File permissions
- Set to: `644`

### Step 3: Test the Page

Visit: https://alburaqlogistics.co.uk/demo-payment/?booking_id=TEST123

It should now work!

---

## Alternative: Direct Access

If the rewrite rules still cause issues, you can access the page directly:

```
https://alburaqlogistics.co.uk/demo-payment.html?booking_id=...
```

The updated `.htaccess` will handle both formats.

---

## What Was Fixed

The `.htaccess` file now:
- ✅ Properly preserves query strings (`?booking_id=...`)
- ✅ Handles both `/demo-payment` and `/demo-payment.html` URLs
- ✅ Uses `QSA` (Query String Append) flag to preserve parameters

---

## Still Getting 403?

1. **Check if `.htaccess` is uploaded correctly**
2. **Verify file permissions** (should be 644)
3. **Check server error logs** (if accessible)
4. **Try accessing directly:** `https://alburaqlogistics.co.uk/demo-payment.html?booking_id=TEST`

---

**After uploading the updated `.htaccess`, the demo-payment page should work!** ✅

