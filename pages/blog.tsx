import { GetStaticProps, NextPage } from 'next';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Link from 'next/link';

const { CONTENT_API_KEY, BLOG_URL } = process.env;

export type Post = {
  title: string;
  slug: string;
  html: string;
};

async function getPosts() {
  // curl -H "Accept-Version: v5.0" "https://demo.ghost.io/ghost/api/content/posts/?key=22444f78447824223cefc48062"

  const res: any = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,reading_time`
  ).then((res) => res.json());

  const posts = res.posts;

  return posts;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
};

const Blog: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Layout>
      <Title title='Blog ✏️' />
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href='/post/[slug]' as={`/post/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Blog;
