import { NextPage } from 'next';
import Layout from '../components/Layout';

const Writing: NextPage = () => {
  return (
    <Layout>
      <div className='flex items-center justify-center'>
        <h1 className='title pb-4'>Writing ✍️</h1>
      </div>
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
