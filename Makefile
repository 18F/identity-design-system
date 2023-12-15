TMP_DIR = ./tmp
DEFAULT_OUTPUT_DIR = ./dist
OUTPUT_DIR = $(DEFAULT_OUTPUT_DIR)
PACKAGE_DIR = ./build
NODE_BIN = ./node_modules/.bin

# Cloud.gov Pages builds overwrite the output directory.
ifdef SITE_PREFIX
	OUTPUT_DIR = ./_site
endif

start: start-docs start-assets

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

optimize-svg:
	$(NODE_BIN)/svgo --config svgo.config.js -f src/img

optimize-assets: optimize-svg

lint-optimized-assets: optimize-assets
	(! git diff --name-only | grep "\.svg$$") || (echo "Error: Optimize assets using 'make optimize-assets'"; exit 1)

lint: build-package validate-lockfiles lint-optimized-assets
	npm run lint

build: build-docs build-assets build-package

build-docs:
	JEKYLL_ENV=production bundle exec jekyll build

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

test: build
	npm exec jest

clean:
	rm -rf $(OUTPUT_DIR)
	rm -rf $(TMP_DIR)
	rm -rf $(PACKAGE_DIR)
