import { Button, Input, Link, Text } from '@nextui-org/react';
import { useEffect, useMemo, useState, VFC } from 'react';
import { updateUserSettings } from 'src/utils/firebase/user';
import { useUserSettings } from 'src/utils/hooks/useUserSettings';

export const SettingPage: VFC = () => {
  const { userSettings, refetch } = useUserSettings();
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState(userSettings);

  useEffect(() => {
    setFormState(userSettings);
  }, [userSettings]);

  const isChanged = useMemo(() => {
    return (
      formState.name !== userSettings.name ||
      formState.ouraPersonalAccessToken !== userSettings.ouraPersonalAccessToken
    );
  }, [formState, userSettings]);

  const submit = async () => {
    if (!formState.name) return;
    try {
      setIsLoading(true);
      await updateUserSettings(formState);
      refetch();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='py-4 space-y-4 text-center'>
      <Text h1 b size={18}>
        設定
      </Text>
      <p>ユーザ名</p>
      <Input
        color='success'
        clearable
        value={formState.name}
        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        disabled={isLoading}
      />
      <p>OURA PERSONAL ACCESS TOKEN</p>
      <Input.Password
        value={formState.ouraPersonalAccessToken || ''}
        onChange={(e) =>
          setFormState({
            ...formState,
            ouraPersonalAccessToken: e.target.value,
          })
        }
      />
      <p>
        <Link href='https://cloud.ouraring.com/personal-access-tokens'>
          OURA RING 設定方法
        </Link>
      </p>
      <div className='flex justify-center items-center'>
        <Button disabled={isLoading || !isChanged} onClick={submit}>
          保存
        </Button>
      </div>
    </div>
  );
};
