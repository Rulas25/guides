import { docsLoader } from '@astrojs/starlight/loaders'
import { docsSchema } from '@astrojs/starlight/schema'
import { defineCollection } from 'astro:content'
import { videosSchema } from 'starlight-videos/schemas'
import { autoSidebarLoader } from 'starlight-auto-sidebar/loader'
import { autoSidebarSchema } from 'starlight-auto-sidebar/schema'

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema({ extend: videosSchema }) }),
  autoSidebar: defineCollection({
    loader: autoSidebarLoader(),
    schema: autoSidebarSchema(),
  }),
}