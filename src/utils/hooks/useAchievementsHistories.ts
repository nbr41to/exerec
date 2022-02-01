import { getAchievements } from '../firebase/post';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { achievementsState } from '../recoil/atoms';

/* 10件の達成履歴 */
export const useAchievementsHistories = () => {
  const [achievements, setAchievements] = useRecoilState(achievementsState);
  const [i, set] = useState(0);
  const refetch = () => {
    set(i + 1);
  };

  useEffect(() => {
    void (async () => {
      const response = await getAchievements();
      setAchievements(response);
    })();
  }, [setAchievements, i]);

  return { achievements, refetch };
};
