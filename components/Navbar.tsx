import Link from 'next/link';
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { navlinks } from '../utils/data';
import { useState } from 'react';

export default function Navbar() {
  const [navBtnClicked, setNavBtnClicked] = useState(false);
  return (
    <nav className='w-full'>
      <div className='inline-flex justify-between px-4 mx-auto lg:max-w-7xl items-center md:flex md:px-8 w-full'>
        {/* LEFT */}
        <div>
          <button
            className={`p-3 rounded md:hidden outline-none ${
              navBtnClicked ? 'bg-purple-pastel text-white' : ''
            }`}
            onClick={() => {
              setNavBtnClicked(!navBtnClicked);
            }}
          >
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
        </div>
        {/* CENTER */}
        <div>
          <div className='hidden flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0'>
            <ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
              {navlinks.map((link, index) => (
                <li
                  key={index}
                  className=' hover:text-indigo-200 transition duration-300 lowercase md:text-xl'
                >
                  <Link href={link.path}>
                    <a>{link.name}</a>
                  </Link>
                </li>
              ))}
              <li className=' hover:text-indigo-200 transition duration-300 lowercase md:text-xl'>
                <Link href='/files/Resume.pdf'>
                  <a target='_blank' rel='noreferrer'>
                    Resume
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* RIGHT */}
        <div className='inline-flex text-xl lg:text-2xl'>
          <a
            href='https://github.com/elewis9989'
            className='lg:px-4 px-2 hover:text-indigo-200 transition duration-300'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub />
          </a>
          <a
            href='https://twitter.com/emotionldaffodl'
            className='lg:px-4 px-2 hover:text-indigo-200 transition duration-300'
            target='_blank'
            rel='noreferrer'
          >
            <FaTwitter />
          </a>
          <a
            href='mailto:hello@aroze.xyz'
            className='lg:px-4 px-2 hover:text-indigo-200 transition duration-300'
            target='_blank'
            rel='noreferrer'
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className={`md:hidden p-8	${!navBtnClicked ? 'hidden' : ''}`}>
        <ul className=''>
          {navlinks.map((link, index) => (
            <li
              key={index}
              className='p-3 hover:text-indigo-200 border-l-4 border-double border-blue-pastel transition duration-300 lowercase'
            >
              <Link href={link.path}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}
          <li className='p-3 hover:text-indigo-200 border-l-4 border-double border-blue-pastel transition duration-300 lowercase'>
            <Link href='/files/Resume.pdf'>
              <a target='_blank' rel='noreferrer'>
                Resume
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
