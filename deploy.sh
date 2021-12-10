#!/usr/bin/env bash
bundle exec jekyll build && \
cd _site && \
for file in $(find *.html)
do
    npx premature-optimizer $file
done
git add . && \
git commit -m "Deploy _site/ to gh-pages" && \
git push origin gh-pages && \
cd .. && \
git add . && \
git commit && \
echo "Successfully built and pushed gh-pages to GitHub"
