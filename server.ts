/// <reference path="_all.d.ts" />

import Router from './src/Router';
import * as express from 'express';
import * as http from 'http';

class Server {

    public app: express.Application;
    public server: http.Server;

    constructor() {
        //create expressjs application
        this.app = express();
        this.configAppSettings();
        this.createServer()
    }
    public static start(): Server {
        return new Server();
    }

    private configAppSettings() {
        this.app.set('port', process.env.port || 3001);
    }
    private createServer(): any {
        this.server = http.createServer(this.app);
        this.server.listen(this.app.get('port'));
        this.server.on('listening', this.onListening);
    }

    /**
     * Event listener for HTTP server "listening" event.
     */
    private onListening() {
        const addr = this.server.address();
        const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
        console.log('Server started Listening on ' + bind);
    }
}




const server = Server.start();
export default server.app;

// //init route
//new Router(app).initRoute();
//app.get('/', function (req: any, res: any) { res.send('hello world'); })


