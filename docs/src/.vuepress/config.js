const {description} = require('../../package');

module.exports = {
  base: '/ix-video/',
  markdown: {
    lineNumbers: true,
  },
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '@imgix/ix-video',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', {name: 'theme-color', content: '#f8510f'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    displayAllHeaders: true,
    nav: [
      {
        text: 'Overview',
        link: '/overview/',
      },
      {
        text: 'Stream Videos',
        link: '/overview/basic-usage/',
      },
      {
        text: 'imgix',
        link: 'https://www.imgix.com',
      },
    ],
    sidebar: {
      '/overview/': [
        {
          title: 'Overview',
          collapsable: false,
          children: [
            '',
            'installation',
            {
              title: 'Usage',
              collapsable: false,
              children: [
                'basic-usage',
                ['react', 'React'],
                ['vue', 'Vue'],
                ['static', 'Static HTML Page'],
              ],
            },
            'customization',
            'advanced-usage',
            'attributes',
          ],
          sidebarDepth: 2,
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top'],
};
