import { defineCollection, z } from 'astro:content';

const work = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		heroWide: z.string().optional(),
		pinned: z.boolean().optional(),
		fedi: z.string().optional(),
		alt: z.string().optional(),
		tags: z.array(z.string()).optional(),
		readNext: z.string().optional(),
	}),
});

export const collections = { work };
