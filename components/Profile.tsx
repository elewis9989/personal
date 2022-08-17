import Image from 'next/image';
import profile from '../public/images/profile.png';
import StyledBtn from './StyledBtn';
import { useRouter } from 'next/router';
import { navlinks } from '../utils/data';

export default function Profile() {
  const router = useRouter();
  const isHome = router.pathname === navlinks[0].path;

  return (
    <div
      className={
        'flex justify-between pb-10 xl:px-10 2xl:justify-center' +
        (!isHome ? ' border-b-2' : ' 2xl:pb-20 xl:pb-16')
      }
    >
      <div className='max-w-md mx-4 xl:mx-6 2xl:mx-36'>
        <div className='lowercase'>
          <h1 className='title'>Hey friends 👋🏼</h1>
          <p className='subtitle pb-4'>
            i&apos;m roze 🌹 (they/them) — a <strong>coder</strong>,{' '}
            <strong>writer</strong>, & <strong>certified goof</strong> residing
            in brooklyn, ny 📍
          </p>
          <p className='subtitle pt-4 pb-8'>
            This is my little hub where I share some of my musings, projects,
            and other random fun things.
          </p>
          <div className='relative md:w-40 md:h-12 w-32 h-8 max-w-44 max-h-24'>
            <a
              href='https://www.buymeacoffee.com/roze'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                src='https://cdn.buymeacoffee.com/buttons/v2/default-red.png'
                alt='Buy Me a Coffee'
                layout='fill'
                objectFit='contain'
                className='object-top hover:brightness-90'
              />
            </a>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center xl:mx-6 2xl:mx-36'>
        <div className='relative xl:min-w-[225px] xl:min-h-[225px] md:min-w-[163px] md:min-h-[163px] min-w-[100px] min-h-[100px] md:mr-20'>
          <Image
            src={profile}
            alt='Picture of the author'
            layout='fill'
            objectFit='contain'
            className=''
          />
        </div>
        <div className='md:mr-20 pt-4'>
          <StyledBtn title='contact' site='mailto:hello@aroze.xyz' />
        </div>
      </div>
    </div>
  );
}
