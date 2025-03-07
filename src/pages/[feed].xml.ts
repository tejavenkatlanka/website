import type { APIContext, APIRoute } from 'astro'
import type { Item } from 'feed'
import { siteConfig } from '@/config/site'
import { getPosts, getTils } from '@/lib/fetchers'
import { Feed } from 'feed'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'

const parser = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
})

const feedTypes: string[] = [
  'rss',
  'post',
  'til',
  'atom',
]

export function getStaticPaths() {
  return feedTypes.map((feed) => {
    return { params: { feed } }
  })
}

const BASE_URL = siteConfig.url
const AUTHOR = {
  name: siteConfig.author,
  email: siteConfig.links.email,
  link: BASE_URL,
}

export const GET: APIRoute = async (context: APIContext) => {
  const feedType = context.params.feed
  const postFeedItems: Item[] = []
  const TilFeedItems: Item[] = []

  const posts = await getPosts()
  const Tils = await getTils()
  posts.forEach((post) => {
    postFeedItems.push({
      title: post.data.title,
      id: `${BASE_URL}/${post.collection}/${post.id}/`,
      link: `${BASE_URL}/${post.collection}/${post.id}/`,
      description: post.data.description,
      content: sanitizeHtml(parser.render(post.body || ''), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      }).replace('href="/', `href="${context.site?.href}`),
      date: post.data.updatedDate,
      author: [AUTHOR],
    })
  })

  Tils.forEach((Til) => {
    TilFeedItems.push({
      title: Til.data.title,
      id: `${BASE_URL}/${Til.collection}/${Til.id}/`,
      link: `${BASE_URL}/${Til.collection}/${Til.id}/`,
      description: Til.data.description,
      content: sanitizeHtml(parser.render(Til.body || ''), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      }).replace('href="/', `href="${context.site?.href}`),
      date: Til.data.updatedDate,
      author: [AUTHOR],
    })
  })

  const feed = new Feed({
    title: siteConfig.title,
    id: `${BASE_URL}/`,
    link: `${BASE_URL}/`,
    description: siteConfig.description,
    // optional, used only in RSS 2.0.
    // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    language: 'zh-CN',
    favicon: `${BASE_URL}/favicon.svg`,
    copyright: 'CC BY-NC-SA 4.0 2021 © Anthony Zhu',
    feedLinks: {
      rss: `${BASE_URL}/rss.xml`,
      atom: `${BASE_URL}/atom.xml`,
    },
    author: AUTHOR,
  })

  if (feedType === 'rss' || feedType === 'atom') {
    postFeedItems
      .concat(TilFeedItems)
      .forEach((item: Item) => {
        feed.addItem(item)
      })
  }
  if (feedType === 'post') {
    postFeedItems
      .forEach((item: Item) => {
        feed.addItem(item)
      })
  }
  if (feedType === 'til') {
    TilFeedItems
      .forEach((item: Item) => {
        feed.addItem(item)
      })
  }

  return new Response(
    feed.rss2(),
    {
      headers: { 'Content-Type': 'application/xml' },
    },
  )
}
