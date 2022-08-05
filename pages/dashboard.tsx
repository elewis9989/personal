import { NextPage } from 'next';
import Layout from '../components/Layout';

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-5xl'>Dashboard</p>
      </div>
    </Layout>
  );
};

export default Dashboard;
