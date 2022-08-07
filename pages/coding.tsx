import { NextPage } from 'next';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { codingProjects } from '../utils/data';

const Coding: NextPage = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center'>
        <p className='title pb-12'>Featured Works 🚀</p>
        <div className='flex'>
          <ul>
            {codingProjects.map((project, index) => (
              <div key={index}>
                <li>
                  <ProjectCard
                    title={project.title}
                    type={project.type}
                    year={project.year}
                    src={project.src}
                    demo={project.demo}
                    description={project.description}
                  />
                </li>
                <div className='relative flex py-5 items-center'>
                  <div className='flex-grow border-t border-gray-300'></div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Coding;
