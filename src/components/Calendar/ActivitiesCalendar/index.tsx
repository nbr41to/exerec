import { Button } from '@nextui-org/react';
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

  /* 翌月へ */
  const nextMonth = () => {
    if (targetingDate.month === 12) {
      setTargetingDate({
        year: targetingDate.year + 1,
        month: 1,
      });
    } else {
      setTargetingDate({
        year: targetingDate.year,
        month: targetingDate.month + 1,
      });
    }
  };
  /* 先月へ */
  const prevMonth = () => {
    if (targetingDate.month === 1) {
      setTargetingDate({
        year: targetingDate.year - 1,
        month: 12,
      });
    } else {
      setTargetingDate({
        year: targetingDate.year,
        month: targetingDate.month - 1,
      });
    }
  };

  return (
    <div>
      <div className='text-center text-lg font-bold mt-4'>
        {targetingDate.month}月
      </div>
      <div className='overflow-x-scroll'>
        <div className='my-4 mx-auto w-[272px] h-[192px] flex content-start flex-wrap gap-2'>
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
        <div className='flex justify-between items-center mx-auto w-[272px]'>
          <Button size='xs' color='error' onClick={prevMonth}>
            &lt;&lt; 前の月
          </Button>
          <Button size='xs' color='error' onClick={nextMonth}>
            次の月 &gt;&gt;
          </Button>
        </div>
      </div>
    </div>
  );
};
