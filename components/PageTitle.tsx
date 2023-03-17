import { classNames } from '../lib/helpers';

interface Props {
  title: string;
}
const PageTitle: React.FC<Props> = ({ title }) => {
  return (
    <h1
      className={classNames(
        'text-black text-4xl lg:text-5xl text-center font-semibold tracking-wide'
      )}
    >
      {title}
    </h1>
  );
};

export default PageTitle;
