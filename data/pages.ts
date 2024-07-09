import type { PageInformation } from '~/types/page'

export const pages: PageInformation[] = [
  {
    id: 'calendar',
    link: {
      href: '/',
      titleI18n: 'header.0',
    },
    titleI18n: 'header.0',
    theme: {
      headerColor: '#FFFFFF',
      color: '#1E1E1E',
      menuBg: '#DA291C',
      menuText: '#FFFFFF',
    },
  },
  {
    id: 'about',
    link: {
      href: '/about',
      titleI18n: 'header.1',
    },
    titleI18n: 'header.1',
    theme: {
      headerColor: '#DA291C',
      color: '#FFFFFF',
      menuBg: '#03973A',
      menuText: '#FFFFFF',
    },
  },
  {
    id: 'benefits',
    link: {
      href: '/benefits',
      titleI18n: 'header.2',
    },
    titleI18n: 'header.2',
    theme: {
      headerColor: '#03973A',
      color: '#FFFFFF',
      menuBg: '#DA291C',
      menuText: '#FFFFFF',
    },
  },
]
