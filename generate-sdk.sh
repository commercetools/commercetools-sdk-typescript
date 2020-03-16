#!/bin/bash

cd $(dirname $0)

srcDir=packages/ml-sdk/src
rm -rf ${srcDir}/generated
rmf-codegen generate ${ML_API_REF} -o ${srcDir}/generated -t typescript_client

yarn post_process_generate