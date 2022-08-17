import Head from 'next/head';
import { useRouter } from 'next/router';

interface iSeoProps {
  title: string;
  type: string;
  description: string;
  twitterUser?: string;
  image?: string;
  date?: string;
}

export default function Seo(props: iSeoProps) {
  const { title, type, description, twitterUser, image, date } = props;
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <link rel='icon' href='/images/favicon.png' />
      <meta property='og:site_name' content='roze' />
      <meta property='og:url' content={'https://aroze.xyz' + router.pathname} />
      <meta property='og:type' content={type} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta
        property='og:image'
        content={image ? image : 'https://aroze.xyz/images/profile.png'}
      />
      <meta content={description} name='description' />
      <meta
        name='twitter:site'
        content={twitterUser ? twitterUser : '@emotionldaffodl'}
      ></meta>
      <meta property='twitter:description' content={description} />
      <meta
        property='twitter:image'
        content={image ? image : 'https://aroze.xyz/images/profile.png'}
      />
      <meta property='twitter:title' content={title} />
      {date && <meta property='article:published_time' content={date} />}
    </Head>
  );
}
