import { auth, db } from '.';
import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from 'firebase/firestore';
import { dateFormatted } from '../dateFormatted';

const achievementRef = (userId: string) =>
  collection(db, 'users', userId, 'achievements');

/* Doneを保存 */
export const createAchievement = async (
  params: Omit<Achievement, 'id' | 'date'>,
) => {
  const userId = auth.currentUser?.uid;
  if (!userId) return;
  try {
    await addDoc(achievementRef(userId), {
      ...params,
      date: dateFormatted(),
    });
  } catch (e) {
    console.error(e);
  }
};

/* 履歴を10件取得 */
export const getAchievements = async () => {
  const userId = auth.currentUser?.uid;
  if (!userId) return [];

  const q = query(achievementRef(userId), orderBy('date', 'desc'), limit(10));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      } as Achievement),
  );
};

/* 履歴を全て取得 */
export const getAllAchievements = async () => {
  const userId = auth.currentUser?.uid;
  if (!userId) return [];

  const snapshot = await getDocs(achievementRef(userId));
  return snapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      } as Achievement),
  );
};
