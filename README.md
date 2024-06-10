# Batch jobs list

##### Hi! 

### Installation

In order to run server please run 

```sh
$ cd server
$ npm install 
$ node server.js
```

In order to run client please run 

```sh
$ cd client
$ npm install 
$ npm start
```
In order to run unit tests please run 

```sh
$ cd client
$ npm test 
```

In order to run e2e tests please run (only when server and client are running)
NOTE: there was a problem with puppeteer version and i could'nt run my tests with new versions, anly deprecated version 18.1.0 worked for me.

```sh
$ cd client
$ npm run test:e2e  
```
