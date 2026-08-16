import { z } from 'zod';

export const LandingConfigSchema = z.object({
  slug: z.string(),
  title: z.string(),
  copy: z.string(),
  colors: z.object({
    primary: z.string(),
    secondary: z.string(),
  }),
  sections: z.array(
    z.object({
      type: z.enum(['hero', 'features', 'cta']),
      content: z.string(),
    })
  ),
  form: z.object({
    fields: z.array(z.string()),
    action: z.string().url(),
  }),
});
