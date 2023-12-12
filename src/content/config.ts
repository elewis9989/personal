import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    coverImage: z.string().optional(),
    ogImage: z.string().optional(),
    date: z.date(),
    isDraft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
