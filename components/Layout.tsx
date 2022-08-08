import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col rounded-lg bg-yellow-pastel my-12 md:mx-12 xl:mx-32 pt-4 min-h-[90vh] z-1'>
      <Head>
        <title>hi, i&apos;m roze 🌹</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className='flex-1 py-14 lg:px-24 px-8'>
        <Profile />
        <div className='pt-14'>{children}</div>
      </main>
      <footer className='flex items-center justify-center md:mx-52 mx-14 border-t pt-2 pb-6'>
        <a href='#' target='_self' rel='noopener noreferrer'>
          roze 🌹
        </a>
      </footer>
    </div>
  );
}
