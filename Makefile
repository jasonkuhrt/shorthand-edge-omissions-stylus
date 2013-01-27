


test:
	@./node_modules/.bin/mocha \
		--require should \
		--ignore-leaks \
		--reporter spec \
		test-runner.js



.PHONY: test
