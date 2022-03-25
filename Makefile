MAKEFLAGS += --jobs=6
TMP_DIR = ./tmp
OUTPUT_DIR = ./dist
PACKAGE_DIR = ./build
NODE_BIN = ./node_modules/.bin

# Federalist builds overwrite the output directory.
ifdef SITE_PREFIX
	OUTPUT_DIR = ./_site
endif

start: start-docs start-assets

start-docs:
	bundle exec jekyll serve --watch

start-assets: build-fonts build-images
	NODE_ENV=development $(NODE_BIN)/gulp watch

validate-gemfile-lock: Gemfile Gemfile.lock
	@echo "Validating Gemfile.lock..."
	@bundle check
	@git diff-index --quiet HEAD Gemfile.lock || (echo "Error: There are uncommitted changes after running 'bundle install'"; exit 1)

validate-package-lock: package.json package-lock.json
	@echo "Validating package-lock.json..."
	@npm install --ignore-scripts
	@(! git diff --name-only | grep package-lock.json) || (echo "Error: There are uncommitted changes after running 'npm install'"; exit 1)

validate-lockfiles: validate-gemfile-lock validate-package-lock

optimize-svg:
	$(NODE_BIN)/svgo --config svgo.config.js -f src/img

optimize-assets: optimize-svg

lint-optimized-assets: optimize-assets
	(! git diff --name-only | grep "\.svg$$") || (echo "Error: Optimize assets using 'make optimize_assets'"; exit 1)

lint: build-package validate-lockfiles lint-optimized-assets
	$(NODE_BIN)/gulp lint

build: build-docs build-assets build-package

build-docs:
	JEKYLL_ENV=production bundle exec jekyll build

build-assets: build-sass-and-js build-fonts build-images copy-scss

build-package:
	$(NODE_BIN)/gulp build-package

build-sass-and-js:
	NODE_ENV=production \
	DISABLE_NOTIFIER=true \
	OUTPUT_DIR=$(OUTPUT_DIR) \
	$(NODE_BIN)/gulp build

build-fonts:
	mkdir -p $(OUTPUT_DIR)/assets/fonts
	cp -r node_modules/uswds/src/fonts $(OUTPUT_DIR)/assets

build-images:
	mkdir -p $(OUTPUT_DIR)/assets/img
	cp -r node_modules/uswds/src/img $(OUTPUT_DIR)/assets
	cp -r src/img $(OUTPUT_DIR)/assets

copy-scss:
	$(NODE_BIN)/gulp copy-scss

test: build
	npm exec jest

clean:
	rm -rf $(OUTPUT_DIR)
	rm -rf $(TMP_DIR)
	rm -rf $(PACKAGE_DIR)
