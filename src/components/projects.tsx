import {
  For,
  type Component,
  createSignal,
  createEffect,
  type JSX,
} from "solid-js";

export const ProjectList: Component = () => {
  return (
    <div class="w-full lg:h-[50rem] h-[35rem] overflow-y-scroll custom-scroll">
      <For each={projects}>
        {(project) => (
          <FadeIn>
            <div class="p-10 flex flex-col lg:flex-row items-center h-full justify-between">
              <div class="flex flex-col items-center lg:w-1/2 w-full">
                <h2 class="lg:text-6xl text-4xl font-light py-2 text-center">
                  <a href={project.url} target="_blank" class="hover:underline">
                    {project.title}
                  </a>
                </h2>
                <div class="w-4/5 pb-10">
                  <img
                    src={project.image.src}
                    class="w-full h-auto shadow-xl shadow-gray-800 rounded-lg"
                  />
                </div>
              </div>
              <div class="flex flex-col lg:w-1/2 w-full lg:gap-10 gap-4">
                <p class="lg:text-4xl lg:text-left text-center text-2xl font-extralight ">
                  {project.description}
                </p>
                <div class="text-center lg:text-left">
                  <For each={project.tags}>
                    {(tag) => (
                      <span class="bg-yellow-200 w-fit px-2 py-0.5 rounded leading-4 mr-1 mb-1 inline-flex font-medium">
                        {tag}
                      </span>
                    )}
                  </For>
                </div>
                <p class="lg:text-3xl lg:text-left text-center text-2xl font-medium">
                  {project.year}
                </p>
              </div>
            </div>
          </FadeIn>
        )}
      </For>
    </div>
  );
};

interface IFadeIn {
  children: JSX.Element | JSX.Element[];
}

const FadeIn: Component<IFadeIn> = (props) => {
  const [visible, setVisible] = createSignal(false);
  let domRef: HTMLDivElement | undefined;

  createEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef as Element);
  });

  return (
    <div
      ref={domRef}
      class={`fade-in-section ${visible() ? "is-visible" : ""}`}
    >
      {props.children}
    </div>
  );
};

import modalImg from "../images/projects/modal.png";
import giftableImg from "../images/projects/giftable.png";
import dindinImg from "../images/projects/dindin.png";
import datavizGif from "../images/projects/dataviz.gif";
import iotGif from "../images/projects/iot.gif";

const projects = [
  {
    title: "Modal",
    description:
      "My first SaaS app. I never found a great productivity manager, so I built an opinionated one. Modal was designed with simplicity for the everyday user",
    year: "2023-Present",
    url: "https://usemodal.com/",
    image: modalImg,
    tags: ["React", "NextJS", "Tailwind CSS", "React Native", "AWS", "SQL"],
  },
  {
    title: "Giftable",
    description:
      "I created Giftable so that I could remember gift ideas for friends and family, as well as myself :) I thought building a social network would be a great learning experience to up my code skills too",
    year: "2022-2023",
    url: "https://giftableapp.com/",
    image: giftableImg,
    tags: ["React", "NextJS", "Tailwind CSS", "SQL"],
  },
  {
    title: "DinDin",
    description:
      "DinDin is a dinner party app that makes it easier to scheule and attend dinner parties. This project taught me how to design mobile apps for both android and ios",
    year: "2019",
    url: "https://github.com/itsRoze/DinDin",
    image: dindinImg,
    tags: ["React Native", "Firebase"],
  },
  {
    title: "Immigration Data Visualization",
    description:
      "I was curious to see how immigration numbers changed over time in the US, so I built a data visualization app to explore the data.",
    year: "2018",
    url: "https://immigration-viz.surge.sh/",
    image: datavizGif,
    tags: ["HTML", "CSS", "JavaScript", "D3"],
  },
  {
    title: "IoT Search Engine",
    description:
      "This project was built for the campus maintainance team at my university. The search engine allowed workers to search sensor data from IoT devices to monitor things like temperature and CO2.",
    year: "2018",
    url: "https://docs.google.com/presentation/d/e/2PACX-1vRaaSJg944iaiN75v8j0G9C7yWL0QFn8OMvCcW_Gm3mjOELJnyPz6ZSR9JMdf8hioSI18LeVj2FNruz/pub?start=false&loop=false&delayms=3000&slide=id.g464c87f956_0_902",
    image: iotGif,
    tags: ["Angular", "SQL", "Express", "IoT"],
  },
];
