
PRIVKEY ?= ~/.crx-privkey.pem

all: build

node_modules:
	npm install

build: node_modules
	PRIVKEY=$(PRIVKEY) npm run dist

clean:
	npm run clean
	rm -rf node_modules
