#!/bin/bash

## Install rmf cli (if not exist)
#export VRAP_VERSION=1.0.0-20200225111016 && curl -o- -s https://raw.githubusercontent.com/vrapio/rmf-codegen/master/scripts/install.sh | bash

rm -rf ./src/generated
rmf-codegen generate ${ML_API_REF} -o src/generated -t typescript_client

# This command replces path aliases with relative paths, since support for path alias isn't mature enough
npx tsconfig-replace-paths@0.0.5 --project tsconfig-declarations.json -s ./src/generated -o ./src/generated

# # Optimise imports to make linters happier 
find src -type f -name "*.ts" | xargs npx organize-imports-cli@0.7.0