TMP_DIR = ./tmp
DEFAULT_OUTPUT_DIR = ./dist
OUTPUT_DIR = $(DEFAULT_OUTPUT_DIR)
PACKAGE_DIR = ./build
NODE_BIN = ./node_modules/.bin

start:
	$(MAKE) -j2 start-docs start-assets

start-docs:
	bundle exec jekyll serve --watch

start-assets: build-fonts build-images
	npm run watch:docs

validate-gemfile-lock: Gemfile Gemfile.lock
	@echo "Validating Gemfile.lock..."
	@bundle check
	@git diff-index --quiet HEAD Gemfile.lock || (echo "Error: There are uncommitted changes after running 'bundle install'"; exit 1)

validate-package-lock: package.json package-lock.json
	@echo "Validating package-lock.json..."
	@npm install --ignore-scripts
	@(! git diff --name-only | grep package-lock.json) || (echo "Error: There are uncommitted changes after running 'npm install'"; exit 1)

validate-lockfiles: validate-gemfile-lock validate-package-lock

typecheck:
	npm run typecheck

optimize-svg:
	$(NODE_BIN)/svgo --config svgo.config.js --recursive --folder src/img

optimize-assets: optimize-svg

lint-optimized-assets: optimize-assets
	(! git diff --name-only | grep "\.svg$$") || (echo "Error: Optimize assets using 'make optimize-assets'"; exit 1)

lint: build-package validate-lockfiles lint-optimized-assets typecheck
	npm run lint

build: build-docs build-assets build-package

build-docs:
	JEKYLL_ENV=production RUBY_YJIT_ENABLE=1 bundle exec jekyll build

build-assets: build-sass-and-js build-fonts build-images build-sass-packages

build-package:
	npm run build:pkg

build-sass-and-js:
	npm run build:docs
ifneq ($(OUTPUT_DIR),$(DEFAULT_OUTPUT_DIR))
	mkdir -p $(OUTPUT_DIR)/assets
	mv $(DEFAULT_OUTPUT_DIR)/assets/js $(DEFAULT_OUTPUT_DIR)/assets/css $(OUTPUT_DIR)/assets
endif

build-sass-packages:
	mkdir -p packages
	cp -r node_modules/@uswds/uswds/packages/* packages
	cp -r src/scss/packages/* packages

build-fonts:
	mkdir -p $(OUTPUT_DIR)/assets/fonts
	cp -r node_modules/@uswds/uswds/dist/fonts $(OUTPUT_DIR)/assets

build-images:
	mkdir -p $(OUTPUT_DIR)/assets/img
	cp -r node_modules/@uswds/uswds/dist/img $(OUTPUT_DIR)/assets
	cp -r src/img $(OUTPUT_DIR)/assets

create-snapshots:
	node scripts/snapshot.js

test:
ifdef ONLY_VISUAL_REGRESSION_TEST
	node --test --experimental-strip-types test/screenshot.test.ts
else
	make build
	node --test --experimental-strip-types "test/**/*.test.ts"
endif

clean:
	rm -rf $(OUTPUT_DIR)
	rm -rf $(TMP_DIR)
	rm -rf $(PACKAGE_DIR)

.PHONY: \
	start \
	start-docs \
	start-assets \
	validate-gemfile-lock \
	validate-package-lock \
	validate-lockfiles \
	typecheck \
	optimize-svg \
	optimize-assets \
	lint-optimized-assets \
	lint \
	build \
	build-docs \
	build-assets \
	build-package \
	build-sass-and-js \
	build-sass-packages \
	build-fonts \
	build-images \
	test \
	clean
