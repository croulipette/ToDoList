/// <reference path="_all.d.ts" />

import Router from './src/Router';
import * as express from 'express';
import * as http from 'http';

// //routes = require('./src/routes/index'),
// //HttpStatus = require('http-status-codes'),



// // Init routes
// //routes(app);




const app = express();
// APP Config

app.set('port', process.env.port || 3001);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);
server.listen(app.get('port'));
//server.on('error', onError);
server.on('listening', onListening);


/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log('Server started Listening on ' + bind);
}



// //init route
new Router(app).initRoute();
//app.get('/', function (req: any, res: any) { res.send('hello world'); })

