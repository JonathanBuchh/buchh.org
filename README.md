# jonathanbuchh.github.io

My [personal website](https://buchh.org) published on the `gh-pages` branch.

## Why [Hugo](https://gohugo.io)?

There are a few things that were nonnegotiable for me when starting this website. I needed to write in [Markdown](https://en.wikipedia.org/wiki/Markdown) because writing pure HTML is tedious and I needed the site to be as fast as possible. I also wanted to be able to change headers and footers on all pages without having to change each page individually (I need to be able to use templates), which made a [static site generator](https://en.wikipedia.org/wiki/Web_template_system#Static_site_generators) generator an obvious choice.

## Development

`hugo server up`

## GitHub Actions

### Linkrot

I use [notfoundbot](https://github.com/tmcw/notfoundbot) to check for outdated links. No one likes clicking on a link and finding out that the site doesn't exist. It's nice that notfoundbot automatically finds the website in the [Internet Archive](https://archive.org/)

### Google Lighthouse

**Update:** I'm pausing until https://github.com/gohugoio/hugo/issues/9054 gets resolved, since I can't get 100 on accessibility using footnotes.

I love getting 100 in every section (except [PWA](https://developers.google.com/web/ilt/pwa/lighthouse-pwa-analysis-tool)) of [Google's Lighthouse report](https://developers.google.com/web/tools/lighthouse/), so I use [lighthouseci](https://github.com/GoogleChrome/lighthouse-ci) to make sure my website always publishes with full scores. It's annoying to run tests on each page manually so lighthouse-ci does it for me.

## Converting images

I convert images to `.webp` because they weigh less than `.jpg` images and make them as small as possible (without Lighthouse getting mad at me). I use [ImageMagick](https://imagemagick.org/) with the following command: `convert image.jpg -resize x400 image.webp`r
