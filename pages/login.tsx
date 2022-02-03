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
      <h2 className='text-center font-bold py-3'>
        運動習慣をサポートするアプリ
      </h2>
      <ul className='pl-10 list-disc'>
        <li>日々の運動を記録</li>
        <li>運動内容をテンプレート化</li>
        <li>運動内容のSNSへの投稿を円滑に</li>
        <li>Oura Ring と連携</li>
      </ul>
      <div className='flex justify-center items-center mt-10'>
        <Button onClick={login}>Googleアカウントでログイン</Button>
      </div>
    </div>
  );
};

export default Setting;
