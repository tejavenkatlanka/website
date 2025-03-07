import type { CreditItem } from '@/types'

const Colophon: CreditItem[] = [
  { title: 'Netlify', url: 'https://www.netlify.com', desc: 'Hosting On' },
  { title: 'Astro', url: 'https://astro.build', desc: 'Built With' },
]
const Inspiration: CreditItem[] = [
  {
    title: 'Anthony Zhu',
    url: 'https://antzhu.com',
    desc: 'Site is cloned from',
  },
]

export const credits = {
  Colophon,
  Inspiration,
}
