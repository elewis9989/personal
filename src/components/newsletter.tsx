import { type Component } from "solid-js";

export const Newsletter: Component = () => {
  return (
    <section>
      <form class="flex gap-4 p-2 font-sans text-base">
        <input
          type="text"
          placeholder="Name"
          class="rounded-sm border border-gray-300 shadow-lg p-2 bg-stone-200"
          required
        />
        <input
          type="email"
          placeholder="Email"
          class="rounded-sm border border-gray-300 shadow-lg p-2 bg-stone-200"
          required
        />
        <button
          type="submit"
          class="bg-[#E56B6F] p-2 shadow-lg rounded-md text-white"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};
