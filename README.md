# Matix-blog Theme

A simple blog built with Astro(v5),Tailwind, Shadcn.

## Live Demo

- [My blog Site](https://www.antzhu.com/)

## Features

- 🚀 Fast and optimized - Built for speed and performance.
- 🦾 TypeScript, of course.
- 🎨 [TailwindCss](https://tailwindcss.com/)： A utility-first CSS framework.
- 📖 Simple: Just md / mdx files.
- ☁️ Deploy on Netlify, zero-config.
- 🚀 SEO-friendly: Support for SEO.
- 📱 Responsive: Support for mobile devices.
- 📦 Based on [Astro](https://astro.build) version latest.
- 😃 Better UI: Support [Shadcn UI Components.](https://ui.shadcn.com/docs/components)

## Project Structure

```text
├── config/
├── db/
├── public/
├── src/
│   ├── config/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── styles/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

1. `src/content/`： This  directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/post/`, and type-check your frontmatter using an optional schema. See [Content Layer](https://docs.astro.build/en/guides/content-collections/#defining-the-collection-loader) to learn more.

```ts
// src/config/site.ts

export const siteConfig: SiteConfig = {
  author: 'your name',
  title: 'your title',
  description: 'your description',
  url: 'your site url',
  repoUrl: 'your github repo url',
   links: {
    twitter: 'https://twitter.com/yourusername',
    github: 'https://github.com/yourusername',
    notion: 'your notion site url',
    email: 'your email',
  },
  // pagination
  pagination: {
    pageSize: 10,
  },
  home: {
    displayNumber: 5,
  },
}
```

2.`src/config`: This directory is used to configure the basic information of the website and the menu information.

3.`src/components/`:  All the components will be placed in this directory, including the  [Shadcn UI Components](https://ui.shadcn.com/docs/components/).

4.`src/styles`: All the styles will be placed in this directory and will be modularized according to different functionalities.

## Try it now

### GitHub Template

[Create a repo from this template on GitHub.](https://github.com/MatixLab/matix-blog/generate)

## Usage

### Development

Just run and visit [http://localhost:4321](http://localhost:4321)

```bash
pnpm run dev
```

### Build

To build the App, run

```bash
pnpm run build
```

And you will see the generated file in `dist` that ready to be served.

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way, and your App will be live in a minute.

## Credit

- Based on [astro](https://astro.build/).

- [More information](/credits/).

## 📜 License

Licensed under the [MIT](./LICENSE) License, Copyright © 2025
