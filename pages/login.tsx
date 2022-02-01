import { Button } from '@nextui-org/react';
import type { NextPage } from 'next';

const Setting: NextPage = () => {
  return (
    <div>
      <h2 className='text-center'>運動習慣をサポート</h2>
      <div>
        <Button>Googleアカウントでログイン</Button>
      </div>
    </div>
  );
};

export default Setting;
