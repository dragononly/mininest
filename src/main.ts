import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import { NestExpressApplication } from '@nestjs/platform-express';
// import * as rateLimit from 'express-rate-limit';
// somewhere in your initialization file

async function bootstrap() {
 
    const app = await NestFactory.create<NestExpressApplication>(AppModule,{
    logger: true,
    bodyParser: true,
  });
  // 3.配置静态资源目录
  app.useStaticAssets('public');
  // await app.init();
  app.use(helmet());
  app.enableCors();
  // app.use(
  //   rateLimit({
  //     windowMs: 15 * 60 * 1000, // 15 minutes
  //     max: 100, // limit each IP to 100 requests per windowMs
  //   }),
  // );
  const port="9000"
  console.log("端口是"+port)
  await app.listen(port);
}
bootstrap();
