import { Button, Loading } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useMemo, VFC } from 'react';
import { useOuraActivities } from 'src/utils/hooks/useOuraActivities';
import { useUserSettings } from 'src/utils/hooks/useUserSettings';

export const OuraActivities: VFC = () => {
  const router = useRouter();
  const { ouraActivities } = useOuraActivities();
  const { userSettings } = useUserSettings();

  const beforeRatio = useMemo(() => {
    if (!ouraActivities) return [];
    return (
      ouraActivities[0]?.active_calories - ouraActivities[1]?.active_calories
    );
  }, [ouraActivities]);

  return (
    <div>
      <h3 className='text-center text-lg font-bold  py-4'>
        Oura Ring による運動量(Calories)
      </h3>
      {userSettings.ouraPersonalAccessToken ? (
        <>
          {ouraActivities ? (
            <>
              <div className='text-center'>
                <div className='font-bold'>active_calories 前日比</div>
                <div
                  className={`text-4xl py-4 ${
                    beforeRatio >= 0 ? 'text-blue-500' : 'text-red-500'
                  }`}
                >
                  {beforeRatio}
                </div>
              </div>
              <div className='divide-y px-8'>
                <div className='flex justify-center divide-x font-mono'>
                  <div className='w-36 text-center pr-4'>date</div>
                  <div className='w-20 text-center'>total</div>
                  <div className='w-20 text-center'>active</div>
                </div>
                {ouraActivities.map((activity) => (
                  <div
                    key={activity.day}
                    className='flex justify-center divide-x font-mono'
                  >
                    <div className='w-36 text-right pr-4'>{activity.day}</div>
                    <div className='w-20 text-center'>
                      {activity.total_calories}
                    </div>
                    <div className='w-20 text-center'>
                      {activity.active_calories}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className='text-center mt-12'>
              <Loading />
            </div>
          )}
        </>
      ) : (
        <div className='flex justify-center items-center'>
          <Button onClick={() => router.push('/setting')}>設定する</Button>
        </div>
      )}
    </div>
  );
};
