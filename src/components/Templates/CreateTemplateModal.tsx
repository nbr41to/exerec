import { Button, Modal, Text, Textarea } from '@nextui-org/react';
import { useMemo } from 'react';
import { ChangeEvent, useState, VFC } from 'react';

type CreateTemplateModalProps = {
  open: boolean;
  closeHandler: () => void;
};

export const CreateTemplateModal: VFC<CreateTemplateModalProps> = ({
  open,
  closeHandler,
}) => {
  const [inputText, setInputText] = useState('');
  const isValidate = useMemo(() => {
    if (!inputText) return true;
  }, [inputText]);

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
    <Modal closeButton blur open={open} onClose={close}>
      <Modal.Header>
        <Text b h3 size={18}>
          新しいTemplateを登録
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Textarea
          placeholder='投稿内容を入力'
          minRows={4}
          maxRows={10}
          onChange={(e): void => {
            setInputText(e.target.value);
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color='error' onClick={close}>
          Cancel
        </Button>
        <Button auto color='success' onClick={submit} disabled={isValidate}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
