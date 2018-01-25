const swaggerJSDoc = require('swagger-jsdoc');
const swaggerOptions = {
    swaggerDefinition: {

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