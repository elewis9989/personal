import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  title: string;
}

const ResponsiveImage: React.FC<Props> = ({ src, alt, title }) => {
  return (
    <span className="my-12 block">
      <Image
        src={src}
        alt={alt}
        title={title}
        width={600}
        height={350}
        className="rounded-md"
      />
    </span>
  );
};

export default ResponsiveImage;
