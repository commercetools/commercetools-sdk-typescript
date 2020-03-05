#!/bin/bash

## Install rmf cli (if not exist)
#export VRAP_VERSION=1.0.0-20200225111016 && curl -o- -s https://raw.githubusercontent.com/vrapio/rmf-codegen/master/scripts/install.sh | bash

rm -rf ./src/generated
rmf-codegen generate ${ML_API_REF} -o src/generated -t typescript_client

yarn post_process_generate