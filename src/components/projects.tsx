import { For, type Component, createSignal } from "solid-js";

const MAX_VISIBILITY = 3;

export const ProjectList: Component = () => {
  return <Carousel />;
};

interface ICard {
  title: string;
  description: string;
}

const Card: Component<ICard> = (props) => {
  return (
    <div class="card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

const Carousel: Component = (props) => {
  const [active, setActive] = createSignal(2);

  return (
    <div class="carousel">
      {active() > 0 && (
        <button
          class="nav left"
          onclick={() => {
            console.log("hi");
            setActive(active() - 1);
          }}
        >
          <ChevronLeft />
        </button>
      )}

      <For each={projects}>
        {(project, i) => (
          <div
            class="card-container"
            style={{
              "--active": i() === active() ? 1 : 0,
              "--offset": (active() - i()) / 3,
              "--direction": Math.sign(active() - i()),
              "--abs-offset": Math.abs(active() - i()) / 3,
              "pointer-events": active() === i() ? "auto" : "none",
              opacity: Math.abs(active() - i()) >= MAX_VISIBILITY ? "0" : "1",
              display:
                Math.abs(active() - i()) > MAX_VISIBILITY ? "none" : "block",
            }}
          >
            <Card title={project.title} description={project.description} />
          </div>
        )}
      </For>
      {active() < projects.length - 1 && (
        <button
          class="nav right"
          onclick={() => {
            console.log("hi");
            setActive(active() + 1);
          }}
        >
          <ChevronRight />
        </button>
      )}
    </div>
  );
};

const ChevronLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-chevron-left"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
};

const ChevronRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-chevron-right"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
};

const projects = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Project 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Project 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Project 7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Project 8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Project 9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Project 10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
