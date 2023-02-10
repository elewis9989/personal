import BlogCard from '../components/BlogCard';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { glory } from '../lib/fonts';
import { classNames, Post } from '../lib/helpers';
import { NextPageWithLayout } from './page';
const { CONTENT_API_KEY, BLOG_URL } = process.env;

interface IBlog {
  posts: Post[];
}

const Blog: NextPageWithLayout<IBlog> = ({ posts }) => {
  return (
    <>
      <section className="flex items-center justify-center">
        <h1
          className={classNames(
            `${glory.variable} font-sans`,
            'text-stone-500 text-4xl lg:text-5xl text-center'
          )}
        >
          blog ✍️
        </h1>
      </section>
      <section className="flex items-center justify-center pt-14">
        <ul>
          {posts.map((post, index) => (
            <li key={index} className="py-6">
              <BlogCard title={post.title} date={post.published_at} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export async function getStaticProps() {
  const url = `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,feature_image,reading_time,published_at,meta_title,meta_description&formats=html`;
  const res = await fetch(url);
  const jsonResult = await res.json();

  console.log(jsonResult);

  return {
    props: {
      posts: jsonResult.posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 120, // In seconds
  };
}

export default Blog;

Blog.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
