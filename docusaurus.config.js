module.exports = {
  title: 'A better way to build backends',
  tagline: 'build and ship 10x faster',
  url: 'https://particle.codes/',
  baseUrl: '/facade/',
  favicon: 'favicon/ico',
  organizationName: 'alphas-co', // Usually your GitHub org/user name.
  projectName: 'facade', // Usually your repo name.
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: 'Truss',
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          to: 'login/',
          label: 'Sign In',
          position: 'right',
          className: 'link--click'
        },
        {
          to: 'docs/',
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
              to: 'docs/',
              className: 'footer--blue',
            },
            {
              label: 'Guides',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'Contact Us',
          items: [
            {
              label: 'Request Demo',
              to: 'blog',
            },
            {
              label: 'Feedback',
              to: 'blog',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Truss`,
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
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
