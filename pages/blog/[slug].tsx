import { type GetStaticPaths, type GetStaticProps } from 'next';
import { type ParsedUrlQuery } from 'querystring';
import readingTime from 'reading-time';
import { allPosts, Post } from '../../.contentlayer/generated';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import MDX from '../../components/mdx/MDX';
import Metadata, { MetaType } from '../../components/Metadata';
import PageTitle from '../../components/PageTitle';
import PageTransition from '../../components/PageTransition';
import { type NextPageWithLayout } from '../page';

interface Props {
  post: Post;
}

const Slug: NextPageWithLayout<Props> = ({ post }) => {
  const meta: MetaType = {
    title: post.title + ' | Roze',
    description: post.excerpt,
    path: post.url,
    image: post.coverImage,
    type: 'article',
    date: post.date,
  };
  return (
    <>
      <Metadata meta={meta} />
      <PageTransition>
        <div className="mx-auto mb-16 max-w-4xl px-6">
          <header className="mb-12">
            <PageTitle title={post.title} />
            <div className="flex items-center gap-2 text-xl font-normal text-zinc-500">
              <div className="flex grow flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
                <div>
                  <span>Roze</span> /{' '}
                  <time>
                    {new Date(post.date).toLocaleDateString('en-us', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    className="hidden sm:inline stroke-purple-300"
                  >
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                  <span>{readingTime(post.body.raw).text}</span>
                </div>
              </div>
            </div>
          </header>
          <MDX code={post.body.code} />
        </div>
      </PageTransition>
    </>
  );
};

export default Slug;

Slug.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

interface IContextParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IContextParams;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPosts.map((post) => post.url);

  return {
    paths,
    fallback: false,
  };
};
