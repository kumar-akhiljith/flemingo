import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'flemingo',
  tagline: 'A modern chat app built for clarity, privacy, and emotional insight.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Change to the deployed docs URL later
  url: 'https://flemingo-docs.example.com',

  baseUrl: '/',

  organizationName: 'kumar-akhiljith',
  projectName: 'flemingo',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/kumar-akhiljith/flemingo/tree/main/',
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/flemingo-social-card.png',

    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: 'flemingo',
      logo: {
        alt: 'Flemingo Logo',
        src: 'img/logo.svg', 
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/kumar-akhiljith/flemingo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            { label: 'GitHub Issues', href: 'https://github.com/kumar-akhiljith/flemingo/issues' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Flemingo.`,
    },

    prism: {
      theme: prismThemes.github,      
      darkTheme: prismThemes.dracula, 
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
