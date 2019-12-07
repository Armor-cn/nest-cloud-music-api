import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as util from 'util';
import { LoggerMiddleware } from './middleware/logger.middleware';
import * as BodyParser from 'body-parser';
// 原生方法注入
const console_log = console.log;
console.log = (...objs: any[]): void => {
  for (const obj of objs) {
    // Logger.log(JSON.stringify(obj));
    console_log(`[${new Date().toLocaleString()}] - `, obj);
  }
};
console.debug = (...objs: any[]): void => {
  for (const obj of objs) {
    console.log(util.inspect(obj, true, 8, true));
  }
};
const port = Number(process.env.PORT || 3088);
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('网易云Api')
    .setDescription('Nest 版网易云Api接口')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api-doc', app, document);
  // const globalPrefix = 'api';
  // app.setGlobalPrefix(globalPrefix);
  app.use(BodyParser.urlencoded({ limit: '10mb', extended: false }));
  app.use(BodyParser.json({ limit: '10mb' }));
  app.use(LoggerMiddleware);
  await app.listen(port, () => {
    console.log(`Listening  at http://localhost:${port}`);
  });
}
bootstrap();
