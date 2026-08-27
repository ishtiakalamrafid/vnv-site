import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
	// Load Markdown and MDX files in the `src/content/articles/` directory.
	loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		category: z.enum([
			'Rundown',
			'Under the Hood',
			'Build Logs',
			'Competition Watch',
			'Bio-Inspired Corner',
			'Field Notes',
			'Take a Stand',
			'Guest Voices',
		]),
		author: z.string().default('ishtiak-alam-rafid'),
		tags: z.array(z.string()).optional(),
		description: z.string(),
		image: z.string(),
	}),
});

export const collections = { articles };
