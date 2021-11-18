#!/usr/bin/env bash

set -o xtrace

JEKYLL_PORT=$(grep '^port:' ./_config.yml | cut -d ' ' -f2)
JEKYLL_PORT=${JEKYLL_PORT:-4000}
PA11Y_PORT=$(./node_modules/.bin/get-port)
RESULTS_DIRECTORY=./tmp/results/pa11y

./node_modules/.bin/serve --listen $PA11Y_PORT --no-clipboard ./dist &

SERVER_PID=$!

mkdir -p $RESULTS_DIRECTORY

./node_modules/.bin/wait-on http://0.0.0.0:$PA11Y_PORT

./node_modules/.bin/pa11y-ci \
  --sitemap http://0.0.0.0:$PA11Y_PORT/sitemap.xml \
  --sitemap-find http://localhost:$JEKYLL_PORT \
  --sitemap-replace http://0.0.0.0:$PA11Y_PORT \
  --json > ${RESULTS_DIRECTORY}/results.json

EXIT_CODE=$?

kill $SERVER_PID

node -p "JSON.stringify(JSON.parse(require('fs').readFileSync(process.argv[1])), null, 2);" \
  ${RESULTS_DIRECTORY}/results.json

exit $EXIT_CODE
