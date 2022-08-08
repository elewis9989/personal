import Image from 'next/image';

interface IProjectCardProps {
  title: string;
  type: string;
  year: string;
  src: string;
  demo: string;
  description: string;
}

export default function ProjectCard({
  title,
  type,
  year,
  src,
  demo,
  description,
}: IProjectCardProps) {
  return (
    <div className='px-9'>
      <p className='header-1 font-bold text-blue-pastel'>{title}</p>
      <div className='md:flex'>
        <div className='flex pt-4'>
          <p className='bg-blue-pastel text-white font-bold rounded-full py-1 px-3 h-fit tag'>
            {year}
          </p>
          <p className='pl-7 text-gray-pastel font-light'>{type}</p>
        </div>
        <div className='flex md:pl-7 pt-4'>
          {src && (
            <a
              href={src}
              target='_blank'
              rel='noreferrer'
              className='font-light'
            >
              💻 Code
            </a>
          )}
          {demo !== '' && (
            <a
              href={demo}
              target='_blank'
              rel='noreferrer'
              className={`font-light ${src ? 'pl-7' : ''}`}
            >
              🔗 Demo
            </a>
          )}
        </div>
      </div>

      <p className='pt-4 break-normal max-w-screen-sm	paragraph'>
        {description}
      </p>
    </div>
  );
}
