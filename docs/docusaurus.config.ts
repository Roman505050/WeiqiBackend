import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Weiqi - Documentation',
  tagline: 'Get started with Weiqi',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://duerx9ttvgdyw.cloudfront.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/WeiqiBackend',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Roman505050', // Usually your GitHub org/user name.
  projectName: 'WeiqiBackend', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          editUrl:
            'https://github.com/Roman505050/WeiqiBackend/tree/main/packages/docs/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Weiqi',
      logo: {
        alt: 'Weiqi Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/Roman505050/WeiqiBackend',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: '',
        //     },
        //     {
        //       label: 'Discord',
        //       href: '',
        //     },
        //     {
        //       label: 'X',
        //       href: '',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'Backend GitHub',
              href: 'https://github.com/Roman505050/WeiqiBackend',
            },
            {
              label: 'Frontend GitHub',
              href: 'https://github.com/nesharp',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Weiqi, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
