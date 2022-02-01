import { db } from '.';
import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from 'firebase/firestore';
import { dateFormatted } from '../dateFormatted';

const achievementRef = collection(db, 'achievements');

/* Templateを作成 */
export const createAchievement = async (
  params: Omit<Achievement, 'id' | 'date'>,
) => {
  try {
    await addDoc(achievementRef, {
      ...params,
      date: dateFormatted(),
    });
  } catch (e) {
    console.error(e);
  }
};

/* 履歴を10件取得 */
export const getAchievements = async () => {
  const q = query(achievementRef, orderBy('date'), limit(10));
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
  const snapshot = await getDocs(achievementRef);
  return snapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      } as Achievement),
  );
};
