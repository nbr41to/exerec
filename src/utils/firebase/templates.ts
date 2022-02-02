import { auth, db } from '.';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore';
import { dateFormatted } from '../dateFormatted';

/* SubCollectionRef */
const templatesRef = (userId: string) =>
  collection(db, 'users', userId, 'templates');

/* Templateを作成 */
export const createTemplate = async (content: string) => {
  const userId = auth.currentUser?.uid;
  if (!userId) return;
  try {
    await addDoc(templatesRef(userId), {
      content,
      updated: dateFormatted(),
    });
  } catch (e) {
    console.error(e);
  }
};

/* Templateを更新 */
export const updateTemplate = async (params: Template) => {
  const userId = auth.currentUser?.uid;
  if (!userId) return;
  const { id, content } = params;

  try {
    await updateDoc(doc(templatesRef(userId), id), {
      content,
      updated: dateFormatted(),
    });
  } catch (e) {
    console.error(e);
  }
};

/* Template一覧を取得 */
export const getTemplates = async () => {
  const userId = auth.currentUser?.uid;
  if (!userId) return [];
  const q = query(templatesRef(userId), orderBy('updated'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      } as Template),
  );
};
