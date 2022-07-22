import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen flex flex-col bg-pink-pastel py-12 px-12'>
      <Head>
        <title>hi, i&apos;m roze 🌹</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div></div>
      <div className='flex flex-col bg-yellow-pastel pt-6 pb-6 min-h-full'>
        <Navbar />
        <main className='flex-1'>{children}</main>
        <footer className='flex items-center justify-center border-t pt-2'>
          <a href='#' target='_self' rel='noopener noreferrer'>
            roze 🌹
          </a>
        </footer>
      </div>
      <div></div>
    </div>
  );
}
