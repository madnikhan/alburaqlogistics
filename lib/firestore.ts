import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  getDoc, 
  updateDoc,
  query,
  where,
  Timestamp
} from 'firebase/firestore';
import { db } from './firebase';
import { Booking } from '@/types';

const BOOKINGS_COLLECTION = 'bookings';

export const createBooking = async (booking: Omit<Booking, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
  try {
    const bookingData = {
      ...booking,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    };
    const docRef = await addDoc(collection(db, BOOKINGS_COLLECTION), bookingData);
    return docRef.id;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};

export const getBooking = async (bookingId: string): Promise<Booking | null> => {
  try {
    const docRef = doc(db, BOOKINGS_COLLECTION, bookingId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        ...data,
        createdAt: data.createdAt?.toDate(),
        updatedAt: data.updatedAt?.toDate()
      } as Booking;
    }
    return null;
  } catch (error) {
    console.error('Error getting booking:', error);
    throw error;
  }
};

export const updateBookingStatus = async (
  bookingId: string, 
  status: Booking['status'],
  paymentStatus?: Booking['paymentStatus']
): Promise<void> => {
  try {
    const docRef = doc(db, BOOKINGS_COLLECTION, bookingId);
    const updateData: any = {
      status,
      updatedAt: Timestamp.now()
    };
    
    if (paymentStatus) {
      updateData.paymentStatus = paymentStatus;
    }
    
    await updateDoc(docRef, updateData);
  } catch (error) {
    console.error('Error updating booking:', error);
    throw error;
  }
};

export const getBookingsByEmail = async (email: string): Promise<Booking[]> => {
  try {
    const q = query(collection(db, BOOKINGS_COLLECTION), where('email', '==', email));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate(),
      updatedAt: doc.data().updatedAt?.toDate()
    })) as Booking[];
  } catch (error) {
    console.error('Error getting bookings:', error);
    throw error;
  }
};

export const getAllBookings = async (): Promise<Booking[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, BOOKINGS_COLLECTION));
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate(),
      updatedAt: doc.data().updatedAt?.toDate()
    })) as Booking[];
  } catch (error) {
    console.error('Error getting all bookings:', error);
    throw error;
  }
};

