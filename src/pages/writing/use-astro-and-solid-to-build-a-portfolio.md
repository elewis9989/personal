---
layout: "../../layouts/MarkdownLayout.astro"
title: Use Astro and Solid to Build a Portfolio
excerpt: Learn how to use Astro and Solid to build your portfolio
coverImage: /images/blog/cover-rebuilding-my-portfolio.png
ogImage: /images/blog/cover-rebuilding-my-portfolio.png
date: "2023-09-09"
---

# Why Switch

I'd previously used NextJS to host my portfolio but the problem was that I was sending a lot of Javascript to user's web browser. This is because React (which NextJS uses) needs to be loaded onto the browser for "reactivity." But for a portfolio, I didn't really need all that much interactivity so sending the React library to the client is heavy.

That's where Astro comes into play. It lets me serve my website statically resulting in faster load times and smaller bundles. If I need interactivity, I can sprinkle that in where needed (whether it be React, Svelte, Vue, Solid, etc).

Okay but why Solid instead of React? 1) I've used React for years, time to learn something new. 2) Solid is fast. SolidJS doesn't use a virtual DOM like React does where it goes node by node to see what's changed between the actual DOM. SolidJS instead plugs itself directly into the parts of the DOM that can be "reactive." It's a susbtantially faster and simpler way to add reactivity to a website or app.

# What's in this Guide

This isn't quite a full "follow along" type tutorial. I'm going to give you the gist to understand at a high level and if you want to see my source code, you can check it out [here](https://github.com/itsRoze/personal)

# The Tech Stack

- Astro for the main framework
- SolidJS to sprinkle some reactive components as needed
- TailwindCSS because it lets us quickly style our website with easy to remember utility classes
- Vercel to deploy

# Let's Get Started

## Installation

Create a new Astro project

```bash
pnpm create astro@latest
```

Add TailwindCSS

```bash
pnpm astro add tailwind
```

Add SolidJS

```bash
pnpm astro add solid
```

If you're wondering why pnpm, it's because its a whole heck faster.

Now run your project

```bash
pnpm dev
```

## Pages

Creating pages in Astro is simple. Within the `pages` directory you can create a new route e.g. `about.astro` which would yield `portfolio.com/about`.

Since I also want to have a blog, I can create markdown files in the pages directory. Particularly subdirectories will yield nested routes e.g. `portfolio.com/blog/post-1` if I create a file `pages/blog/post-1.md`.

## Layouts

Pages in my portfolio have a general layout an astro allows you to create layouts that you can wrap your content within.

```astro
---
import "@styles/global.css";
import Head from "@components/Head.astro";
import { Navigation } from "@components/navigation/navigation.tsx";

interface Props {
  title: string;
  ...
}

const { title, ... } = Astro.props;
---

<!doctype html>
<html lang="en">
  <Head
    title={title}
    description={description}
    type={type}
    image={image}
    date={date}
  />
  <body class={background}>
    <Navigation
      client:load
      textColor={navColor}
      underlineColor={navUnderline}
      pathname={Astro.url.pathname}
    />
    <main><slot /></main>
  </body>
</html>
```

This layout file has two components `Head` and `Navigation` defined elsewhere that we'll talk about later.

The `slot` element is where my page content will go (a sort of placeholder).

I can use this layout as such:

```astro

---
import Layout from "../layouts/Layout.astro";
---

<Layout
  title="ROZE | ABOUT"
  ...
>
  <header>
      <h1>
        Hello. I am a Washington D.C. based software engineer 🧑🏽‍💻.
      </h1>
  </header>
</Layout>
```

# Components

In the above example, you saw that I used some components. You can use the astro language to make components or you can also make them in another framework like Solid. Components can take in props like we're used to and are reusable.

Since the navbar would be on each page, I had it as a component within my Layout file.

I know I want to a list of my projects on my portfolio so I can make this a component.

I can create `src/components/projects.tsx` to make a solid component.

Let's store some example projects

```tsx
import modalImg from "../images/projects/modal.png";
import giftableImg from "../images/projects/giftable.png";

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
];
```

You'll notice here that I'm importing images within my `src` folder. This is because Astro can bundle and optimize them versus if stored in the `public/` directory.

Now I can display these projects in a Solid component which has similar syntax to React but with a few differences

```tsx
export const ProjectList: Component = () => {
  return (
    <div class="w-full xl:h-[30rem] h-[25rem] overflow-y-scroll custom-scroll">
      <For each={projects}>
        {(project) => (
          <FadeIn>
            <div class="xl:p-10 px-10 py-4 flex flex-col lg:flex-row items-center h-full justify-between">
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
```

A few things about this code

- We're using TailwindCSS to style our elements
- These are actually HTML elements unlike React so you'll see we're using `class` instead of `className`
- The `For` component allows us to render a list and is already keyed which is why we're not using the `key` attribute like you would in React if you were mapping an array

Here's the code for the `FadeIn` component that I'm using

```tsx
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
```

The main thing to note here is `createSignal`. This is effectively like `useState`. But remember how I said SolidJS plugs itself into the actual DOM whereas React uses a virtual DOM? Because of that, `visible` isn't a static variable like in React. It's a getter, meaning we have to call it as `visible()`.

Another thing to note, `createEffect` is like `useEffect` but we don't need to supply it a dependency array like in React because Solid is smart enough to detect the signals being used.

Finally, I can use my Solid component in my astro page, `pages/projects.astro`:

```astro
---
import Layout from "../layouts/Layout.astro";
import "@styles/projects.css";
import { ProjectList } from "@components/projects";
---

<Layout
  title="ROZE | PROJECTS"
  ...
>
  <header>
    <h1>
      Featured Projects
    </h1>
  </header>
  <section>
    <ProjectList client:load />
  </section>
</Layout>
```

By default, Astro won't send the component's javascript to the client, so we have to specify the directive `client:load` to tell Astro to do so! What's awesome about this is I could essentially use Solid (or another UI framework) instead of a mix of astro and Solid and Astro will only send the HTML by default.

# Blog Posts

So now how do I generate 1) a page to display all my blogs posts and 2) a page to show the content of a single post?

On `pages/blog.astro` for example we can write Javascript within the `---` snippet to retrieve all our markdown files.

```astro
---
import Layout from "@layouts/Layout.astro";
import BlogCard from "@components/BlogCard.astro";

export interface Frontmatter {
  title: string;
  excerpt: string;
  coverImage: string;
  ogImage: string;
  date: string;
}
const allPosts = await Astro.glob<Frontmatter>("./*.md");

//sort by date
allPosts.sort((a, b) => {
  const dateA = new Date(a.frontmatter.date);
  const dateB = new Date(b.frontmatter.date);
  return dateB.getTime() - dateA.getTime();
});
---

<Layout
  title="ROZE | WRITING"
  ...
>
  <header>
    <h1>Blog</h1>
  </header>
  <section>
    <ul>
      {
        allPosts.map((post) => (
          <li>
            <BlogCard
              url={post.url ?? "/404"}
              frontmatter={post.frontmatter}
              rawContent={post.rawContent()}
            />
          </li>
        ))
      }
    </ul>
  </section>
</Layout>
```

`Astro.glob` will import many files at once (in this case all our markdown files within the current folder). We use Typescript to define what the frontmatter will look like, e.g.

```markdown
---
layout: "../../layouts/MarkdownLayout.astro"
title: What is a Tech Cooperative - A Short Introduction
excerpt: Learn what a tech cooperative is, how it works, and why it's the next big thing in tech.
coverImage: /images/blog/cover-what-is-a-tech-cooperative.png
ogImage: /images/blog/cover-what-is-a-tech-cooperative.png
date: "2023-04-18"
---

> The most tragic form of loss isn’t the loss of security; it’s the loss of the capacity to imagine that things could be different.
>
> &mdash; <cite>Ernest Bloch, The Principle of Hope</cite>

# What's a Cooperative?

...
```

Here the frontmatter matches the typescript interface we defined, but what about `MarkdownLayout`. I created another layout file to define the layout of a blog post. `BlogCard` is a component I created to render a url to each blog post with some information about that post.

In the `MarkdownLayout` we can pull in the props passeed and slot in our blog post

```astro
---
import type { Frontmatter } from "@/pages/writing/index.astro";
import Layout from "./Layout.astro";
import readingTime from "reading-time";

interface Props {
  frontmatter: Frontmatter;
  rawContent: () => string;
}
const { frontmatter, rawContent } = Astro.props;
const { title, excerpt, ogImage, date } = frontmatter;
---

<Layout
  title={title}
  ...
>
  <header class="px-1">
    <h1>{title}</h1>
    <div class="flex items-center gap-2 md:text-lg font-normal text-zinc-500">
      <div
        class="flex grow flex-col sm:flex-row sm:items-center sm:justify-between mt-4"
      >
        <div>
          <span>Roze</span> /{" "}
          <time>
            {
              new Date(date).toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            }
          </time>
        </div>
        <div class="flex items-center gap-1">
          <span>{readingTime(rawContent()).text}</span>
        </div>
      </div>
    </div>
  </header>
  <article class="prose max-w-screen-xl md:prose-xl px-1 lg:px-0 lg:mt-8">
    <slot />
  </article>
</Layout>
```

# My Review

Overall, it was really fast to learn Astro especially if you've used other frameworks like NextJS before. Astro's documentation is well written and I even recommend their tutorial.

The developer experience was great, I had a fun time building and very little issues.

Okay but what about performance? So it would be unfair to directly compare my revamped portfolio to my old one because I changed quite a bit. But a few general things to note

- Network requests are down by almost 4x. In my NextJS website, I would have close to 40 requests on some pages. Astro would send 10
- Loading times were all mostly down, with some down by close to 100ms.
- Network resources substantially lowered (over a MB with NextJS, versus a few kB with Astro)

Also, adding `<ViewTransition />` that Astro offers added a smooth app like feeling with just that one line!

What about the bad? I have to test this more, but some images (even using Astro's image optimization) loads slow. This could be an issue with Vercel though. More investigation is needed.
