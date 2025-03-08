import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  author: 'Teja Venkat',
  title: 'Teja Venkat\'s Blog',
  description: 'A Full Stack Developer.',
  url: 'https://www.antzhu.com',
  repoUrl: 'https://github.com/lankatejavenkat/site-blog',
  slogan: 'Building ...',
  links: {
    twitter: 'https://twitter.com',
    github: 'https://github.com',
    blueSky: 'https://bsky.app',
    notion: 'https://notion.com',
    email: 'test@gmail.com',
  },
  // pagination
  pagination: {
    pageSize: 10,
  },
  home: {
    displayNumber: 5,
  },
}
