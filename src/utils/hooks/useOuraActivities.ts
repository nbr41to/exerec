import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { ouraActivitiesState } from '../recoil/atoms';
import { useUserSettings } from './useUserSettings';

export const useOuraActivities = () => {
  const [ouraActivities, setOuraActivities] =
    useRecoilState(ouraActivitiesState);
  const { userSettings } = useUserSettings();

  useEffect(() => {
    if (!userSettings.ouraPersonalAccessToken) return;
    void (async () => {
      const result = await fetch('/api/oura-activities', {
        method: 'POST',
        body: JSON.stringify({
          token: userSettings.ouraPersonalAccessToken,
        }),
      });
      const activities = await result.json();
      activities.sort((a: any, b: any) => {
        if (a.day < b.day) return 1;
        if (a.day > b.day) return -1;
        return 0;
      });

      setOuraActivities(activities);
    })();
  }, [userSettings, setOuraActivities]);

  return { ouraActivities };
};
