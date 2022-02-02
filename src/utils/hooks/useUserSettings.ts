import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { auth } from '../firebase';
import { getUserSettings } from '../firebase/user';
import { userSettingsState } from '../recoil/atoms';

export const useUserSettings = () => {
  const [userSettings, setUserSettings] = useRecoilState(userSettingsState);
  const [i, set] = useState(0);
  const refetch = () => {
    set(i + 1);
  };

  useEffect(() => {
    void (async () => {
      const userId = auth.currentUser?.uid;
      if (!userId) return;
      const response = await getUserSettings(userId);
      if (!response) return;
      setUserSettings(response);
    })();
  }, [setUserSettings, i]);

  return { userSettings, refetch };
};
