import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import BlogPost from '../../components/BlogPost';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import { Post } from '../blog';

const { CONTENT_API_KEY, BLOG_URL } = process.env;

async function getPost(slug: string) {
  const res: any = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html`
  ).then((res) => res.json());

  const posts = res.posts;

  return posts[0];
}

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
