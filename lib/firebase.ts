import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Lazy init: only initialize when first used (avoids build-time errors when env vars are not set)
let app: FirebaseApp | null = null;

function getFirebaseApp(): FirebaseApp {
  if (app) return app;
  if (!firebaseConfig.apiKey) {
    throw new Error('Firebase is not configured. Add NEXT_PUBLIC_FIREBASE_* env vars in Vercel (or .env.local).');
  }
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  return app;
}

let _db: Firestore | null = null;
export function getDb(): Firestore {
  if (!_db) _db = getFirestore(getFirebaseApp());
  return _db;
}

let _auth: Auth | null = null;
export function getAuthLazy(): Auth {
  if (!_auth) _auth = getAuth(getFirebaseApp());
  return _auth;
}

export default getFirebaseApp;
