import Image from 'next/image';
import profile from '../public/profile.png';
import StyledBtn from './StyledBtn';
import { useRouter } from 'next/router';
import { navlinks } from '../utils/data';

export default function Profile() {
  const router = useRouter();

  return (
    <div
      className={
        'flex justify-between pb-10	xl:px-44 ' +
        (router.pathname !== navlinks[0].path ? 'border-b-2' : '')
      }
    >
      <div className='max-w-md'>
        <div className='lowercase'>
          <h1 className='title'>Hey friends 👋🏼</h1>
          <p className='subtitle pb-4'>
            i&apos;m roze 🌹 — a <strong>coder</strong>, <strong>writer</strong>
            , & <strong>goof</strong> residing in brooklyn, ny 📍
          </p>
          <p className='subtitle pt-4 pb-8'>
            This is my little hub where I share some of musings, projects, and
            other random fun things.
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
      <div className='flex flex-col items-center justify-center lg:justify-start'>
        <div className='relative xl:min-w-[225px] xl:min-h-[225px] md:min-w-[163px] md:min-h-[163px] min-w-[100px] min-h-[100px] md:mr-20'>
          <Image
            src={profile}
            alt='Picture of the author'
            layout='fill'
            objectFit='contain'
            className='object-top'
          />
        </div>
        <div className='md:mr-20 pt-4'>
          <StyledBtn title='contact' site='mailto:hello@aroze.xyz' />
        </div>
      </div>
    </div>
  );
}
