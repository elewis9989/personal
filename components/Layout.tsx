import React from 'react';
import Navbar from './Navbar';
import Newsletter from './Newletter';
import Profile from './Profile';
import { useRouter } from 'next/router';
import { navlinks } from '../utils/data';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isHome = router.pathname === navlinks[0].path;

  return (
    <div className='flex flex-col rounded-lg bg-yellow-pastel my-12 md:mx-12 xl:mx-32 pt-4 min-h-[90vh] z-1'>
      <Navbar />
      <main className='flex-1 pb-14 pt-14 md:pt-28 lg:px-24 px-8'>
        <Profile />
        <div className={!isHome ? 'pt-14 pb-20' : ''}>{children}</div>
        <Newsletter />
      </main>
      <footer className='flex items-center justify-center md:mx-52 mx-14 border-t pt-2 pb-6'>
        <a href='#' target='_self' rel='noopener noreferrer'>
          © roze 🌹 {new Date().getFullYear()}
        </a>
      </footer>
    </div>
  );
}
