import Image from 'next/image';

export default function ProjectCard() {
  return (
    <div className='flex hover:shadow-lg'>
      <div className='mt-3'>
        <Image
          alt='DinDin App Screenshot'
          src='/dindin.png'
          layout='intrinsic'
          width={314}
          height={235}
          className='rounded-md'
        />
      </div>
      <div className='px-9'>
        <p className='text-2xl font-bold text-blue-pastel'>Title</p>
        <div className='flex pt-4'>
          <p className='bg-blue-pastel text-white font-bold rounded-full py-1 px-3 text-sm'>
            2020
          </p>
          <p className='pl-7 text-gray-pastel font-light'>Dashboard</p>
        </div>
        <p className='pt-4 break-normal max-w-screen-sm	'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
  );
}
