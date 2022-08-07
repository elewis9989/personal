import { NextPage } from 'next';
import Layout from '../components/Layout';
import Title from '../components/Title';

const Writing: NextPage = () => {
  return (
    <Layout>
      <Title title='Writing ✍️' />
      <div className='flex flex-col'>
        <h1 className='header-1 py-4'>🌻 Poetry</h1>
        <p className='header-3 italic ml-4'>...working on it!</p>
        <h1 className='header-1 py-4'>⚙️ Tech Articles</h1>
        <p className='header-3 italic ml-4'>...working on it!</p>
        <h1 className='header-1 py-4'>👽 Blog</h1>
        <p className='header-3 italic ml-4'>...working on it!</p>
      </div>
    </Layout>
  );
};

export default Writing;
