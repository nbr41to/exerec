import { db } from '.';
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

const templatesRef = collection(db, 'templates');

/* Templateを作成 */
export const createTemplate = async (content: string) => {
  try {
    await addDoc(templatesRef, {
      content,
      updated: dateFormatted(),
    });
  } catch (e) {
    console.error(e);
  }
};

/* Templateを更新 */
export const updateTemplate = async (params: Template) => {
  const { id, content } = params;
  try {
    await updateDoc(doc(templatesRef, id), {
      content,
      updated: dateFormatted(),
    });
  } catch (e) {
    console.error(e);
  }
};

/* Template一覧を取得 */
export const getTemplates = async () => {
  const q = query(templatesRef, orderBy('updated'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      } as Template),
  );
};
