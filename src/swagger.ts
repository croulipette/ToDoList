const swaggerJSDoc = require('swagger-jsdoc');
//const appliVersion = require('../package.json').version;
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Mes API',
            version: '0.0.0',
            description: 'Test d\'utilisattion de swagger'
        }
    },
    // path to the API docs
    apis: ['./doc/*.yml']
};

export default class Swagger {

    private swaggerSpec: any;
    public constructor() {
        this.swaggerSpec = swaggerJSDoc(swaggerOptions);
    }

    public getSpec() {
        return this.swaggerSpec;
    }


}