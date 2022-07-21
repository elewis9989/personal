import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-5xl'>brb, development in progress ☕️</p>
      </div>
    </Layout>
  );
};

export default Home;
