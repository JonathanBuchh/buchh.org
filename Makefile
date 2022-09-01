.PHONY: build clean hugo serve

build: hugo

clean:
	rm -rf public

hugo:
	hugo --minify

serve:
	hugo serve --noHTTPCache
