// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightAutoSidebar from 'starlight-auto-sidebar'
import starlightSidebarTopics from 'starlight-sidebar-topics'
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://guides.milohax.org/',
  base: '/',
  redirects: {
    "/": "/en/",
  },
  integrations: [
    starlight({
      title: 'MiloHax Guides',
      components: {
        Sidebar: './src/components/Sidebar.astro',
        Search: './src/components/Search.astro',
      },
      logo: {
        dark: './public/milohax.png',
        light: './public/milohax-dark.png',
        alt: 'MiloHax Guides',
        replacesTitle: true,
      },
      lastUpdated: true,
      social: [
        { icon: 'information', label: 'Website', href: 'https://milohax.org/' },
        { icon: 'blueSky', label: 'Bluesky', href: 'https://bsky.app/profile/milohax.org' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/hmxmilohax' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/milohax' },
        { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@MiloHax' },
      ],
      plugins: [
        starlightAutoSidebar(),
        starlightSidebarTopics([
          {
            label: 
            {en: 'RB3: RPCS3 Setup',
            es: 'RB3: Configurando RPCS3'},
            link: '/rb3pc/intro/disclaimers/',
            items: [ { autogenerate: { directory: 'rb3/rpcs3', },},
            ]
          },
          {
            label: 
            {en: 'RB3: PS3/RPCS3 Customs',
            es: 'RB3: Customs en PS3/RPCS3'},
            link: '/rb3/ps3customs/intro',
            items: [ { autogenerate: { directory: 'rb3/ps3customs', },},
            ]
          },
          {
            label: 
            {en: 'Charting: REAPER',
            es: 'Charteando: REAPER'},
            link: '/charting/reaper/intro/',
            items: [ { autogenerate: { directory: 'charting/reaper', },},
            ]
          },
        ]),
      ],

      customCss: ['./src/styles/custom.css'],
      defaultLocale: 'en',
      locales: {
        // English docs in `src/content/docs/en/`
        en: { label: 'English' },
        // Spanish docs in `src/content/docs/es/`
        es: { label: 'Español', lang: 'es' },
      },
    }),
    mdx(),
  ],
});
