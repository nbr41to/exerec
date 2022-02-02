import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { getTemplates } from '../firebase/templates';
import { templatesState } from '../recoil/atoms';
import { useAuth } from './useAuth';

export const useTemplates = () => {
  const user = useAuth();
  const [templates, setTemplates] = useRecoilState(templatesState);
  const [i, set] = useState(0);
  const refetch = () => {
    set(i + 1);
  };

  useEffect(() => {
    if (!user.id) return; // ログインしていない場合早期return
    void (async () => {
      const response = await getTemplates();
      setTemplates(response);
    })();
  }, [user, setTemplates, i]);

  return { templates, refetch };
};
