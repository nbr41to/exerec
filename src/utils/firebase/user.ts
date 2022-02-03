import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '.';

const userDoc = (id: string) => doc(db, 'users', id);

export const getUserSettings = async () => {
  const userId = auth.currentUser?.uid;
  if (!userId) return;
  try {
    const doc = await getDoc(userDoc(userId));
    return doc.data() as UserSettings;
  } catch (error) {
    console.error(error);
  }
};

/* ユーザ設定の更新 */
export const updateUserSettings = async (params: UserSettings) => {
  const userId = auth.currentUser?.uid;
  if (!userId) return;
  try {
    if (params.ouraPersonalAccessToken === '') {
      params.ouraPersonalAccessToken === null;
    }
    await updateDoc(userDoc(userId), {
      ...params,
    });
  } catch (error) {
    console.error(error);
  }
};
