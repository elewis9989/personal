import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col bg-yellow-pastel my-12 mx-6 pt-4 min-h-[90vh]'>
      <Head>
        <title>hi, i&apos;m roze 🌹</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className='flex-1 py-14'>{children}</main>
      <footer className='flex items-center justify-center border-t pt-2 pb-6'>
        <a href='#' target='_self' rel='noopener noreferrer'>
          roze 🌹
        </a>
      </footer>
    </div>
  );
}
