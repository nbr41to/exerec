import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { auth } from '../firebase';
import { loginUserState } from '../recoil/atoms';

export const useAuth = () => {
  const router = useRouter();
  const [loginUser, setLoginUser] = useRecoilState(loginUserState);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/login');
      }
      if (user) {
        setLoginUser({ id: user.uid, isLoading: false });
      }
    });
  }, [setLoginUser]);

  return loginUser;
};
