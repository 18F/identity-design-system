#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset

app=$1
manifest=${2:-manifest.yml}

cf_api=${CF_API:-"https://api.fr.cloud.gov"}
cf_org=${CF_ORG:-"cloud-gov"}
cf_space=${CF_SPACE:-"cg-style"}

curl -L -o cf-cli_amd64.deb 'https://cli.run.pivotal.io/stable?release=debian64&source=github'
sudo dpkg -i cf-cli_amd64.deb
cf -v

# Install autopilot
go get github.com/contraband/autopilot
cf install-plugin -f /home/ubuntu/.go_workspace/bin/autopilot

cf api $cf_api
cf auth $CF_USERNAME $CF_PASSWORD
cf target -o $cf_org -s $cf_space

cf zero-downtime-push $app -f $manifest
