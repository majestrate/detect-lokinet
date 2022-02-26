
PRIVKEY ?= ~/.crx-privkey.pem

all: build

build: clean
	PRIVKEY=$(PRIVKEY) npm run dist

clean:
	npm run clean
