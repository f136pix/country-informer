## Running Locally

Clone the repo
```bash
$ git clone https://github.com/f136pix/country-informer.git
$ cd country-informer
```

Run using the Makefile
```bash
$ make run-api
$ make run-web
```

If you dont have make, just run it mannually
```bash
cd api && yarn install && yarn start
cd web && yarn install && yarn build && yarn start
```