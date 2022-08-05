interface IStyledBtnProps {
  site: string;
}

export default function StyledBtn({ site }: IStyledBtnProps) {
  return (
    <a
      className='relative px-4 py-2 group'
      href={site}
      target='_blank'
      rel='noreferrer'
    >
      <span className='absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-blue-pastel group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
      <span className='absolute inset-0 w-full h-full bg-white border-2 border-blue-pastel group-hover:bg-blue-pastel'></span>
      <span className='relative group-hover:text-white'> contact</span>
    </a>
  );
}
