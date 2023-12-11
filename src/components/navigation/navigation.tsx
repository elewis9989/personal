import { cn } from "@/utils/cn";
import { createSignal, type Component, For } from "solid-js";
import { Drawer } from "./drawer";

import roseImg from "../../images/rose.svg";

const links = [
  { name: "Projects", href: "/projects" },
  { name: "Writing", href: "/writing" },
  { name: "Resume", href: "/resume.pdf" },
  { name: "RSS", href: "/rss.xml" },
];

interface INavigation {
  pathname: string;
}

export const Navigation: Component<INavigation> = (props) => {
  const [open, setOpen] = createSignal(false);

  const toggleDrawer = () => {
    setOpen(!open());
  };

  return (
    <nav class={cn("flex lg:gap-24 lg:py-4 py-1 z-10 font-sans")}>
      {/* Mobile Menu */}
      <button id="mobile-menu" onclick={toggleDrawer} class="lg:hidden">
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
        <a href="/">
          <img src={roseImg.src} alt="Rose flower" class="w-4 xl:w-6 h-auto" />
        </a>
        <For each={links}>
          {(link) => (
            <a
              href={link.href}
              target={link.name === "Resume" ? "_blank" : "_self"}
              class={cn({
                "lowercase text-lg": true,
                "underline underline-offset-[12px]":
                  props.pathname.includes(link.href) && link.href !== "/",
              })}
            >
              {link.name}
            </a>
          )}
        </For>
      </Drawer>
      {/* Web Menu */}
      <div class="hidden text-lg 2xl:text-xl lowercase lg:flex gap-4 2xl:gap-7 items-center pb-12">
        <a href="/">
          <img src={roseImg.src} alt="Rose flower" class="w-4 xl:w-6 h-auto" />
        </a>
        <For each={links}>
          {(link) => (
            <a
              href={link.href}
              target={link.name === "Resume" ? "_blank" : "_self"}
              class={cn({
                "underline underline-offset-[8px]":
                  props.pathname.includes(link.href) && link.href !== "/",
                "group transition duration-300 hover:underline underline-offset-[8px]":
                  !props.pathname.includes(link.href),
              })}
            >
              {link.name}
              <span
                class={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-1`}
              ></span>
            </a>
          )}
        </For>
      </div>
    </nav>
  );
};
