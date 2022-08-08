import { GetStaticProps, NextPage } from 'next';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Link from 'next/link';
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
  };
};

const Blog: NextPage<IBlogProps> = ({ posts }) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <Layout>
      <Title title='Blog ✏️' />
      <ul className='xl:px-44'>
        {posts.map((post) => (
          <li key={post.slug}>
            <BlogCard
              title={post.title}
              slug={post.slug}
              custom_excerpt={post.custom_excerpt}
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
