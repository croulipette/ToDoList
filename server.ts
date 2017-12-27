




const express = require('express');
const http = require('http');
//routes = require('./src/routes/index'),
//HttpStatus = require('http-status-codes'),



// Init routes
//routes(app);




const app = express();
app.set('port', 3001);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);
server.listen(3002);
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

