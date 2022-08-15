import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import BlogPost from '../../components/BlogPost';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import { getPost } from '../../utils/helpers';
import { Post } from '../blog';
import BlogViewCount from '../../components/BlogViewCount';
import { useEffect } from 'react';

interface IContextParams extends ParsedUrlQuery {
  slug: string;
}

interface ISlugPostProps {
  post: Post;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IContextParams;
  const post: string = await getPost(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
    revalidate: 120, // in secs, at most 1 request to ghost cms backend
  };
};

export const getStaticPaths: GetStaticPaths<IContextParams> = () => {
  return {
    paths: [],
    fallback: true,
  };
};

const Post: NextPage<ISlugPostProps> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingPage />;
  }

  return <BlogContent post={post} />;
};

function LoadingPage() {
  return (
    <Layout>
      <Title title='Loading...' />
    </Layout>
  );
}

function BlogContent({ post }: ISlugPostProps) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const registerView = () => {
    if (post.slug) {
      fetch(`/api/views/${post.slug}`, {
        method: 'POST',
      });
    }
  };

  useEffect(() => {
    registerView();
  });

  return (
    <Layout>
      <Title title={post.title} />
      <div className='flex items-center justify-center'>
        <div className='flex pb-6'>
          <p className='italic px-3 tag'>
            {new Date(post.published_at).toLocaleDateString('en-US', options)}
          </p>
          <BlogViewCount className='italic px-3 tag' slug={post.slug} />
          <p className='pl-7 text-gray-pastel font-light tag'>
            {post.reading_time} min
          </p>
        </div>
      </div>

      <BlogPost post={post} />
    </Layout>
  );
}

export default Post;
