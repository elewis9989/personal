interface ITitleProps {
  title: string;
}

export default function Title({ title }: ITitleProps) {
  return (
    <div className='flex items-center justify-center'>
      <h1 className='title'>{title}</h1>
    </div>
  );
}
