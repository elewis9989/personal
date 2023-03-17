import CodingProject from '../components/CodingProject';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import PageTitle from '../components/PageTitle';
import { codingProjects } from '../lib/data';
import { NextPageWithLayout } from './page';

const Coding: NextPageWithLayout = () => {
  return (
    <>
      <section className="flex items-center justify-center">
        <PageTitle title="Featured Works" />
      </section>
      <section className="flex items-center mx-auto max-w-2xl pt-14">
        <ul className="space-y-8">
          {codingProjects.map((project, index) => (
            <li key={index} className="">
              <CodingProject
                title={project.title}
                description={project.description}
                url={project.url}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Coding;

Coding.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
