module.exports = {
  title: 'Tufts HCI Lab',
  description: 'Tufts Human-robot Interaction Laboratory',
  base: '/hcilab_website_official/',
  dest: './docs/',
  theme: require.resolve('../../theme_ououe/'),
  themeConfig: {
    // defaultTheme: { dark: [19, 6] },
    defaultTheme: 'dark',
    showThemeButton: false,
    cover: '/cover.jpg',
    logo: '/logo_ghost.png',
    // search: true,
    // backgroundImage: false,
    // pageGroup: 5,
    // postTime: {
    //   createTime: 'Create Time',
    //   lastUpdated: 'Last Updated',
    //   options: {
    //     dateStyle: 'full',
    //     timeStyle: 'short',
    //     hour12: false,
    //     weekday: 'long'
    //   }
    // },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/' },
      { text: 'Doc', link: '/doc/' },
      { text: 'Tags', link: '/tag/' },
      { text: 'Categories', link: '/category/' },
      { text: 'About', link: '/about/' }
    ],
    footer: [
      { text: 'Github', link: 'https://github.com' }
    ]
  },
  // postcss: {
  //   plugins: [
  //     require('css-prefers-color-scheme/postcss'),
  //     require('autoprefixer')
  //   ]
  // }
}
