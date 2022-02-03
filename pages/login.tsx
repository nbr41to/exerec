import { Button, Card, Col, Row, Text } from '@nextui-org/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { googleLogin } from 'src/utils/firebase/auth';
import calendar_sample from 'src/assets/calendar_sample.png';
import done_sample from 'src/assets/done_sample.png';

const Setting: NextPage = () => {
  const router = useRouter();

  const login = async () => {
    try {
      await googleLogin();
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className='text-center font-bold py-3'>
        運動習慣をサポートするアプリ
      </h2>
      <ul className='pl-10 list-disc'>
        <li>日々の運動を記録</li>
        <li>運動内容をテンプレート化</li>
        <li>運動内容のSNSへの投稿を円滑に</li>
        <li>Oura Ring と連携</li>
      </ul>

      <div className='p-6'>
        <Card cover css={{ w: '100%', p: 0 }}>
          <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
            <Col>
              <Text
                h3
                b
                size={24}
                css={{
                  textGradient: '45deg, $yellow500 -20%, $red500 100%',
                  position: 'relative',
                  top: 16,
                }}
              >
                Support your exercise habits
              </Text>
            </Col>
          </Card.Header>
          <Card.Body>
            <Card.Image
              src='/bruce-mars-pFyKRmDiWEA-unsplash.jpg'
              height={400}
              width='100%'
              alt='Relaxing app background'
            />
          </Card.Body>
          <Card.Footer
            blur
            css={{
              position: 'absolute',
              bgBlur: '#0f1114',
              borderTop: '$borderWeights$light solid $gray700',
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Row>
                  <Col>
                    <Text color='#d1d1d1' size={12}>
                      Start
                    </Text>
                    <Text color='#d1d1d1' size={12}>
                      App
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row justify='flex-end'>
                  <Button
                    flat
                    auto
                    rounded
                    css={{ color: '#94f9f0', bg: '#94f9f026' }}
                    onClick={login}
                  >
                    <Text css={{ color: 'inherit' }} size={12} weight='bold'>
                      Let&#39;s start with Google account
                    </Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </div>

      <div className='flex justify-center items-center my-10'>
        <Button onClick={login}>Googleアカウントですぐに始める</Button>
      </div>
      <p className='text-center font-bold text-white bg-rose-600 py-2'>
        運動を記録する
      </p>
      <div className='p-8'>
        <Image src={calendar_sample} alt='calendar_sample' />
      </div>
      <p className='text-center font-bold text-white bg-rose-600 py-2'>
        毎日の投稿内容をテンプレートに
      </p>
      <div className='p-8'>
        <Image src={done_sample} alt='calendar_sample' />
      </div>
    </div>
  );
};

export default Setting;
