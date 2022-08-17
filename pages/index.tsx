import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Home: NextPage = () => {
  return (
    <Layout>
      <Seo
        title="hi, i'm roze 🌹"
        type='website'
        description='Coder, writer, & certified goof'
      />
      <div className='flex flex-col items-center justify-center'></div>
    </Layout>
  );
};

export default Home;
