import type { SidebarConfig } from '@vuepress/theme-default'

export const vi: SidebarConfig = {
  //! -----Begin: Guide
  '/guide/': [
    '/guide/intro.md',
    '/guide/desc.md',
    '/guide/tutorial.md',
    '/guide/contribution.md',
    '/guide/source.md',
  ],


  // Begin: C

  // Begin: Linux

  '/linux/': [
    '/linux/1.md',
    '/linux/2.md',
    '/linux/3.md',
    '/linux/4.md',
    '/linux/5.md',
    '/linux/6.md',
    '/linux/7.md',
    '/linux/8.md',
    '/linux/9.md',
  ],

  '/java/Basic/': [
    {
      text: 'Chương 1. Java Căn Bản',
      children: [
        '/java/Basic/1.md',
        '/java/Basic/2.md',
        '/java/Basic/3.md',
        '/java/Basic/4.md',
        '/java/Basic/5.md',
        '/java/Basic/6.md',
        '/java/Basic/7.md',
        '/java/Basic/8.md',
        '/java/Basic/9.md',
        '/java/Basic/10.md',
        '/java/Basic/11.md',
        '/java/Basic/12.md',
      ],
    },
    { text: 'Chương 2. Java Nâng Cao', link: '/java/Advanced/1.md' },
    { text: 'Chương 3. Java OOP', link: '/java/OOP/3.md' }
  ],

  '/java/Advanced/': [
    { text: 'Chương 1. Java Căn Bản', link: '/java/Basic/1.md' },
    {
      text: 'Chương 2. Java Nâng Cao',
      children: [
        '/java/Advanced/1.md',
        '/java/Advanced/2.md',
        '/java/Advanced/3.md',
        '/java/Advanced/4.md',
        '/java/Advanced/5.md',
        '/java/Advanced/6.md',
        '/java/Advanced/7.md',
        '/java/Advanced/8.md',
        '/java/Advanced/9.md',
        '/java/Advanced/10.md',
        '/java/Advanced/11.md',
        '/java/Advanced/12.md',
        '/java/Advanced/13.md',
        '/java/Advanced/14.md',
      ],
    },
    { text: 'Chương 3. Java OOP', link: '/java/OOP/1.md' }
  ],

  '/java/OOP/': [
    { text: 'Chương 1. Java Căn Bản', link: '/java/Basic/1.md' },
    { text: 'Chương 2. Java Nâng Cao', link: '/java/Advanced/1.md' },
    {
      text: 'Chương 3. Java OOP',
      children: [
        '/java/OOP/1.md',
        '/java/OOP/2.md',
        '/java/OOP/3.md',
        '/java/OOP/4.md',
        '/java/OOP/5.md',
      ],
    },
  ],

  //*Jquery
  '/jquery/': [
    '/jquery/1.md',
    '/jquery/2.md',
    '/jquery/3.md',
    '/jquery/4.md',
    '/jquery/5.md',
    '/jquery/6.md',
    '/jquery/7.md',
    '/jquery/8.md',
    '/jquery/9.md',
    '/jquery/10.md',
    '/jquery/11.md',
    '/jquery/12.md',
    '/jquery/13.md',
    '/jquery/14.md',
    '/jquery/15.md',
    '/jquery/16.md',
    '/jquery/17.md',
    '/jquery/18.md',
  ],
  //* BootStrap5
  '/bootstrap5/': [
    '/bootstrap5/1.md',
    '/bootstrap5/2.md',
    '/bootstrap5/3.md',
    '/bootstrap5/4.md',
    '/bootstrap5/5.md',
    '/bootstrap5/6.md',
    '/bootstrap5/7.md',
    '/bootstrap5/8.md',
    '/bootstrap5/9.md',
    '/bootstrap5/10.md',
    '/bootstrap5/11.md',
    '/bootstrap5/12.md',
    '/bootstrap5/13.md',
    '/bootstrap5/14.md',
    '/bootstrap5/15.md',
    '/bootstrap5/16.md',
    '/bootstrap5/17.md',
    '/bootstrap5/18.md',
    '/bootstrap5/19.md',
    '/bootstrap5/20.md',
    '/bootstrap5/21.md',
    '/bootstrap5/22.md',
    '/bootstrap5/23.md',
    '/bootstrap5/24.md',
    '/bootstrap5/25.md',
    '/bootstrap5/26.md',
    '/bootstrap5/27.md',
    '/bootstrap5/28.md',
    '/bootstrap5/29.md',
  ],

  //* Web
  '/course/web/': [
    { text: 'Web Deverloper', link: '/course/web/'},
  ],
  //* Office
  '/course/office/': [
    { text: 'Office', link: '/course/office/' },
  ],
  // Word
  '/course/office/word/1/': [
    '/course/office/word/1/1.md',
    '/course/office/word/1/2.md',
    '/course/office/word/1/3.md',
    '/course/office/word/1/4.md',
  ],
  // Excel
  '/course/office/excel/1/': [
    '/course/office/excel/1/1.md',
    '/course/office/excel/1/2.md',
    '/course/office/excel/1/3.md',
    '/course/office/excel/1/4.md',
    '/course/office/excel/1/5.md',
    '/course/office/excel/1/6.md',
    '/course/office/excel/1/7.md',
    '/course/office/excel/1/8.md',
    '/course/office/excel/1/9.md',
    '/course/office/excel/1/10.md',
    '/course/office/excel/1/11.md',
  ],
  //* Server
  '/course/server/': [
    { text: 'Server', link: '/course/server/' },
  ],
  //* Moible
  '/course/mobile/': [
    { text: 'Mobile', link: '/course/mobile/' },
  ],
  //* System
  '/course/system/': [
    { text: 'System Language', link: '/course/system/', },
  ],
  '/course/system/c/1/': [
    {
      text: 'Lập trình C++ qua 108 bài học',
      children: [
        '/course/system/c/1/1.md',
        '/course/system/c/1/2.md',
        '/course/system/c/1/3.md',
        '/course/system/c/1/4.md',
        '/course/system/c/1/5.md',
        '/course/system/c/1/6.md',
        '/course/system/c/1/7.md',
        '/course/system/c/1/8.md',
        '/course/system/c/1/9.md',
        '/course/system/c/1/10.md',
        '/course/system/c/1/11.md',
      ],
    },
  ],
  '/course/system/c/2/': [
    {
      text: 'Cấu trúc dữ liệu và giải thuật',
      children: [
        '/course/system/c/2/1.md',
        '/course/system/c/2/2.md',
        '/course/system/c/2/3.md',
        '/course/system/c/2/4.md',
        '/course/system/c/2/5.md',
      ],
    },
  ],
  '/course/system/c/3/': [
    {
      text: 'Lập trình C++ hướng đối tượng',
      children: [
        '/course/system/c/3/1.md',
        '/course/system/c/3/2.md',
        '/course/system/c/3/3.md',
        '/course/system/c/3/4.md',
        '/course/system/c/3/5.md',
        '/course/system/c/3/6.md',
        '/course/system/c/3/7.md',
        '/course/system/c/3/8.md',
        '/course/system/c/3/9.md',
        '/course/system/c/3/10.md',
        '/course/system/c/3/11.md',
      ],
    },
  ],
  //* tip
  '/tips/': [
    {
      text: 'Tips & Track',
      link: '/tips/',
    },
  ],
  '/tips/browser/': ['/tips/browser/extension.md'],
  '/tips/system/': ['tips/system/mathpix.md'],
  //* devbook
  '/': [
    {
      text: 'DevBook for Zen',
      link: '/',
    },
  ],
  '/html/refer/': [
    {
      text: 'DevBook HTML',
      children: [
        '/html/refer/tag.md',
        '/html/refer/globalAttributes.md',
        '/html/refer/eventAttributes.md',
        '/html/refer/attribute.md',
      ],
    },
  ],
}
