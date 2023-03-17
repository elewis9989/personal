import { Titillium_Web } from '@next/font/google';
import Link from 'next/link';
import { classNames } from '../../../lib/helpers';
import Navbar from './Navbar';

export const titillium = Titillium_Web({
  variable: '--font-titillium-web',
  weight: ['200', '300', '400', '600', '700', '900'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
});

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <div
      className={classNames(
        'flex flex-col h-screen',
        `${titillium.variable} font-serif`
      )}
    >
      <Navbar />
      <main className={classNames('')}>{children}</main>
      <footer className="flex items-end justify-center py-8 flex-grow">
        <Link href="/">© Roze 🌹 {new Date().getFullYear()}</Link>
      </footer>
    </div>
  );
};

export default PrimaryLayout;
