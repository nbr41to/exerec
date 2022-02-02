import { doc, getDoc, setDoc } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from '.';

const userDoc = (id: string) => doc(db, 'users', id);

/* Googleアカウントでログイン */
export const googleLogin = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, provider);
    const user = response.user;

    /* ユーザデータの取得 */
    const doc = await getDoc(userDoc(user.uid));
    if (doc.exists()) {
      return doc.data();
    } else {
      /* 新規の場合ユーザデータの作成 */
      await setDoc(userDoc(user.uid), {
        name: user.displayName,
        isConnectedOuraRing: false,
      });
      return {
        id: user.uid,
        name: user.displayName,
        isConnectedOuraRing: false,
      };
    }
  } catch (error) {
    console.error(error);
  }
};
