import { doc, getDoc } from 'firebase/firestore';
import { db } from '.';

const userDoc = (id: string) => doc(db, 'users', id);

export const getUserSettings = async (userId: string) => {
  try {
    const doc = await getDoc(userDoc(userId));
    return doc.data() as UserSettings;
  } catch (error) {
    console.error(error);
  }
};
