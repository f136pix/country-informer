# Running locally
# Ensure you are using a modern node version

.PHONY: run-api run-web

run-api:
	cd api && yarn install && yarn start
	
run-web:
	cd web && yarn install && yarn build && yarn start
