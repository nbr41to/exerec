import { Button } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useAuth } from 'src/utils/hooks/useAuth';

export const Layout: FC = ({ children }) => {
  const router = useRouter();
  useAuth();
  return (
    <div className='min-h-screen pb-12'>
      <header className='w-full bg-rose-600 text-center'>
        <div className='text-white text-3xl py-2 font-bold'>exe-rec</div>
      </header>
      <main>{children}</main>
      <div className='text-center fixed bottom-0 z-50 left-0 w-full bg-white/75 backdrop-blur'>
        <Button.Group color='error' bordered>
          <Button onClick={() => router.push('/')}>Home</Button>
          <Button onClick={() => router.push('/calendar')}>Calendar</Button>
          <Button onClick={() => router.push('/setting')}>Setting</Button>
        </Button.Group>
      </div>
    </div>
  );
};
