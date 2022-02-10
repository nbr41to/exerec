import { useRecoilState } from 'recoil';
import { commonModalState } from '../recoil/atoms';

export const useCommonModal = () => {
  const [commonModal, setCommonModal] = useRecoilState(commonModalState);

  return { commonModal, setCommonModal };
};
