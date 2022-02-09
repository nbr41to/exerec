import { useMemo, useState, VFC } from 'react';
import { useAllAchievements } from 'src/utils/hooks/useAllAchievements';

export const ActivitiesCalendar: VFC = () => {
  const [targetingDate, setTargetingDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  });
  /* 指定月の日付を取得 */
  const currentCalender: number[] = useMemo(() => {
    const currentYear = targetingDate.year;
    const currentMonth = targetingDate.month;
    const monthlydays = new Date(currentYear, currentMonth, 0).getDate(); // 選択された月の最終日を取得
    return Array(monthlydays)
      .fill(0)
      .map((_, i) => i + 1);
  }, [targetingDate]);

  const { achievements } = useAllAchievements();
  /* 選択された月の達成した日付 */
  const currentMonthAchievementDate = useMemo(
    () =>
      achievements
        .filter((achievement) => {
          const { date } = achievement;
          const currenYear = String(targetingDate.year);
          const currentMonth = ('00' + targetingDate.month).slice(-2);
          const dateArr = date.split(' ')[0].split('/');
          return dateArr[0] === currenYear && dateArr[1] === currentMonth;
        })
        .map((achievement) => {
          /* 日付の数字だけを返す */
          const { date } = achievement;
          const dateArr = date.split(' ')[0].split('/');
          return Number(dateArr[2]);
        })
        .sort(),
    [achievements, targetingDate],
  );
  /* 判定用の関数 */
  const isDoneDate = (date: number): boolean =>
    currentMonthAchievementDate.includes(date);

  return (
    <div>
      <div className='text-center font-bold py-2'>
        {targetingDate.month}月の取り組んだ日付け
      </div>
      <div className='overflow-x-scroll'>
        <div className='my-4 mx-auto w-[272px] flex items-center flex-wrap gap-2'>
          {currentCalender.map((day, index) => (
            <div
              key={index + day}
              className={`rounded-full p-2 w-8 h-8 flex justify-center items-center  text-white ${
                isDoneDate(day) ? 'bg-sky-500' : 'bg-slate-300'
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
