import { defineCollection, reference, z } from "astro:content";

const postCollection = defineCollection({
  type: "content",
  schema: z.object({
    author: reference("authors"),
    description: z.string().max(160, {
      message: "Description must be 160 characters or less.",
    }),
    isDraft: z.boolean(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    pubDate: z.date(),
    relatedPosts: z.array(reference("posts")).optional(),
    tags: z.array(z.string()),
    title: z.string().max(60, {
      message: "Title must be 60 characters or less.",
    }),
  }),
});

const authorCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    bio: z.string(),
    email: z.string(),
    hobbies: z.enum(["Software", "Travel", "Music"]),
    headshot: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = {
  author: authorCollection,
  posts: postCollection,
};
