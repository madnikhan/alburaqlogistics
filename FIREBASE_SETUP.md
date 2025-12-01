# Firebase Setup Instructions

## ✅ Firebase Configuration Complete

Your Firebase configuration has been added to `.env.local`. 

## Next Steps

### 1. Enable Firestore Database

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **alburaqlogistics-76788**
3. Click on **Firestore Database** in the left menu
4. Click **Create database**
5. Choose **Start in test mode** (for development)
6. Select a location (recommended: **europe-west2** for UK)
7. Click **Enable**

### 2. Set Up Firestore Security Rules (Important!)

For production, update your Firestore security rules:

1. Go to Firestore Database > Rules
2. Replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /bookings/{bookingId} {
      // Allow read if user is authenticated or email matches
      allow read: if request.auth != null || 
                     resource.data.email == request.auth.token.email;
      
      // Allow create for anyone (booking form)
      allow create: if request.resource.data.keys().hasAll([
        'customerName', 'email', 'phone', 'serviceType', 
        'packageId', 'pickupAddress', 'deliveryAddress',
        'pickupDate', 'pickupTime', 'status', 'paymentStatus', 
        'totalPrice', 'createdAt', 'updatedAt'
      ]);
      
      // Allow update only for authenticated users (admin)
      allow update: if request.auth != null;
      
      // Deny delete (or allow only for admins)
      allow delete: if false;
    }
  }
}
```

### 3. Test the Connection

Run the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` and try:
- Creating a booking
- Checking the admin dashboard
- Looking up bookings

### 4. Verify Firestore is Working

1. Go to Firebase Console > Firestore Database
2. You should see a `bookings` collection appear when you create a booking
3. Check that bookings are being saved correctly

## Current Configuration

- **Project ID**: alburaqlogistics-76788
- **Database**: Firestore (needs to be enabled)
- **Environment**: Development (test mode)

## Troubleshooting

### Error: "Firestore has not been initialized"
- Make sure Firestore Database is enabled in Firebase Console
- Check that `.env.local` file exists and has correct values
- Restart the development server after adding environment variables

### Error: "Permission denied"
- Check Firestore security rules
- Make sure rules allow create operations for bookings

### Bookings not appearing
- Check browser console for errors
- Verify Firestore is enabled
- Check network tab for failed requests

