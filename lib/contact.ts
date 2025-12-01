import { 
  collection, 
  addDoc,
  Timestamp
} from 'firebase/firestore';
import { db } from './firebase';

const CONTACTS_COLLECTION = 'contacts';

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const submitContactForm = async (data: ContactSubmission): Promise<string> => {
  try {
    const contactData = {
      ...data,
      createdAt: Timestamp.now(),
      read: false,
    };
    const docRef = await addDoc(collection(db, CONTACTS_COLLECTION), contactData);
    return docRef.id;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

