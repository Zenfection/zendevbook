import type { NavbarConfig } from '@vuepress/theme-default'

export const vi: NavbarConfig = [
  {
    text: 'WebSite',
    children: [
      {
        text: 'Cơ bản',
        children: [
          { text: 'HTML', link: '/web/htlm/' },
          { text: 'CSS', link: '/web/css/' },
          { text: 'Javascript', link: '/web/javascript/' },
        ]
      },
      {
        text: 'Thư viện',
        children: [
          { text: 'Bootstrap 5', link: '/web/bootstrap5/' },
          { text: 'jQuery', link: '/web/jquery/' },
        ]
      }
    ]
  },

  {
    text: 'FrontEnd',
    children: [
      { text: 'Typescript', link: '/frontend/typescript/' },
      { text: 'NodeJS', link: '/frontend/nodejs/' },
      { text: 'VueJS', link: '/frotned/vue/' },
    ]
  },

  {text: 'Linux', link: '/linux/'},
  {text: 'Java', link: '/java/'},
]
