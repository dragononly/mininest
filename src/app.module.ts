import { Module, NestModule, MiddlewareConsumer ,RequestMethod,CacheModule,CacheInterceptor} from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';



@Module({
  imports: [
    //引入自己的组件
    ConfigModule.forRoot({isGlobal: true}),
  
    
    //采用高速缓存
    CacheModule.register({ttl: 5,max: 10}),
      
    //全局注册bull消息队列连接redis数据库  
    // BullModule.forRoot({
    //     redis: {host: process.env.HOST,port: Number(process.env.RedisPort)},
    // }),
    
  ],
  controllers: [],
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass: CacheInterceptor,
  },],
})

export class AppModule implements NestModule {
  //允许日志中间件和允许跨域
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
  
}