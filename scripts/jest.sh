#!/usr/bin/env bash

set -o xtrace

JEST_PORT=`./node_modules/.bin/get-port` ./node_modules/.bin/jest
