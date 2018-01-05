/// <reference path="_all.d.ts" />

import RouterConfigurator from './src/Router';
import * as express from 'express';
import * as http from 'http';

class Server {

    public app: express.Application;
    public server: http.Server;


    constructor() {
        this.app = express();
        this.configAppSettings();
        this.createServer();
        this.initRoutes();

        this.app.use(express.static('public'));
    }
    public static start(): Server {
        return new Server();
    }

    private configAppSettings() {
        this.app.set('port', process.env.port || 3001);
    }
    private createServer(): void {
        this.server = http.createServer(this.app);
        this.server.listen(this.app.get('port'));
        //On force le contexte sur le listener
        this.server.on('listening', this.onListening.bind(this));
    }

    private initRoutes() {
        RouterConfigurator.build(this.app);
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
