module.exports = {
  title: 'Better way to build backends',
  tagline: 'Design, develop and deploy backends 10x faster.',
  url: 'https://particle.codes/',
  baseUrl: '/facade/',
  favicon: 'favicon/ico',
  organizationName: 'alphas-co', // Usually your GitHub org/user name.
  projectName: 'facade', // Usually your repo name.
  plugins: ['@docusaurus/plugin-google-analytics'],
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: 'Byld',
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
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
          to: 'docs/quick_start',
          activeBasePath: 'docs',
          label: 'Get started for free',
          position: 'right',
          className: 'link--blue',
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
              label: 'Get started for free',
              to: 'docs/quick_start',
              className: 'footer--blue',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/trusstalk/shared_invite/zt-eihpmvs6-w3mVxeKbtvwynF0qpcVwkQ',
              target: "_blank",
            },
          ],
        },
        {
          title: 'Contact Us',
          items: [
            {
              label: 'Request Demo',
              to: "https://calendly.com/trytruss/platform-demo",
              target: "_blank",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Truss`,
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
            'https://github.com/alphas-co/facade/edit/master/',
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
