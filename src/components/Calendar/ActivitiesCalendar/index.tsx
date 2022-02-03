import { useMemo, useState, VFC } from 'react';
import { useAllAchievements } from 'src/utils/hooks/useAllAchievements';

export const ActivitiesCalendar: VFC = () => {
  const [currentMonth, setCurrentMonth] = useState(
    ('00' + (new Date().getMonth() + 1)).slice(-2),
  );
  const { achievements } = useAllAchievements();

  const currentMonthAchievementDays = useMemo(
    () =>
      achievements
        .filter((achievement) => {
          const { date } = achievement;
          const dateArr = date.split(' ')[0].split('/');
          return dateArr[1] === currentMonth;
        })
        .map((achievement) => {
          const { date } = achievement;
          const dateArr = date.split(' ')[0].split('/');
          return dateArr[2];
        }),
    [achievements, currentMonth],
  );

  return (
    <div>
      <div className='text-center font-bold py-2'>
        {Number(currentMonth)}月の取り組んだ日付け
      </div>
      <div className='flex justify-center items-center gap-2'>
        {currentMonthAchievementDays.map((day, index) => (
          <div
            key={index + day}
            className='rounded-full p-2 w-8 h-8 flex justify-center items-center bg-sky-500 text-white'
          >
            {Number(day)}
          </div>
        ))}
      </div>
    </div>
  );
};
