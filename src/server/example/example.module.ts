import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExampleController } from './example.controller';
import { ExampleProcessor } from './example.processor';
import { Example, ChatSchema } from './schemas/example.schema';
import { BullModule } from '@nestjs/bull';
import {ExampleService} from './example.service'
@Module({
  imports: [
    BullModule.registerQueue({
      name: 'chats',
      redis: {
        host: 'm2.moono.vip',
        port: 6379,
      },
    }),
    MongooseModule.forFeature([{ name: Example.name, schema: ChatSchema }])
  ],
  controllers: [ExampleController],
  providers: [ExampleProcessor,ExampleService],
})
export class ExampleModule {}