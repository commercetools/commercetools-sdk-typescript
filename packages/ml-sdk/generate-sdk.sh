#!/bin/bash


rm -rf ./src/generated
rmf-codegen generate ${ML_API_REF} -o src/generated -t typescript_client

# This command replces path aliases with relative paths, since support for path alias isn't mature enough
npx tsconfig-replace-paths@0.0.5 --project tsconfig.json -s ./src -o ./src