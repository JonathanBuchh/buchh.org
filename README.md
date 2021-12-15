# jonathanbuchh.github.io

My [personal website](https://buchh.org) published on the [gh-pages](https://github.com/JonathanBuchh/jonathanbuchh.github.io/tree/gh-pages) branch.

## Why [Jekyll](https://jekyllrb.com/)?

I prefer writing in [Markdown](https://en.wikipedia.org/wiki/Markdown) over pure HTML and I like having a fast website. I use a [static site generator](https://en.wikipedia.org/wiki/Web_template_system#Static_site_generators) so I can keep consistent headers and footers on all pages.

I know that [hugo](https://gohugo.io/) would build my site faster, but I have so little content that the build times don't bother me (for now). I'll probably get bored one day and switch to it.

## Building

`gem install bundler`

`bundle install`

`bundle exec jekyll serve` (add `--livereload` if you don't want to reload every time you make changes)

## [GitHub Actions](https://github.com/JonathanBuchh/jonathanbuchh.github.io/tree/main/.github/workflows)

### Minification

I use a GitHub action to publish this site to another branch so that I can automatically compress HTML. This saves just a little extra bandwidth when a user loads up my website. It's completely unnecessary and I love it.

I use [@tmcw](https://github.com/tmcw)'s [premature-optimizer](https://github.com/tmcw/premature-optimizer) because it handles inline CSS really well. It removes all extra characters. For example: `a{color:#000;}` becomes `a{color:#000}`

### Linkrot

I also use [notfoundbot](https://github.com/tmcw/notfoundbot) to check for outdated links. No one likes clicking on a link and finding out that the site doesn't exist. It's nice that notfoundbot automatically finds the website in the [Internet Archive](https://archive.org/)

### Google Lighthouse

I love getting 100 in every section (except [PWA](https://developers.google.com/web/ilt/pwa/lighthouse-pwa-analysis-tool)) of [Google's Lighthouse report](https://developers.google.com/web/tools/lighthouse/), so I use [lighthouseci](https://github.com/GoogleChrome/lighthouse-ci) to make sure my website always publishes with full scores. It's annoying to run tests on each page manually so lighthouse-ci does it for me.

## Converting images

I convert images to `.webp` because they weigh less than `.jpg` images and make them as small as possible (without Lighthouse getting mad at me). I use [ImageMagick](https://imagemagick.org/) with the following command: `convert image.jpg -resize x400 image.webp`
