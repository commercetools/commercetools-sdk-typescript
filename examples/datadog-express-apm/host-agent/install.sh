#!/bin/bash

set -e

# source .env
set -a; source .env; set +a
# export $(cat .env | xargs)

DD_AGENT_MAJOR_VERSION=7 \
DD_API_KEY=${DD_API_KEY} \
DD_SITE=${DD_URL} \
bash -c "$(curl -L https://s3.amazonaws.com/dd-agent/scripts/install_mac_os.sh)"
