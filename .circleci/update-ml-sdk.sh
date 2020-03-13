#!/bin/bash
export SDK_HOME="../packages/ml-sdk"
export ML_API_REF="ml-services-api-reference/api.raml"
export branch_name="update_spec_changes_$(date +%s)"

cd $(dirname $0)


rm -rf ${SDK_HOME}/src/generated && rm -rf ml-services-api-reference\
&& git clone git@github.com:commercetools/ml-services-api-reference.git\
&&rmf-codegen generate ${ML_API_REF} -o ${SDK_HOME}/src/generated -t typescript_client\
&&yarn post_process_generate\
&&git checkout -b ${branch_name}\
&&git add ${SDK_HOME}/src/generated\
&&git commit -m "fix: new changes coming from api spec"\
&&git push --set-upstream origin ${branch_name}
