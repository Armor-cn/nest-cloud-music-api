"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const util = require("util");
const logger_middleware_1 = require("./middleware/logger.middleware");
const BodyParser = require("body-parser");
const console_log = console.log;
console.log = (...objs) => {
    for (const obj of objs) {
        console_log(`[${new Date().toLocaleString()}] - `, obj);
    }
};
console.debug = (...objs) => {
    for (const obj of objs) {
        console.log(util.inspect(obj, true, 8, true));
    }
};
const port = Number(3088);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('网易云Api')
        .setDescription('Nest 版网易云Api接口')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('/api-doc', app, document);
    app.use(BodyParser.urlencoded({ limit: '10mb', extended: false }));
    app.use(BodyParser.json({ limit: '10mb' }));
    app.use(logger_middleware_1.LoggerMiddleware);
    await app.listen(port, () => {
        console.log(`Listening  at http://localhost:${port}/`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map