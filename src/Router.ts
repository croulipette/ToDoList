export default class Router {

    private app: any;
    constructor(readonly expressApp: any) {
        this.app = expressApp;

    }
    initRoute() {
        this.app.get('/', (req: any, res: any) => { res.send('hello world') })
    }
}