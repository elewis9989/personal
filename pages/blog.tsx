import { allPosts, Post } from 'contentlayer/generated';
import { type GetStaticProps } from 'next';
import BlogCard from '../components/BlogCard';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Metadata from '../components/Metadata';
import PageTitle from '../components/PageTitle';
import PageTransition from '../components/PageTransition';
import { NextPageWithLayout } from './page';

interface IBlog {
  posts: Post[];
}

const Blog: NextPageWithLayout<IBlog> = ({ posts }) => {
  const meta = {
    title: 'Blog | Roze',
    description: 'Blog Posts',
  };

  return (
    <>
      <Metadata meta={meta} />
      <PageTransition>
        <section className="flex items-center justify-center">
          <PageTitle title="Blog" />
        </section>
        <section className="flex items-center justify-center pt-14">
          <ul className="space-y-8">
            {posts.map((post, index) => (
              <li
                key={index}
                className="flex flex-row items-center justify-center"
              >
                <BlogCard post={post} />
              </li>
            ))}
          </ul>
        </section>
      </PageTransition>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return {
    props: {
      posts,
    },
  };
};

export default Blog;

Blog.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
