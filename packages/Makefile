SHELL := /bin/bash
PACKAGE_DIR ?= $(LIB_NAME)

generate_sdk: generate_sdk_main generate_sdk_test

generate_sdk_main:
	rmf-codegen generate -o "$(LIB_NAME)-sdk/src/generated" -t TYPESCRIPT_CLIENT $(GEN_RAML_FILE)

generate_sdk_test:
	rmf-codegen generate -o "$(LIB_NAME)-sdk/test/generated" -t TYPESCRIPT_TEST $(GEN_RAML_FILE)
