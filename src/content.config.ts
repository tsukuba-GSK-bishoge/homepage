import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/pages/works/" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { works };
