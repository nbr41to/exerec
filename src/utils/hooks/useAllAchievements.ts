import { getAllAchievements } from './../firebase/post';
import { getAchievements } from '../firebase/post';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { achievementsState } from '../recoil/atoms';
import { useAuth } from './useAuth';

/* 過去の達成を全て取得 */
export const useAllAchievements = () => {
  const user = useAuth();
  const [achievements, setAchievements] = useRecoilState(achievementsState);
  const [i, set] = useState(0);
  const refetch = () => {
    set(i + 1);
  };

  useEffect(() => {
    if (!user.id) return; // ログインしていない場合早期return
    void (async () => {
      const response = await getAllAchievements();
      setAchievements(response);
    })();
  }, [user, setAchievements, i]);

  return { achievements, refetch };
};
