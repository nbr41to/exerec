import { Button, Modal, Radio, Text, Textarea } from '@nextui-org/react';
import { useMemo } from 'react';
import { useState, VFC } from 'react';
import { useRecoilState } from 'recoil';
import { createAchievement } from 'src/utils/firebase/post';
import { useAchievementsHistories } from 'src/utils/hooks/useAchievementsHistories';
import { useAuth } from 'src/utils/hooks/useAuth';
import { useCommonModal } from 'src/utils/hooks/useCommonModal';
import { newPostContentState } from 'src/utils/recoil/atoms';
import { ShareButtons } from './ShareButtons';

type NewPostModalProps = {
  open: boolean;
  closeHandler: () => void;
};

export const NewPostModal: VFC<NewPostModalProps> = ({
  open,
  closeHandler,
}) => {
  const { refetch } = useAchievementsHistories();
  const [formState, setFormState] = useRecoilState(newPostContentState);

  const auth = useAuth();
  const { commonModal, setCommonModal } = useCommonModal();

  const [visibleShareButtons, setVisibleShareButtons] = useState(false);
  const isValidate = useMemo(() => {
    if (!formState.content) return true;
  }, [formState.content]);

  /* 送信 */
  const submit = async () => {
    if (isValidate) return;
    if (!auth.id) {
      /* ログインしていない場合はログイン誘導のModalを開く */
      closeHandler();
      setCommonModal({ ...commonModal, cautionLogin: true });
      return;
    }
    try {
      // console.log('submit', formState.content);
      createAchievement(formState);
      setVisibleShareButtons(true);
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  /* 入力内容を削除して閉じる */
  const close = () => {
    setFormState((prev) => ({ ...prev, content: '' }));
    setVisibleShareButtons(false);
    closeHandler();
  };

  return (
    <Modal closeButton blur className='m-5' open={open} onClose={close}>
      <Modal.Header>
        <Text b h3 size={18}>
          どんなExerciseをしましたか？
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Textarea
          value={formState.content}
          // disabled={visibleShareButtons} // TODO) Safariでは文字色と背景色が同色になる？
          placeholder={`腕立て30回\n腹筋30回\n背筋20回\n3セット`}
          minRows={4}
          maxRows={10}
          size='lg'
          onChange={(e): void => {
            setFormState((prev) => ({ ...prev, content: e.target.value }));
          }}
        />
        <div className='flex justify-center items-center'>
          <Radio.Group value='1' row disabled={visibleShareButtons}>
            <Radio value='1' size='sm'>
              満足
            </Radio>
            <Radio value='2' size='sm'>
              普通
            </Radio>
            <Radio value='3' size='sm'>
              不満
            </Radio>
          </Radio.Group>
        </div>
        {/* <div className='flex justify-center items-center'>
          <Radio.Group value='1' row disabled={visibleShareButtons}>
            <Radio value='1' size='sm'>
              達成
            </Radio>
            <Radio value='2' size='sm'>
              普通
            </Radio>
            <Radio value='3' size='sm'>
              未完
            </Radio>
          </Radio.Group>
        </div> */}
      </Modal.Body>
      <Modal.Footer justify='center'>
        {auth.id ? (
          <>
            {/* ログインしている場合 */}
            {visibleShareButtons && (
              <div className='relative'>
                <ShareButtons shareContent={formState.content} />
                <p className='text-center my-2 text-sm'>
                  保存しました。以下からシェアできます。
                </p>
              </div>
            )}
            {!visibleShareButtons && (
              <Button
                auto
                disabled={isValidate}
                color='success'
                onClick={submit}
              >
                保存
              </Button>
            )}
            <Button auto flat color='error' onClick={close}>
              {visibleShareButtons ? 'Close' : 'Cancel'}
            </Button>
          </>
        ) : (
          <>
            {/* ログインしていない場合 */}
            <div className='relative'>
              <ShareButtons shareContent={formState.content} />
            </div>
            <Button auto disabled={isValidate} color='success' onClick={submit}>
              保存
            </Button>
            <Button auto flat color='error' onClick={close}>
              Cancel
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
};
