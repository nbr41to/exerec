import { Input, Switch, Text } from '@nextui-org/react';
import { useState, VFC } from 'react';
import { useUserSettings } from 'src/utils/hooks/useUserSettings';

export const SettingPage: VFC = () => {
  const { userSettings } = useUserSettings();

  const [isLoading, setIsLoading] = useState(false);

  const toggleIsConnectedOuraRing = () => {
    console.log('toggleIsConnectedOuraRing');
  };

  return (
    <div>
      <div className='text-center mt-3'>
        <Text h1 b size={18}>
          設定
        </Text>
      </div>
      <div className='flex justify-between'>
        <p>ユーザ名</p>
        <Input color='success' value={userSettings.name} disabled={isLoading} />
      </div>
      <div className='flex justify-between'>
        <p>Oura Ring の連携</p>
        <Switch
          shadow
          color='success'
          checked={true}
          disabled={isLoading}
          onChange={toggleIsConnectedOuraRing}
        />
      </div>
    </div>
  );
};
