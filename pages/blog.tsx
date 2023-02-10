import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { glory } from '../lib/fonts';
import { classNames } from '../lib/helpers';
import { NextPageWithLayout } from './page';

const Blog: NextPageWithLayout = () => {
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
    </>
  );
};

export default Blog;

Blog.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
