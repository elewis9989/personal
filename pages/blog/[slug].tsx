import { type GetStaticPaths, type GetStaticProps } from 'next';
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from 'next/head';
import { type ParsedUrlQuery } from 'querystring';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import MDXComponents from '../../components/mdx/MDXComponents';
import { getAllSlugs, getPostBySlug } from '../../lib/blog';
import { classNames, type PostMeta } from '../../lib/helpers';
import { type NextPageWithLayout } from '../page';

interface Props {
  meta: PostMeta;
  source: MDXRemoteSerializeResult;
}

const Slug: NextPageWithLayout<Props> = ({ meta, source }) => {
  return (
    <div className="mx-auto mb-16 max-w-2xl px-6">
      <Head>
        <title>{meta.title}</title>
      </Head>
      <header className="mb-12">
        <h1
          className={classNames(
            'text-black text-4xl lg:text-5xl font-bold tracking-tighter'
          )}
        >
          {meta.title}
        </h1>
        <div className="flex items-center gap-2 text-sm font-normal text-zinc-500">
          <div className="flex grow flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
            <div>
              <span>Roze</span> /{' '}
              <time>
                {new Date(meta.date).toLocaleDateString('en-us', {
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
                className="hidden sm:inline stroke-violet-500"
              >
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
              </svg>
              <span>{meta.readTime}</span>
            </div>
          </div>
        </div>
      </header>
      <article className={classNames('prose max-w-none')}>
        <MDXRemote {...source} components={MDXComponents as any} />
      </article>
    </div>
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
  const { meta, source } = await getPostBySlug(slug);

  if (!source) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      meta,
      source,
    },
    revalidate: 120,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: 'blocking',
  };
};
