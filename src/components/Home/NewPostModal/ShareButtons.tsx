import { Button } from '@nextui-org/react';
import { useMemo, VFC } from 'react';

type ShareButtonsProps = {
  shareContent: string;
};

export const ShareButtons: VFC<ShareButtonsProps> = ({ shareContent }) => {
  const tweetContent = useMemo(() => {
    if (!shareContent) return '';
    return `今日の運動記録%0a%0a${shareContent.replaceAll('\n', '%0a')}%0a%0a`;
  }, [shareContent]);
  const copyContent = () => {
    navigator.clipboard.writeText(shareContent);
  };
  return (
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
  );
};
