"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.connectMicroservice({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: ['amqp://localhost:5672'],
            queue: 'cats_queue',
            queueOptions: {
                durable: false
            },
        },
    });
    await app.startAllMicroservices();
    await app.listen(4001);
}
bootstrap();
//# sourceMappingURL=main.js.map