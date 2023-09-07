import {
  For,
  type Component,
  createSignal,
  createEffect,
  type JSX,
} from "solid-js";

export const ProjectList: Component = () => {
  return (
    <div class="w-full lg:h-[50rem] h-[40rem] overflow-y-scroll custom-scroll">
      <For each={projects}>
        {(project) => (
          <FadeIn>
            <div class="p-10 flex flex-col lg:flex-row items-center h-full">
              <div class="flex flex-col items-center lg:w-1/2 w-full">
                <h2 class="lg:text-6xl text-4xl font-light py-1">
                  {project.title}
                </h2>
                <img src="/images/projects/modal.png" class="w-full h-auto" />
              </div>
              <div class="flex flex-col lg:w-1/2 w-full lg:gap-20 gap-10">
                <p class="lg:text-4xl lg:text-left text-center text-2xl font-extralight ">
                  {project.description}
                </p>
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

const projects = [
  {
    title: "Modal",
    description:
      "An opinionated productivity manager, helping you achieve your goals by breaking down tasks and prioritizing them effectively",
    year: "2021",
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    year: "2021",
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    year: "2021",
  },
  {
    title: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    year: "2021",
  },
  {
    title: "Project 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    year: "2021",
  },
  {
    title: "Project 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    year: "2021",
  },
  {
    title: "Project 7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    year: "2021",
  },
  {
    title: "Project 8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    year: "2021",
  },
  {
    title: "Project 9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    year: "2021",
  },
  {
    title: "Project 10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    year: "2021",
  },
];
