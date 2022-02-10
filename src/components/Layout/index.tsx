import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
// import { auth } from 'src/utils/firebase';
import { CautionLoginModal } from './CommonModal/cautionLoginModal';

export const Layout: FC = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <div className='min-h-screen pb-20'>
        <header className='w-full bg-rose-600 text-center'>
          <Link href='/'>
            <a className='text-white text-3xl py-2 font-bold'>exe-rec</a>
          </Link>
        </header>
        <main>{children}</main>
        <div className='text-center fixed bottom-0 z-50 left-0 w-full bg-white/75 backdrop-blur'>
          <Button.Group color='error' bordered>
            <Button onClick={() => router.push('/home')}>Home</Button>
            <Button onClick={() => router.push('/calendar')}>Calendar</Button>
            <Button onClick={() => router.push('/setting')}>Setting</Button>
            {/* <Button onClick={() => auth.signOut()}>X</Button> */}
          </Button.Group>
        </div>
      </div>
      {/* Global Modal */}
      <CautionLoginModal />
    </>
  );
};
