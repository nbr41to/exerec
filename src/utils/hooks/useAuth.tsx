import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { auth } from '../firebase';
import { userSettingsState } from '../recoil/atoms';

export const useAuth = () => {
  const router = useRouter();
  const setUserSettings = useSetRecoilState(userSettingsState);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/login');
      } else {
        /* ユーザ設定情報の取得 */
        setUserSettings({
          id: user.uid,
          name: user.displayName || 'no_name',
          isConnectedOuraRing: false,
        });
      }
    });
  }, [router, setUserSettings]);
};
