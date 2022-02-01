import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { getTemplates } from '../firebase/templates';
import { templatesState } from '../recoil/atoms';

export const useTemplates = () => {
  const [templates, setTemplates] = useRecoilState(templatesState);
  const [i, set] = useState(0);
  const refetch = () => {
    set(i + 1);
  };

  useEffect(() => {
    void (async () => {
      const response = await getTemplates();
      console.log(response);
      setTemplates(response);
    })();
  }, [setTemplates, i]);

  return { templates, refetch };
};
