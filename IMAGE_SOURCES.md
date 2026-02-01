# 📸 Image Sources & Carousel Implementation

## ✅ Current Implementation

I've added **image carousels/slideshows** to all service pages using **high-quality, license-free images** from Unsplash.

### Images Used (All License-Free from Unsplash)

**Removals Service:**
- `removals.jpg` - Moving truck/van
- `removals-2.jpg` - Professional movers
- `removals-3.jpg` - Moving boxes

**Office Moving Service:**
- `office.jpg` - Office relocation
- `office-2.jpg` - Business moving
- `office-3.jpg` - Office setup

**House Moving Service:**
- `house.jpg` - Home moving
- `house-2.jpg` - Residential relocation
- `house-3.jpg` - Moving furniture

**Pallet Services:**
- `pallets.jpg` - Pallet delivery
- `pallets-2.jpg` - Warehouse pallets
- `pallets-3.jpg` - Pallet transport

---

## 🎠 Carousel Features

✅ **Auto-play** - Images change automatically every 4-5 seconds  
✅ **Navigation arrows** - Previous/Next buttons  
✅ **Dot indicators** - Click to jump to specific image  
✅ **Image counter** - Shows current image number  
✅ **Smooth transitions** - Fade effect between images  
✅ **Responsive** - Works on all devices  
✅ **Touch/swipe support** - Mobile-friendly  

---

## 📍 Where Carousels Appear

1. **Homepage** (`/`) - Service thumbnails with carousels
2. **Services Page** (`/services`) - Service cards with carousels
3. **Service Detail Pages** (`/services/[slug]`) - Large hero carousel

---

## 🖼️ About Shutterstock

**Important Note:** Shutterstock images require **paid licensing**. Each image typically costs $10-50+ per download.

### If You Want to Use Shutterstock Images:

1. **Purchase images** from Shutterstock:
   - Visit: https://www.shutterstock.com
   - Search for: "moving truck", "office relocation", "house moving", "pallet delivery"
   - Purchase and download images

2. **Replace images:**
   - Download Shutterstock images
   - Save them to `public/services/` folder
   - Replace existing filenames or update `lib/services.ts` with new paths

3. **Update service configuration:**
   ```typescript
   // In lib/services.ts
   images: [
     '/services/removals-shutterstock.jpg',
     '/services/removals-2-shutterstock.jpg',
     '/services/removals-3-shutterstock.jpg',
   ]
   ```

---

## 🆓 Free Alternatives (Current Implementation)

I've used **Unsplash** images which are:
- ✅ **100% Free** - No licensing fees
- ✅ **High Quality** - Professional photos
- ✅ **Commercial Use Allowed** - Can use for business
- ✅ **No Attribution Required** - (though appreciated)

**Other Free Sources:**
- **Pexels** - https://www.pexels.com
- **Pixabay** - https://pixabay.com
- **Freepik** - https://www.freepik.com (some free, some paid)

---

## 🔄 How to Add More Images

To add more images to a carousel:

1. **Download images** to `public/services/` folder
2. **Update `lib/services.ts`:**
   ```typescript
   images: [
     '/services/removals.jpg',
     '/services/removals-2.jpg',
     '/services/removals-3.jpg',
     '/services/removals-4.jpg', // Add new image
   ]
   ```

3. **Rebuild:**
   ```bash
   npm run build
   ```

---

## 🎨 Image Requirements

For best results:
- **Format:** JPG or WebP
- **Size:** 1200x800px or larger
- **Aspect Ratio:** 3:2 or 16:9
- **File Size:** Under 500KB (optimized)
- **Quality:** High resolution for web

---

## 📝 Current Image Files

All images are located in: `public/services/`

```
public/services/
├── removals.jpg
├── removals-2.jpg
├── removals-3.jpg
├── office.jpg
├── office-2.jpg
├── office-3.jpg
├── house.jpg
├── house-2.jpg
├── house-3.jpg
├── pallets.jpg
├── pallets-2.jpg
└── pallets-3.jpg
```

---

## ✅ Implementation Complete

The image carousels are now live on:
- ✅ Homepage service cards
- ✅ Services listing page
- ✅ Individual service detail pages

All carousels include:
- Auto-play functionality
- Navigation controls
- Responsive design
- Smooth animations

---

**Note:** If you purchase Shutterstock images, simply replace the files in `public/services/` and update the paths in `lib/services.ts` if needed.

