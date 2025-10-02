export const APP_CONFIG = {
  SITE_NAME: 'Ресторан',
  ADMIN_PASSWORD: 'restaurant2024',
  SESSION_TIMEOUT: 24, 
  DEFAULT_IMAGE: '/images/placeholder.jpg'
} as const

export const ROUTES = {
  HOME: '/',
  MAIN: '/main',
  MENU: '/menu',
  DELIVERY: '/delivery',
  ABOUT: '/about',
  ADMIN: '/admin'
} as const

export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1200
} as const