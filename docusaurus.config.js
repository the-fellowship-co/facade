module.exports = {
  title: 'Better way to build backends',
  tagline: 'Design, develop and deploy backends incredibly fast.',
  url: 'https://letsbyld.com',
  baseUrl: '/',
  favicon: 'favicon/ico',
  organizationName: 'the-fellowship-co', // Usually your GitHub org/user name.
  projectName: 'facade', // Usually your repo name.
  plugins: ['@docusaurus/plugin-google-analytics'],
  themeConfig: {
    usePrism: true,
    defaultLang: 'js',
    disableDarkMode: true,
    navbar: {
      title: 'Byld',
      links: [
        {
          label: 'Alpha',
          position: 'left',
          className: 'badge badge--warning'
        },
        {
          to: 'docs/getting_started/intro',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'docs/bylding_backends/todo_app',
          activeBasePath: 'docs',
          label: 'Quick Start',
          position: 'right',
        },
        // {
        //   to: 'https://calendly.com/letsbyld/demo',
        //   label: 'Request Demo',
        //   position: 'right',
        // },
        // {
        //   to: 'pricing/',
        //   // activeBasePath: 'facade',
        //   label: 'Pricing',
        //   position: 'right',
        // },
        // {to: 'blog', label: 'Blog', position: 'left'},
        // {
        //   to: 'login/',
        //   label: 'Sign In',
        //   position: 'right',
        //   className: 'link--click'
        // },
        {
          to: 'https://forms.gle/2VGp3jgdndogwM939',
          activeBasePath: 'docs',
          label: 'Get Access',
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
              label: 'Get Access',
              to: 'https://forms.gle/2VGp3jgdndogwM939',
              className: 'footer--blue',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/letsbyld/shared_invite/zt-eof91hhg-UixoDOiNumWOkk_e17a09w',
              target: "_blank",
            },
          ],
        },
        {
          title: 'Contact Us',
          items: [
            {
              label: 'Talk to us',
              to: "https://calendly.com/letsbyld/talktous",
              target: "_blank",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Fellowship Co`,
    },
    googleAnalytics: {
      trackingID: 'UA-55212147-2',
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
