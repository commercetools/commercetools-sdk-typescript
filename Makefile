SHELL := /bin/bash
CHANGES_PENDING := `git status --porcelain -- ':(exclude)*gen.properties' | grep -c ^ || true`
API_RAML ?= $(RAML_FILE)
IMPORT_RAML ?= $(RAML_FILE)
ML_RAML ?= $(RAML_FILE)
HISTORY_RAML ?= $(RAML_FILE)

.PHONY: build build_api_sdk build_import_sdk build_import_sdk build_history_sdk gen_api_sdk gen_import_sdk gen_ml_sdk gen_history_sdk

build: codegen_install gen_api_sdk gen_import_sdk gen_history_sdk post_process prettify verify
build_api_sdk: codegen_install gen_api_sdk post_process prettify verify
build_import_sdk: codegen_install gen_import_sdk post_process  prettify verify
build_ml_sdk: codegen_install gen_ml_sdk post_process  prettify verify
build_history_sdk: codegen_install gen_history_sdk post_process  prettify verify

gen_api_sdk: generate_api
gen_import_sdk: generate_import
gen_ml_sdk: generate_ml
gen_history_sdk: generate_history

yarn_install:
	yarn install

verify: yarn_install
	yarn run build

prettify: yarn_install
	yarn run format

post_process: yarn_install
	yarn workspaces run post_process_generate

codegen_install:
	curl -o- -s https://raw.githubusercontent.com/vrapio/rmf-codegen/master/scripts/install.sh | bash

generate_api:
	$(MAKE) -C packages LIB_NAME="platform" GEN_RAML_FILE=../$(API_RAML) generate_sdk

generate_import:
	$(MAKE) -C packages LIB_NAME="importapi" GEN_RAML_FILE=../$(IMPORT_RAML) generate_sdk

generate_ml:
	$(MAKE) -C packages LIB_NAME="ml" GEN_RAML_FILE=../$(ML_RAML) generate_sdk

generate_history:
	$(MAKE) -C packages LIB_NAME="history" GEN_RAML_FILE=../$(HISTORY_RAML) generate_sdk

check_pending:
	git status --porcelain -- ':(exclude)*gen.properties'
	@echo "CHANGES_PENDING=$(CHANGES_PENDING)" >> $GITHUB_ENV


