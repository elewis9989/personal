'use client';

import Image from 'next/image';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Metadata from '../components/Metadata';
import PageTitle from '../components/PageTitle';
import PageTransition from '../components/PageTransition';
import { classNames } from '../lib/helpers';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Metadata />
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
            'flex flex-col items-center text-2xl lg:text-4xl text-black max-w-2xl mx-auto space-y-6'
          )}
        >
          <p className="leading-relaxed">
            I&apos;m{' '}
            <span className="text-sky-800 font-semibold bg-yellow-200 italic px-3">
              Roze
            </span>{' '}
            🌹 (any pronouns) — a {}
            <span className="border-b-4 border-b-green-300">coder</span>,{' '}
            <span className="border-b-4 border-b-blue-300">writer</span>, &{' '}
            <span className="border-b-4 border-b-red-300">content creator</span>{' '}
            residing in Brooklyn, NY 📍
          </p>

          <p className="">
            Welcome to my little hub where I share some of my musings, projects,
            and other fun things.
          </p>
        </section>
      </PageTransition>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
