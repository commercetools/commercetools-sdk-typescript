#!/bin/bash
export SDK_HOME="../packages/ml-sdk"
export ML_API_REF="ml-services-api-reference/api.raml"
export branch_name="update_spec_changes_$(date +%s)"

cd $(dirname $0)


yarn install\
&&rm -rf ${SDK_HOME}/src/generated && rm -rf ml-services-api-reference\
&& git clone git@github.com:commercetools/ml-services-api-reference.git\
&&rmf-codegen generate ${ML_API_REF} -o ${SDK_HOME}/src/generated -t typescript_client\
&&npx tsconfig-replace-paths@0.0.5 --project ${SDK_HOME}/tsconfig-declarations.json -s ${SDK_HOME}/src/generated -o ${SDK_HOME}/src/generated\
&&find ${SDK_HOME}/src/generated -type f -name "*.ts" | xargs npx organize-imports-cli@0.7.0\
&&yarn format
&&git checkout -b ${branch_name}\
&&git add -u ${SDK_HOME}/src/generated\
&&git commit -m "new changes coming from api spec"\
&&git push --set-upstream origin ${branch_name}



