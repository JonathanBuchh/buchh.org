.PHONY: build clean hugo package

build: hugo

clean:
	rm -rf public site.tar.gz

hugo:
	hugo --minify

package:
	cd public && tar -cvz . > ../site.tar.gz
