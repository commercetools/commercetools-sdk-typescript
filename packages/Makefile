SHELL := /bin/bash
PACKAGE_DIR ?= $(LIB_NAME)

generate_sdk:
	rmf-codegen generate -o "$(LIB_NAME)-sdk/src/generated" -t TYPESCRIPT_CLIENT $(GEN_RAML_FILE)
