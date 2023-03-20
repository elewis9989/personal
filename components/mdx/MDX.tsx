import { useMDXComponent } from 'next-contentlayer/hooks';
import ResponsiveImage from './ResponsiveImage';

const components = {
  Image: ResponsiveImage,
};

interface Props {
  code: string;
}
const MDX: React.FC<Props> = ({ code }) => {
  const Component = useMDXComponent(code);

  return (
    <article className="prose max-w-none text-xl md:text-2xl">
      <Component components={{ ...components }} />
    </article>
  );
};

export default MDX;
