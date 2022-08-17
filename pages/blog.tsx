import { GetStaticProps, NextPage } from 'next';
import Layout from '../components/Layout';
import Title from '../components/Title';
import { getPosts } from '../utils/helpers';
import BlogCard from '../components/BlogCard';

export type Post = {
  title: string;
  slug: string;
  custom_excerpt: string;
  feature_image: string;
  html: string;
  reading_time: number;
  published_at: Date;
};

interface IBlogProps {
  posts: Post[];
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
    revalidate: 120, // in secs, at most 1 request to ghost cms backend
  };
};

const Blog: NextPage<IBlogProps> = ({ posts }) => {
  return (
    <Layout>
      <Title title='Blog ✏️' />
      <ul className='flex flex-col items-center justify-center'>
        {posts.map((post) => (
          <li key={post.slug} className='lg:w-[44rem] md:w-[38rem]'>
            <BlogCard
              title={post.title}
              slug={post.slug}
              reading_time={post.reading_time}
              published_at={post.published_at}
            />
            {post.slug !== posts[posts.length - 1].slug && (
              <div className='relative flex py-5 items-center'>
                <div className='flex-grow border-t border-gray-300'></div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Blog;
