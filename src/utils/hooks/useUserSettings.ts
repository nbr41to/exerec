import { useAuth } from 'src/utils/hooks/useAuth';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { getUserSettings } from '../firebase/user';
import { userSettingsState } from '../recoil/atoms';

export const useUserSettings = () => {
  const user = useAuth();
  const [userSettings, setUserSettings] = useRecoilState(userSettingsState);
  const [i, set] = useState(0);
  const refetch = () => {
    set(i + 1);
  };

  useEffect(() => {
    void (async () => {
      const response = await getUserSettings();
      if (!response) return;
      setUserSettings(response);
    })();
  }, [user, setUserSettings, i]);

  return { userSettings, refetch };
};
