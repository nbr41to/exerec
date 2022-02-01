import { Button, Modal, Text, Textarea } from '@nextui-org/react';
import { useEffect, useMemo } from 'react';
import { useState, VFC } from 'react';

type TemplateFormModalProps = {
  templateId?: string;
  value?: string;
  open: boolean;
  closeHandler: () => void;
};

export const TemplateFormModal: VFC<TemplateFormModalProps> = ({
  templateId,
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
      if (templateId) {
        /* 更新 */
      }
      if (!templateId) {
        /* 作成 */
      }
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
          新しいTemplateを登録
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Textarea
          value={inputText}
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
