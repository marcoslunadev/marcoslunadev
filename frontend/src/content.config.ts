import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const localized = z.object({ es: z.string(), en: z.string() });

// Proyectos del portafolio (sección #portafolio)
const projects = defineCollection({
  loader: file('src/data/projects.json'),
  schema: z.object({
    order: z.number(),
    image: z.string(),
    categories: z.array(z.enum(['fullstack', 'ai', 'architecture'])),
    tags: z.array(z.string()),
    tag: localized,
    title: localized,
    description: localized,
    details: localized,
  }),
});

// Herramientas del stack IA (carrusel 3D de #tecnologias)
const aiStack = defineCollection({
  loader: file('src/data/ai-stack.json'),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    logo: z.string(),
    logoAlt: z.string(),
    logoOnWhite: z.boolean(),
    categories: z.array(z.enum(['development', 'local', 'cloud', 'agentic'])),
    typeLabel: z.string(),
    deploy: z.object({ label: z.string(), variant: z.enum(['cloud', 'hybrid', 'local']) }),
    description: localized,
  }),
});

export const collections = { projects, aiStack };
