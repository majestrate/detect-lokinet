
all: compile

node_modules:
	npm install

compile: node_modules
	npm run dev:pack

clean:
	npm run dev:clean
	rm -rf node_modules
