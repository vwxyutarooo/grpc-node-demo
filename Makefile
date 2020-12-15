OUTPUT=gen
NPM_BIN=$(shell npm bin)

GRPC_TOOL=$(NPM_BIN)/grpc_tools_node_protoc
PROTOC=node_modules/grpc-tools/bin/protoc
NODE_PLUGIN=protoc-gen-grpc=$(NPM_BIN)/grpc_tools_node_protoc_plugin
TYPESCRIPT_PLUGIN=protoc-gen-ts=$(NPM_BIN)/protoc-gen-ts

COMMAND=$(GRPC_TOOL) --js_out=import_style=commonjs,binary:$(OUTPUT) --plugin=$(NODE_PLUGIN) --grpc_out=$(OUTPUT) -I ./src ./src/proto/*.proto
PROTOC_COMMAND=$(PROTOC) --plugin=${TYPESCRIPT_PLUGIN} --ts_out=$(OUTPUT) -I ./src ./src/proto/*.proto

.PHONY: protogen
protogen:
	rm -rf $(OUTPUT) && mkdir -p $(OUTPUT)
	# generate js codes via grpc-tools 
	$(COMMAND)
	# generate d.ts codes via protoc
	$(PROTOC_COMMAND)
