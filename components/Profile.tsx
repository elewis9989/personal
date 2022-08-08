import Image from 'next/image';
import profile from '../public/profile.png';
import StyledBtn from './StyledBtn';

export default function Profile() {
  return (
    <div className='flex justify-between pb-10 border-b-2	'>
      <div className='md:ml-9'>
        <div className='lowercase'>
          <p className='subtitle pb-4'>hi, i&apos;m roze 👋🏼</p>
          <div className='title'>
            <p>Writer</p>
            <p>Coder</p>
            <p>Goof</p>
          </div>
          <p className='subtitle pt-4'>📍 brooklyn, ny</p>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='relative md:min-w-[163px] md:min-h-[163px] min-w-[100px] min-h-[100px] md:mr-20'>
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
