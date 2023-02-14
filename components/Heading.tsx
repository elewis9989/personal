import Head from 'next/head';
import { useRouter } from 'next/router';

interface IHeading {
  title: string;
  description: string;
  url?: string;
  type: string;
  image?: string;
  date?: string;
  twitterCard?: string;
  twitterLabel?: string;
  twitterData?: string;
}

const Heading: React.FC<IHeading> = ({
  title,
  description,
  url,
  type,
  image,
  date,
  twitterCard,
  twitterLabel,
  twitterData,
}) => {
  const router = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="canonical"
        href={'https://aroze.xyz' + (url ? url : router.pathname)}
        key="canonical"
      />
      <meta property="og:site_name" content="roze" />
      <meta
        property="og:url"
        content={'https://aroze.xyz' + (url ? url : router.pathname)}
      />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={image ? image : 'https://aroze.xyz/profile.png'}
      />
      <meta content={description} name="description" />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={image ? image : 'https://aroze.xyz/profile.png'}
      />
      <meta property="twitter:title" content={title} />
      {date && <meta property="article:published_time" content={date} />}
      {twitterCard && <meta property="twitter:card" content={twitterCard} />}
      {twitterLabel && (
        <meta property="twitter:label1" content={twitterLabel} />
      )}
      {twitterData && <meta property="twitter:data1" content={twitterData} />}
    </Head>
  );
};

export default Heading;
