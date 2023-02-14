import CodingProject from '../components/CodingProject';
import Heading from '../components/Heading';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { codingProjects } from '../lib/data';
import { glory } from '../lib/fonts';
import { classNames } from '../lib/helpers';
import { NextPageWithLayout } from './page';

const Coding: NextPageWithLayout = () => {
  return (
    <>
      <Heading
        title="roze | coding"
        description="Roze's featured coding projects"
        type="website"
      />
      <section className="flex items-center justify-center">
        <h1
          className={classNames(
            `${glory.variable} font-sans`,
            'text-stone-500 text-4xl lg:text-5xl text-center'
          )}
        >
          featured works 🚀
        </h1>
      </section>
      <section className="flex items-center mx-auto max-w-2xl pt-14">
        <ul>
          {codingProjects.map((project, index) => (
            <li key={index} className="py-6">
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
