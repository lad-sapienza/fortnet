import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { bdusLoader } from '@lad-sapienza/scms-core/integrations/bdusLoader';

// "sites" needs full per-row detail (geometry lives in bdus5's geodata,
// only available from the full-record endpoint) for ~270 rows — one HTTP
// request per row, so this is fetched once at build time via the loader,
// never from the browser. See AtlasMap.tsx / atlas.astro.
const sites = defineCollection({
  loader: bdusLoader({ tb: 'sites', mode: 'build' }),
  schema: z
    .object({
      id: z.number(),
      site_name: z.string(),
      site_id: z.string().nullable().optional(),
      ancient_name: z.string().nullable().optional(),
      typology: z.string().nullable().optional(),
      chronology: z.string().nullable().optional(),
      description: z.string().nullable().optional(),
      description_en: z.string().nullable().optional(),
      municipality: z.string().nullable().optional(),
      province: z.string().nullable().optional(),
      _geometry: z.any().nullable().optional(),
    })
    .loose(),
});

export const collections = { sites };
