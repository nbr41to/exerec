import { Text } from '@nextui-org/react';
import { VFC } from 'react';

export const SettingPage: VFC = () => {
  return (
    <div>
      <div className='text-center mt-3'>
        <Text h1 b size={18}>
          設定
        </Text>
      </div>
      <p>Oura Ring の連携</p>
    </div>
  );
};
