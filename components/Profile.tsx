import Image from 'next/image';
import profile from '../public/profile.png';
import StyledBtn from './StyledBtn';

export default function Profile() {
  return (
    <div className='flex justify-around pb-20'>
      <div className='md:ml-9'>
        <div className='lowercase'>
          <p className='md:text-xl pb-4'>hi, i&apos;m roze 👋🏼</p>
          <div className='md:text-5xl text-3xl'>
            <p>Writer</p>
            <p>Coder</p>
            <p>Goof</p>
          </div>
          <p className='md:text-xl pt-4'>📍 brooklyn, ny</p>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='relative min-w-[200px] min-h-[200px] md:mr-20'>
          <Image
            src={profile}
            alt='Picture of the author'
            layout='fill'
            objectFit='contain'
            className='object-top'
          />
        </div>
        <div className='md:mr-20 pt-4'>
          <StyledBtn site='mailto:hello@aroze.xyz' />
        </div>
      </div>
    </div>
  );
}
