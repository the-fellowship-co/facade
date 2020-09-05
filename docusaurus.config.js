module.exports = {
  title: 'Better way to build backends',
  tagline: 'Design and deploy modular backends incredibly fast.',
  url: 'https://letsbyld.com',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'the-fellowship-co', // Usually your GitHub org/user name.
  projectName: 'facade', // Usually your repo name.
  plugins: ['@docusaurus/plugin-google-analytics'],
  scripts : [
    "https://use.fontawesome.com/0a4cd9deaa.js"
  ],
  themeConfig: {
    usePrism: true,
    defaultLang: 'js',
    disableDarkMode: true,
    navbar: {
      title: 'Byld',

        {
          to: 'docs/getting_started/quick_start',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'signup',
          activeBasePath: 'docs',
          label: 'Try for free',
          position: 'right',
          className: 'link--blue',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Byld',
          items: [
            {
              label: 'Try for free',
              to: 'signup',
              className: 'footer--blue',
            },
          ],
        },
        {
          title: '',
          items: []
        },
        {
          title: 'Contact Us',
          items: [
            {
              label: 'team@letsbyld.com',
              to: "mailto:team@letsbyld.com",
              target: "_blank",
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Byld`,
    },
    googleAnalytics: {
      trackingID: 'UA-171802618-1',
      anonymizeIP: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'intro',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/the-fellowship-co/facade/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
