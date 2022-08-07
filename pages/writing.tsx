import { NextPage } from 'next';
import Layout from '../components/Layout';

const Writing: NextPage = () => {
  return (
    <Layout>
      <div className='flex flex-col'>
        <h1 className='text-5xl pb-4'>🌻 Poetry</h1>
        <p className='italic ml-4'>...working on it!</p>
      </div>
    </Layout>
  );
};

export default Writing;
