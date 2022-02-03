import { Button, Modal, Radio, Text, Textarea } from '@nextui-org/react';
import { useMemo } from 'react';
import { useState, VFC } from 'react';
import { useRecoilState } from 'recoil';
import { createAchievement } from 'src/utils/firebase/post';
import { useAchievementsHistories } from 'src/utils/hooks/useAchievementsHistories';
import { newPostContentState } from 'src/utils/recoil/atoms';

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

  const [visibleShareButtons, setVisibleShareButtons] = useState(false);
  const isValidate = useMemo(() => {
    if (!formState.content) return true;
  }, [formState.content]);
  const tweetContent = useMemo(() => {
    if (!formState?.content) return '';
    return `今日の運動記録%0a%0a${formState.content.replaceAll(
      '\n',
      '%0a',
    )}%0a%0a`;
  }, [formState.content]);

  /* 送信 */
  const submit = async () => {
    if (isValidate) return;
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

  const copyContent = () => {
    navigator.clipboard.writeText(formState.content);
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
          disabled={visibleShareButtons}
          placeholder={`腕立て30回\n腹筋30回\n背筋20回\n3セット`}
          minRows={4}
          maxRows={10}
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
        {visibleShareButtons ? (
          <div className='relative'>
            <Button.Group color='success' bordered>
              <Button
                onClick={() => {
                  copyContent();
                  window.location.href = 'https://line.me/R/nv/chat';
                }}
              >
                LINE
              </Button>
              <Button>
                <a
                  className='block w-full h-full'
                  href={`https://twitter.com/intent/tweet?text=${tweetContent}&url=https://exerec.vercel.app/`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Twitter
                </a>
              </Button>
              <Button onClick={copyContent}>Copy</Button>
            </Button.Group>
            <p className='text-center my-2 text-sm'>
              保存しました。以下からシェアできます。
            </p>
          </div>
        ) : (
          <Button auto disabled={isValidate} color='success' onClick={submit}>
            保存
          </Button>
        )}
        <Button auto flat color='error' onClick={close}>
          {visibleShareButtons ? 'Close' : 'Cancel'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
