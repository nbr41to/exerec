import { Button } from '@nextui-org/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { googleLogin } from 'src/utils/firebase/auth';

const Setting: NextPage = () => {
  const router = useRouter();

  const login = async () => {
    try {
      await googleLogin();
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className='text-center'>運動習慣をサポート</h2>
      <div>
        <Button onClick={login}>Googleアカウントでログイン</Button>
      </div>
    </div>
  );
};

export default Setting;
