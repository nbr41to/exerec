import { Button, Modal } from '@nextui-org/react';
import { memo, VFC } from 'react';
import { googleLogin } from 'src/utils/firebase/auth';
import { useCommonModal } from 'src/utils/hooks/useCommonModal';

const DefaultCautionLoginModal: VFC = () => {
  const { commonModal, setCommonModal } = useCommonModal();

  const closeModal = () => {
    setCommonModal({ ...commonModal, cautionLogin: false });
  };
  const login = async () => {
    await googleLogin();
    closeModal();
  };

  return (
    <Modal
      closeButton
      aria-labelledby='modal-title'
      open={commonModal.cautionLogin}
      onClose={closeModal}
    >
      <Modal.Header>
        <div className='text-xl font-bold'>Let&#39;s start exercises!!</div>
      </Modal.Header>
      <Modal.Body>
        <div className='text-lg text-center whitespace-pre-wrap'>
          {'こちらの機能はログインすることで\nご利用いただけます。'}
        </div>
        <div className='text-sm mt-2 px-6 py-4 bg-slate-100 rounded-md'>
          ※
          現在表示されているデータは全てサンプルです。ログインすることで自分の登録したデータが表示されるようになります。
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button auto onClick={login}>
          Google アカウントでログイン
        </Button>
        <Button auto flat color='error' onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export const CautionLoginModal = memo(DefaultCautionLoginModal);
