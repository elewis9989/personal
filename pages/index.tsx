'use client';

import Image from 'next/image';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import PageTitle from '../components/PageTitle';
import PageTransition from '../components/PageTransition';
import { classNames } from '../lib/helpers';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <PageTransition>
      <section className="flex items-center justify-center">
        <PageTitle title="Hello, Friend 👋🏼" />
      </section>
      <section className="flex items-center justify-center py-8">
        <Image
          src="./profile.svg"
          width={250}
          height={250}
          alt="Portrait drawing of Roze"
          style={{
            width: '50%',
            height: 'auto',
          }}
          priority
        />
      </section>
      <section
        className={classNames(
          'flex flex-col items-center justify-center text-xl lg:text-2xl text-black max-w-2xl mx-auto space-y-6'
        )}
      >
        <p className="">
          I&apos;m <span className="text-sky-800 font-semibold">roze</span> 🌹
          (any pronouns) — a coder, writer, & content creator residing in
          Brooklyn, NY 📍
        </p>
        <p className="">
          Welcome to my little hub where I share some of my musings, projects,
          and other fun things.
        </p>
      </section>
    </PageTransition>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
