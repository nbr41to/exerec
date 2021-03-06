import { Button, Collapse, Link, Text } from '@nextui-org/react';
import { useState, VFC } from 'react';
import { TemplateFormModal } from './TemplateFormModal';
import { NewPostModal } from './NewPostModal';
import { useTemplates } from 'src/utils/hooks/useTemplates';
import { useSetRecoilState } from 'recoil';
import {
  newPostContentState,
  templateFormContentState,
} from 'src/utils/recoil/atoms';
import { useAchievementsHistories } from 'src/utils/hooks/useAchievementsHistories';

export const HomePage: VFC = () => {
  const [visibleNewPostModal, setVisibleNewPostModal] = useState(false);
  const [visibleCreateTemplateModal, setVisibleCreateTemplateModal] =
    useState(false);
  const { templates } = useTemplates();
  const { achievementsHistories } = useAchievementsHistories();
  const setNewPostState = useSetRecoilState(newPostContentState);
  const setTemplateFormState = useSetRecoilState(templateFormContentState);

  return (
    <>
      <NewPostModal
        open={visibleNewPostModal}
        closeHandler={() => setVisibleNewPostModal(false)}
      />
      <TemplateFormModal
        open={visibleCreateTemplateModal}
        closeHandler={() => setVisibleCreateTemplateModal(false)}
      />
      <div className='relative'>
        <div className='absolute top-0 right-3 inline-block text-sm'>
          <Link
            href='https://github.com/nbr41to/exerec/blob/main/README.md'
            target='_blank'
            rel='noopener noreferrer'
          >
            使い方
          </Link>
        </div>
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

        <div className='h-px mx-8 my-10 bg-black/30' />

        {/* Template一覧 */}
        <div className='text-center'>
          <Text h2 b>
            My Templates
          </Text>
        </div>
        <div className='p-4 space-y-3'>
          {templates.map((template) => (
            <Collapse
              bordered
              key={template.id}
              title={<p className='whitespace-pre'>{template.content}</p>}
            >
              <div className='flex justify-center items-center gap-2'>
                <Button
                  color='gradient'
                  size='sm'
                  onClick={() => {
                    setNewPostState((prev) => ({
                      ...prev,
                      content: template.content,
                    }));
                    setVisibleNewPostModal(true);
                  }}
                >
                  done
                </Button>
                <Button
                  bordered
                  color='primary'
                  size='sm'
                  onClick={() => {
                    setTemplateFormState((prev) => ({
                      ...prev,
                      id: template.id,
                      content: template.content,
                    }));
                    setVisibleCreateTemplateModal(true);
                  }}
                >
                  edit
                </Button>
              </div>
            </Collapse>
          ))}
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

        <div className='h-px mx-8 my-10 bg-black/30' />

        {/* 達成履歴10件 */}
        <div className='text-center'>
          <Text h2 b>
            My Histories（最新10件）
          </Text>
        </div>
        <div className='p-4 space-y-3'>
          <div className='p-4 space-y-3'>
            {achievementsHistories.map((achievement) => (
              <Collapse
                bordered
                key={achievement.id}
                title={<p className='whitespace-pre'>{achievement.content}</p>}
                subtitle={achievement.date}
              >
                <div className='flex justify-center items-center gap-2'>
                  <Button
                    color='gradient'
                    size='sm'
                    onClick={() => {
                      setNewPostState((prev) => ({
                        ...prev,
                        content: achievement.content,
                      }));
                      setVisibleNewPostModal(true);
                    }}
                  >
                    done
                  </Button>
                  <Button
                    bordered
                    color='primary'
                    size='sm'
                    auto
                    onClick={() => {
                      setTemplateFormState((prev) => ({
                        ...prev,
                        id: achievement.id,
                        content: achievement.content,
                      }));
                      setVisibleCreateTemplateModal(true);
                    }}
                  >
                    add template
                  </Button>
                </div>
              </Collapse>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
