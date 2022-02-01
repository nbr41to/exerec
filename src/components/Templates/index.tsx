import { Button, Card, Text } from '@nextui-org/react';
import { useState, VFC } from 'react';
import { CreateTemplateModal } from './CreateTemplateModal';

export const TemplatesPage: VFC = () => {
  const [visibleCreateModal, setVisibleCreateModal] = useState(false);

  return (
    <>
      <CreateTemplateModal
        open={visibleCreateModal}
        closeHandler={() => setVisibleCreateModal(false)}
      />
      <div>
        <div className='text-center mt-3'>
          <Text h1 b size={18}>
            投稿のテンプレート
          </Text>
        </div>
        {/* 新規作成ボタン */}
        <div className='flex justify-center items-center py-3'>
          <Button color='success' onClick={() => setVisibleCreateModal(true)}>
            + new template
          </Button>
        </div>
        {/* Template一覧 */}
        <div className='text-center mt-3'>
          <Text h2 b>
            My Templates
          </Text>
        </div>
        <div className='p-4 space-y-3'>
          <Card bordered shadow={false}>
            <p className='whitespace-pre'>{`腕立て30回\n腕立て30回\n腕立て30回\n`}</p>
            <div className='flex justify-end items-center'>
              <Button
                bordered
                rounded
                color='success'
                size='xs'
                onClick={() => {}}
              >
                edit
              </Button>
            </div>
          </Card>
          <Card bordered shadow={false} hoverable>
            <p className='whitespace-pre'>{`腕立て30回\n腕立て30回\n腕立て30回\n`}</p>
          </Card>
          <Card bordered shadow={false} hoverable>
            <p className='whitespace-pre'>{`腕立て30回\n腕立て30回\n腕立て30回\n`}</p>
          </Card>
        </div>
        <div className='text-center mt-3'>
          <Text h2 b>
            My Histories
          </Text>
        </div>
        <div className='p-4 space-y-3'>
          <Card bordered shadow={false} hoverable>
            <p className='whitespace-pre'>{`腕立て30回\n腕立て30回\n腕立て30回\n`}</p>
          </Card>
          <Card bordered shadow={false} hoverable>
            <p className='whitespace-pre'>{`腕立て30回\n腕立て30回\n腕立て30回\n`}</p>
          </Card>
          <Card bordered shadow={false} hoverable>
            <p className='whitespace-pre'>{`腕立て30回\n腕立て30回\n腕立て30回\n`}</p>
          </Card>
        </div>
      </div>
    </>
  );
};
