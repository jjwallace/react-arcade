# React Arcade
A ReactJS / PhaserJS arcade featuring NodeJS, SocketIO, Express, Webpack, RESTAPI

Play on a computer monitor and use your phones as controllers.

## Getting started
1. Run `npm install`.
2. Create a `.env` file that specifies a port. (ie `PORT=8000`)
3. Run `npm start`.
4. Navigate to `localhost:8000`

## npm scripts
Here is a breakdown of the included npm scripts
* `start` - runs `nodemon` and `watch-server` in paralell.
* `nodemon` - starts nodemon to inspect server and restart server when a new build is created.
* `watch-server` - builds Node backend with Webpack and watches the `server` directory for changes to rebuild backend.
* `build-prod` - creates a production build of client and server.
* `build-dev` - creates a development build of the server which builds the client with WebpackDevMiddleware.

## Boilerplated from:
https://github.com/WillBeesOn/react-node-webpack-boilerplate

## Phaser 3.0 code examples from:
https://phaser.io/examples