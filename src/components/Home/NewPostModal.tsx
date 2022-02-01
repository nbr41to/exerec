import { Button, Modal, Text, Textarea } from '@nextui-org/react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useState, VFC } from 'react';

type NewPostModalProps = {
  value?: string;
  open: boolean;
  closeHandler: () => void;
};

export const NewPostModal: VFC<NewPostModalProps> = ({
  value = '',
  open,
  closeHandler,
}) => {
  const [inputText, setInputText] = useState(value);
  const isValidate = useMemo(() => {
    if (!inputText) return true;
  }, [inputText]);

  useEffect(() => {
    setInputText(value);
  }, [value]);

  /* 送信 */
  const submit = async () => {
    if (isValidate) return;
    try {
      console.log('submit', inputText);
      closeHandler();
    } catch (error) {
      console.error(error);
    }
  };

  /* 入力内容を削除して閉じる */
  const close = () => {
    setInputText('');
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
          value={inputText}
          placeholder={`腕立て30回\n腹筋30回\n背筋20回\n3セット`}
          minRows={4}
          maxRows={10}
          onChange={(e): void => {
            setInputText(e.target.value);
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button.Group color='success' disabled={isValidate}>
          <Button>LINE</Button>
          <Button>Twitter</Button>
          <Button>Copy</Button>
        </Button.Group>
        <Button auto flat color='error' onClick={close}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
