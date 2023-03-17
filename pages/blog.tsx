import { type GetStaticProps } from 'next';
import BlogCard from '../components/BlogCard';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import PageTitle from '../components/PageTitle';
import { getAllPostsMeta } from '../lib/blog';
import { PostMeta } from '../lib/helpers';
import { NextPageWithLayout } from './page';

interface IBlog {
  posts: PostMeta[];
}

const Blog: NextPageWithLayout<IBlog> = ({ posts }) => {
  return (
    <>
      <section className="flex items-center justify-center">
        <PageTitle title="Blog" />
      </section>
      <section className="flex items-center justify-center pt-14">
        <ul className="space-y-8">
          {posts.map((post, index) => (
            <li key={index} className="">
              <BlogCard meta={post} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPostsMeta();

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 120, // In seconds
  };
};

export default Blog;

Blog.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
