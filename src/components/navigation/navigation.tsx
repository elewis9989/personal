import { cn } from "@/utils/cn";
import { createSignal, type Component } from "solid-js";
import { Drawer } from "./drawer";

const links = [];

interface INavigation {
  textColor: string;
}

export const Navigation: Component<INavigation> = (props) => {
  const [open, setOpen] = createSignal(false);

  const toggleDrawer = () => {
    console.log("Hello");
    setOpen(!open());
  };

  return (
    <nav
      class={cn(
        props.textColor,
        "flex justify-between lg:justify-center items-center lg:gap-24",
      )}
    >
      <button id="mobile-menu" onclick={toggleDrawer}>
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
          class="lucide lucide-menu w-10 h-auto"
        >
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
      </button>
      <Drawer open={open} setOpen={setOpen}>
        <a>Hello</a>
      </Drawer>
    </nav>
  );
};
