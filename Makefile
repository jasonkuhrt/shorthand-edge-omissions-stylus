
tests:
	@./node_modules/.bin/mocha \
		--require should \
		--ignore-leaks \
		test-runner.js


.PHONY: tests