import { Button, Card, Text } from '@nextui-org/react';
import { useState, VFC } from 'react';
import { TemplateFormModal } from './TemplateFormModal';
import { NewPostModal } from './NewPostModal';

export const HomePage: VFC = () => {
  const [visibleNewPostModal, setVisibleNewPostModal] = useState(false);
  const [visibleCreateTemplateModal, setVisibleCreateTemplateModal] =
    useState(false);
  const [postContent, setPostContent] = useState('');

  return (
    <>
      <NewPostModal
        value={postContent}
        open={visibleNewPostModal}
        closeHandler={() => {
          setPostContent('');
          setVisibleNewPostModal(false);
        }}
      />
      <TemplateFormModal
        open={visibleCreateTemplateModal}
        closeHandler={() => setVisibleCreateTemplateModal(false)}
      />
      <div>
        <div className='text-center mt-3'>
          <Text h1 b size={18}>
            今日の運動を記録
          </Text>
        </div>
        {/* 新規投稿ボタン */}
        <div className='flex justify-center items-center py-5'>
          <Button
            color='gradient'
            size='lg'
            onClick={() => setVisibleNewPostModal(true)}
          >
            done
          </Button>
        </div>

        <div className='h-px mx-4 bg-black/30' />

        {/* Template一覧 */}
        <div className='text-center mt-3'>
          <Text h2 b>
            My Templates
          </Text>
        </div>
        <div className='p-4 space-y-3'>
          <Card bordered shadow={false}>
            <div className='flex justify-between'>
              <div>
                <p className='whitespace-pre'>{`腕立て30回\n腕立て30回\n腕立て30回\n`}</p>
              </div>
              <div className='flex justify-center items-center flex-col gap-2'>
                <Button
                  rounded
                  color='gradient'
                  size='xs'
                  onClick={() => {
                    setPostContent(`腕立て30回\n腕立て30回\n腕立て30回\n`);
                    setVisibleNewPostModal(true);
                  }}
                >
                  done
                </Button>
                <Button
                  bordered
                  rounded
                  color='gradient'
                  size='xs'
                  onClick={() => {
                    setPostContent(`腕立て30回\n腕立て30回\n腕立て30回\n`);
                    setVisibleNewPostModal(true);
                  }}
                >
                  edit
                </Button>
              </div>
            </div>
          </Card>
          <Card bordered shadow={false} hoverable>
            <p className='whitespace-pre'>{`腕立て30回\n腕立て30回\n腕立て30回\n`}</p>
          </Card>
          <Card bordered shadow={false} hoverable>
            <p className='whitespace-pre'>{`腕立て30回\n腕立て30回\n腕立て30回\n`}</p>
          </Card>
        </div>
        {/* Templateの新規作成ボタン */}
        <div className='flex justify-center items-center py-3'>
          <Button
            color='success'
            onClick={() => setVisibleCreateTemplateModal(true)}
          >
            + new template
          </Button>
        </div>

        <div className='h-px mx-4 bg-black/30' />

        <div className='text-center mt-3'>
          <Text h2 b>
            My Histories
          </Text>
        </div>
        <div className='p-4 space-y-3'>
          <Card bordered shadow={false}>
            <div className='flex justify-between'>
              <div>
                <p className='whitespace-pre'>{`腕立て30回\n腕立て30回\n腕立て30回\n`}</p>
              </div>
              <div className='flex justify-center items-center flex-col gap-2'>
                <Button color='gradient' size='xs' onClick={() => {}}>
                  add
                </Button>
              </div>
            </div>
          </Card>
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
