import Link from 'next/link';
import { navlinks } from '../utils/data';

export default function Navbar() {
  return (
    <>
      <nav className='flex items-center justify-center flex-wrap p-3'>
        <button className='inline-flex p-3 hover:bg-green-600 rounded lg:hidden ml-auto hover:text-white outline-none'>
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
        <div className='hidden w-full lg:inline-flex lg:justify-center lg:flex-grow lg:flex-auto'>
          <div className='lg:inline-flex w-fit lg:items-center flex lg:h-auto lowercase'>
            {navlinks.map((link, index) => (
              <Link href={link.path} key={index}>
                <a className='lg:inline-flex w-full px-3 py-2 items-center justify-center hover:text-white '>
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
