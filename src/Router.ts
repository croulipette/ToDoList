import * as express from 'express';
import Swagger from './swagger';
export default class RouterConfigurator {


    private readonly app: express.Application;
    private constructor(expressApp: express.Application) {
        this.app = expressApp;
        this.initGetRoutes();
        this.initPostRoutes();
        this.initDelRoutes();
        this.initSwaggerRoutes();

    }
    private initGetRoutes(): void {
        this.app.get('/', (req: express.Request, res: express.Response) => { res.send('hello world') })
        this.app.get('/qui/:qui', (req: express.Request, res: express.Response) => { res.send(`hello ${req.params.qui}`) })
    }

    private initPostRoutes(): void {
        this.app.post('/task/new', (req: express.Request, res: express.Response) => {
            const item = req.params.label;
            res.send(`item ${item} added`);
        })
        this.app.patch('task/:taskId', (req: express.Request, res: express.Response) => {
            const item = req.params.taskId;
            res.send(`item ${item} modified`);
        })
    }

    private initDelRoutes(): any {
        this.app.delete('/task/:taskId', (req: express.Request, res: express.Response) => {
            const item = req.params.taskId;
            res.send(`item ${item} deleted`);
        })
    }

    private initSwaggerRoutes() {
        const swagger = new Swagger();

        this.app.get('/swagger.json', (req: express.Request, res: express.Response) => {
            res.setHeader('Content-Type', 'application/json');
            res.send(swagger.getSpec());
        });
    }

    static build(expressApp: express.Application) {
        new RouterConfigurator(expressApp).initGetRoutes();
    }
}