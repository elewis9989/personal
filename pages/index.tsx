'use client';

import Image from 'next/image';
import Heading from '../components/Heading';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { glory } from '../lib/fonts';
import { classNames } from '../lib/helpers';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Heading
        title="roze"
        description="Roze's little hub of musings, projects, and other fun things"
        type="website"
      />
      <section className="flex items-center justify-center">
        <h1
          className={classNames(
            `${glory.variable} font-sans`,
            'text-stone-500 text-4xl lg:text-5xl text-center'
          )}
        >
          hello, friend 👋🏼
        </h1>
      </section>
      <section className="flex items-center justify-center py-8">
        <Image
          src="./profile.svg"
          width={250}
          height={250}
          alt="Portrait drawing of Roze"
          priority
        />
      </section>
      <section
        className={classNames(
          `${glory.variable} font-sans`,
          'flex flex-col items-center justify-center text-xl lg:text-2xl text-stone-600 max-w-2xl mx-auto'
        )}
      >
        <p className="py-3 lg:py-8">
          i&apos;m roze 🌹 (any pronouns) — a coder, writer, & content creator
          residing in brooklyn, ny 📍
        </p>
        <p className="py-3 lg:py-8">
          welcome to my little hub where i share some of my musings, projects,
          and other fun things.
        </p>
      </section>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
