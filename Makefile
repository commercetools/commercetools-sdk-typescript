SHELL := /bin/bash
CHANGES_PENDING := `git status --porcelain -- ':(exclude)*gen.properties' | grep -c ^ || true`
API_RAML ?= $(RAML_FILE)
IMPORT_RAML ?= $(RAML_FILE)
HISTORY_RAML ?= $(RAML_FILE)
CHECKOUT_RAML ?= $(RAML_FILE)

.PHONY: build build_api_sdk build_import_sdk build_import_sdk build_history_sdk build_checkout_sdk gen_api_sdk gen_import_sdk gen_history_sdk gen_checkout_sdk gen_graphql_builder

build: codegen_install gen_api_sdk gen_import_sdk gen_history_sdk gen_checkout_sdk gen_graphql_builder post_process prettify verify
build_api_sdk: codegen_install gen_api_sdk post_process prettify verify
build_import_sdk: codegen_install gen_import_sdk post_process prettify verify
build_history_sdk: codegen_install gen_history_sdk post_process prettify verify
build_checkout_sdk: codegen_install gen_checkout_sdk post_process prettify verify

gen_api_sdk: generate_api
gen_import_sdk: generate_import
gen_history_sdk: generate_history
gen_checkout_sdk: generate_checkout

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

generate_history:
	$(MAKE) -C packages LIB_NAME="history" GEN_RAML_FILE=../$(HISTORY_RAML) generate_sdk

generate_checkout:
	$(MAKE) -C packages LIB_NAME="checkout" GEN_RAML_FILE=../$(CHECKOUT_RAML) generate_sdk

# Regenerates the typed GraphQL query builder from the committed GraphQL schema.
#
# Part of `build` so that the generated client always matches schema.graphqls: the SDK
# generator workflow in commercetools-api-reference copies api-specs/graphql/schema.sdl
# over schema.graphqls and then runs `make build`, the same way it does for the Java and
# .NET SDKs. Those two generate their client at compile time (DGS codegen, ZeroQL), while
# here the generated client is committed, so it has to be refreshed by this chain.
gen_graphql_builder: yarn_install
	yarn workspace @commercetools/graphql-sdk generate

check_pending:
	git status --porcelain -- ':(exclude)*gen.properties'
	@echo "CHANGES_PENDING=$(CHANGES_PENDING)" >> $GITHUB_ENV


