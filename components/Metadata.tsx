import Head from 'next/head';
import { useRouter } from 'next/router';

export type MetaType = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: string;
  date?: string;
};

interface Props {
  meta?: MetaType;
}

const Metadata: React.FC<Props> = ({ meta }) => {
  const router = useRouter();
  const defaultMeta: MetaType = {
    title: 'Roze',
    description: 'Developer, writer, and creator.',
    path: router.pathname,
    image: '/profile.jpg',
    type: 'website',
  };

  const finalMeta = { ...defaultMeta, ...meta };
  const { title, description, path, image, type, date } = finalMeta;
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="author" content="Roze" />
      <meta name="robots" content="index, follow" />
      {type === 'article' && date ? (
        <meta property="article:published_time" content={date} />
      ) : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://aroze.xyz${path}`} />
      <meta property="og:image" content={`https://aroze.xyz${image}`} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://aroze.xyz${image}`} />
      <link rel="canonical" href={`https://aroze.xyz${path}`} />
    </Head>
  );
};

export default Metadata;
