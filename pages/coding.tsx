import { NextPage } from 'next';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

const Coding: NextPage = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-5xl pb-12'>Featured Works 🚀</p>
        <div className='flex'>
          <ul>
            <li>
              <ProjectCard />
            </li>
            <div className='relative flex py-5 items-center'>
              <div className='flex-grow border-t border-gray-300'></div>
            </div>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Coding;
