import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/works/" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/news/" }),
  schema: z.object({
    date: z.string(),
    description: z.string(),
  }),
});

export const collections = { works, news };
