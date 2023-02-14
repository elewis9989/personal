import { GetStaticPaths, GetStaticProps } from 'next/types';
import Prism from 'prismjs';
import { ParsedUrlQuery } from 'querystring';
import { useEffect } from 'react';
import Heading from '../../components/Heading';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import { glory } from '../../lib/fonts';
import { classNames, Post } from '../../lib/helpers';
import styles from '../../styles/Post.module.css';
import { NextPageWithLayout } from '../page';

require('prismjs/components/prism-javascript');
require('prismjs/components/prism-typescript');
require('prismjs/components/prism-css');
require('prismjs/components/prism-jsx');
require('prismjs/components/prism-tsx');

const { CONTENT_API_KEY, BLOG_URL } = process.env;

interface ISlug {
  post: Post;
}

const Slug: NextPageWithLayout<ISlug> = ({ post }) => {
  useEffect(() => {
    // syntax higlighting for blog posts
    Prism.highlightAll();
  }, []);
  return (
    <>
      <Heading
        title={post.title}
        description={post.custom_excerpt}
        type="article"
        image={post.feature_image}
        date={post.published_at.toString()}
        twitterCard="summary_large_image"
        twitterLabel="Written by"
        twitterData="roze"
        url={'/post/' + post.slug}
      />
      <article className="flex flex-col items-start justify-center w-full max-w-3xl mx-auto">
        <section className="flex items-center justify-center w-full">
          <h1
            className={classNames(
              `${glory.variable} font-sans`,
              'text-stone-500 text-4xl lg:text-5xl text-center leading-relaxed lg:leading-relaxed'
            )}
          >
            {post.title}
          </h1>
        </section>
        <section className={classNames(styles.postFullContent, 'pt-14')}>
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></div>
        </section>
      </article>
    </>
  );
};

interface IContextParams extends ParsedUrlQuery {
  slug: string;
}

// Retrieve Blog Post
export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IContextParams;
  const url = `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,feature_image,reading_time,published_at,meta_title,meta_description&formats=html`;

  const res = await fetch(url);
  const jsonResult = await res.json();

  let post;
  if (jsonResult.posts && jsonResult.posts.length > 0) {
    post = jsonResult.posts[0];
  }

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

// Since the page has Dynamic Routes and uses getStaticProps, it needs to define a list of paths to be statically generated
export const getStaticPaths: GetStaticPaths<IContextParams> = async () => {
  const url = `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,feature_image,reading_time,published_at,meta_title,meta_description&formats=html`;
  const res = await fetch(url);
  const jsonResult = await res.json();
  const posts = jsonResult.posts;

  const paths = posts.map((post: Post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: 'blocking' };
};

export default Slug;

Slug.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
