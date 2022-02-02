import { getAchievements } from '../firebase/post';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { achievementsHistoriesState } from '../recoil/atoms';
import { useAuth } from './useAuth';

/* 10件の達成履歴 */
export const useAchievementsHistories = () => {
  const user = useAuth();
  const [achievementsHistories, setAchievementsHistories] = useRecoilState(
    achievementsHistoriesState,
  );
  const [i, set] = useState(0);
  const refetch = () => {
    set(i + 1);
  };

  useEffect(() => {
    if (!user.id) return; // ログインしていない場合早期return
    void (async () => {
      const response = await getAchievements();
      setAchievementsHistories(response);
    })();
  }, [user, setAchievementsHistories, i]);

  return { achievementsHistories, refetch };
};
