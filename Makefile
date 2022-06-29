PATH  := node_modules/.bin:$(PATH)

check:
	@echo "$(FRAMEWORK)"

run-no-dep:
	nohup node benchmark/frameworks/$(FRAMEWORK).js  > nohup.log &

run-with-dep: 
	cd benchmark/frameworks/$(FRAMEWORK) \
	&& yarn install \
	&& yarn start:back 

.PHONY: check run-no-dep run-with-dep
