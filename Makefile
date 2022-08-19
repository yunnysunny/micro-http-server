PATH  := node_modules/.bin:$(PATH)

check:
	@echo "benchmark for $(FRAMEWORK)"

run-no-dep:check
	nohup node benchmark/frameworks/$(FRAMEWORK).js  > nohup.log &

run-with-dep:check
	cd benchmark/frameworks/$(FRAMEWORK) \
	&& yarn install \
	&& yarn start:back 
run-with-golang:check
	cd benchmark/frameworks/$(FRAMEWORK) \
	&& go build \
	&& nohup ./$(FRAMEWORK)-test > nohup.log &

.PHONY: check run-no-dep run-with-dep run-with-golang
