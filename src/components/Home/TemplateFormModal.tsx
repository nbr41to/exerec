import { Button, Modal, Text, Textarea } from '@nextui-org/react';
import { useEffect, useMemo } from 'react';
import { VFC } from 'react';
import { useRecoilState } from 'recoil';
import { createTemplate, updateTemplate } from 'src/utils/firebase/templates';
import { useTemplates } from 'src/utils/hooks/useTemplates';
import { templateFormContentState } from 'src/utils/recoil/atoms';

type TemplateFormModalProps = {
  open: boolean;
  closeHandler: () => void;
};

export const TemplateFormModal: VFC<TemplateFormModalProps> = ({
  open,
  closeHandler,
}) => {
  const { refetch } = useTemplates();
  const [formState, setFormState] = useRecoilState(templateFormContentState);
  const isValidate = useMemo(() => {
    if (!formState.content) return true;
  }, [formState]);

  /* 送信 */
  const submit = async () => {
    if (isValidate) return;
    try {
      console.log('submit', formState);
      if (formState.id) {
        /* 更新 */
        await updateTemplate(formState);
        refetch();
      }
      if (!formState.id) {
        /* 作成 */
        await createTemplate(formState.content);
        refetch();
      }
      closeHandler();
    } catch (error) {
      console.error(error);
    }
  };

  /* 入力内容を削除して閉じる */
  const close = () => {
    setFormState((prev) => ({ ...prev, content: '' }));
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
          value={formState.content}
          placeholder='投稿内容を入力'
          minRows={4}
          maxRows={10}
          onChange={(e): void => {
            setFormState((prev) => ({ ...prev, content: e.target.value }));
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
