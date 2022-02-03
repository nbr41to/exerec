import { Text } from '@nextui-org/react';
import { VFC } from 'react';
import { ActivitiesCalendar } from './ActivitiesCalendar';
import { OuraActivities } from './OuraActivities';

export const CalendarPage: VFC = () => {
  return (
    <div>
      <div className='text-center mt-3'>
        <Text h1 b size={18}>
          最近のアクティビティ
        </Text>
      </div>
      <ActivitiesCalendar />
      <OuraActivities />
    </div>
  );
};
