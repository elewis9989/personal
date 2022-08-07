import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
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

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context || !context.params) return;

  const post: string = await getPost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

const Post: NextPage<{ post: Post }> = ({ post }) => {
  console.log(post);

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
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </Layout>
  );
};

export default Post;
