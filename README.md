# [buchh.org](https://buchh.org)

My [personal website](https://buchh.org) published with [GitHub
Pages](https://pages.github.com/).

## Why [Hugo](https://gohugo.io)?

There are a few things that were nonnegotiable for me when starting this
website. I needed to write in [Markdown](https://en.wikipedia.org/wiki/Markdown)
because writing pure HTML is tedious and I needed the site to be as fast as
possible. I also wanted to be able to change headers and footers on all pages
without having to change each page individually (I need to be able to use
templates), which made a [static site
generator](https://en.wikipedia.org/wiki/Web_template_system#Static_site_generators)
generator an obvious choice.

## Development

`hugo server up`

## Converting images

I convert images to `.webp` because they weigh less than `.jpg` images and make
them as small as possible (without Lighthouse getting mad at me). I use
[ImageMagick](https://imagemagick.org/) with the following command: `convert
image.jpg -resize x400 image.webp`

## Resume

1. Install LaTeX on MacOS: `brew install mactex`
2. Compile: `make`
