
PRIVKEY ?= ~/.crx-privkey.pem

build:
	PRIVKEY=$(PRIVKEY) npm run dist

clean:
	npm run clean
