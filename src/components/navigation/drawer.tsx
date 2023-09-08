import { cn } from "@/utils/cn";
import { type Component, type JSX, type Setter, type Accessor } from "solid-js";

interface IDrawer {
  children: JSX.Element;
  open: Accessor<boolean>;
  setOpen: Setter<boolean>;
}

export const Drawer: Component<IDrawer> = (props) => {
  return (
    <main
      class={cn({
        "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out lg:hidden":
          true,
        "transition-opacity opacity-100 duration-500 translate-x-0":
          props.open(),
        "transition-all delay-500 opacity-0 -translate-x-full": !props.open(),
      })}
    >
      <section
        class={cn({
          "w-screen max-w-xs left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform":
            true,
          "translate-x-0": props.open(),
          "-translate-x-full": !props.open(),
        })}
      >
        <article class="relative w-fit max-w-xs pb-10 flex flex-col space-y-6 overflow-y-scroll h-full ml-2">
          <button onclick={() => props.setOpen(!props.open())} class="w-fit ">
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
              class="lucide lucide-x w-10 h-auto text-smoke"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
          {props.children}
        </article>
      </section>
      <section
        class=" w-screen h-full cursor-pointer "
        onClick={() => {
          props.setOpen(false);
        }}
      ></section>
    </main>
  );
};
