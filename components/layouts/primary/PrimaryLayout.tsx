import Navbar from './Navbar';
import { classNames } from '../../../lib/helpers';
import Link from 'next/link';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className={classNames('mx-auto max-w-7xl')}>{children}</main>
      <footer className="flex items-end justify-center text-stone-600 py-8 flex-grow">
        <Link href="/">© roze 🌹 {new Date().getFullYear()}</Link>
      </footer>
    </div>
  );
};

export default PrimaryLayout;
