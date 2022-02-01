import { Button } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';

export const Layout: FC = ({ children }) => {
  const router = useRouter();
  return (
    <div className='min-h-screen'>
      <header className='w-full bg-rose-500 text-center'>
        <div className='text-white text-3xl py-2 font-bold'>exe-rec</div>
      </header>
      <main>{children}</main>
      <div className='text-center absolute bottom-2 left-0 w-full'>
        <Button.Group color='error' bordered>
          <Button onClick={() => router.push('/')}>🏠</Button>
          <Button onClick={() => router.push('/templates')}>📑</Button>
          <Button onClick={() => router.push('/calendar')}>📅</Button>
          <Button onClick={() => router.push('/setting')}>⚙️</Button>
        </Button.Group>
      </div>
    </div>
  );
};
