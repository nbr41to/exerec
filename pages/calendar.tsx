import type { NextPage } from 'next';
import { CalendarPage } from 'src/components/Calendar';

const Calendar: NextPage = () => {
  return (
    <div>
      <h2>Calendar</h2>
      <p>GitHubの草</p>
      <CalendarPage />
    </div>
  );
};

export default Calendar;
