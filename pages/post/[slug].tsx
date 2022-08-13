import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import BlogPost from '../../components/BlogPost';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import { getPost } from '../../utils/helpers';
import { Post } from '../blog';

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
    return (
      <Layout>
        <Title title='Loading...' />
      </Layout>
    );
  }
  return (
    <Layout>
      <Title title={post.title} />
      <BlogPost post={post} />
    </Layout>
  );
};

export default Post;
