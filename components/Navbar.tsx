import Link from 'next/link';
import { navlinks } from '../utils/data';
import { FaGithub } from 'react-icons/fa';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <>
      <nav className='flex items-center justify-center flex-wrap p-3'>
        <button className='inline-flex p-3 hover:bg-green-600 rounded md:hidden ml-auto hover:text-white outline-none'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div className='hidden md:inline-flex md:justify-center md:flex-grow md:flex-auto'>
          <div className='md:inline-flex w-fit md:items-center flex md:h-auto lowercase'>
            {navlinks.map((link, index) => (
              <Link href={link.path} key={index}>
                <a className={styles.navbarLink}>{link.name}</a>
              </Link>
            ))}
          </div>
        </div>
        <div className='inline-flex justify-center'>
          <a href='https://github.com/elewis9989'>
            <FaGithub />
          </a>
        </div>
      </nav>
    </>
  );
}
