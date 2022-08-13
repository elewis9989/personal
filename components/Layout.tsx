import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col rounded-lg bg-yellow-pastel my-12 md:mx-12 xl:mx-32 pt-4 min-h-[90vh] z-1'>
      <Head>
        <title>hi, i&apos;m roze 🌹</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Navbar />
      <main className='flex-1 pb-14 pt-14 md:pt-28 lg:px-24 px-8'>
        <Profile />
        <div className='pt-14'>{children}</div>
      </main>
      <footer className='flex items-center justify-center md:mx-52 mx-14 border-t pt-2 pb-6'>
        <a href='#' target='_self' rel='noopener noreferrer'>
          © roze 🌹 {new Date().getFullYear()}
        </a>
      </footer>
    </div>
  );
}
