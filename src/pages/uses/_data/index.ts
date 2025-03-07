import type { UsingItem } from '@/types'

const Device: UsingItem[] = [
  { title: 'Apple Macbook Pro M1 Pro 14', url: 'https://www.apple.com.cn/shop' },
  { title: 'Apple Watch S9', url: 'https://www.apple.com.cn/shop' },
]

const Apps: UsingItem[] = [
  { title: 'Chrome', desc: 'For browsing' },
  { title: 'Follow', desc: 'For rss management' },
  { title: 'ClashX', desc: 'For proxy' },
  { title: 'DBeaver', desc: 'For database management', url: 'https://dbeaver.io/' },
  { title: 'Notion', desc: 'For plan management', url: 'https://www.notion.so/' },
  { title: 'VSCode', desc: 'For coding', url: 'https://code.visualstudio.com/' },
  { title: 'Obsidian', desc: 'For knowledge management', url: 'https://obsidian.md/' },
  { title: 'MonitorControl', desc: 'For control my display', url: 'https://monitorcontrol.app/' },
  { title: 'Ollama', desc: 'For llm management', url: 'https://ollama.com/' },
]

export const uses = {
  Device,
  Apps,
}
