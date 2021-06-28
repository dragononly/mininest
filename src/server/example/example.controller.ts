import { Body, Controller,Post} from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { CreateCatDto } from './dto/example.dto';
import { Queue } from 'bull';
import {ExampleService} from './example.service'
@Controller('example')
export class ExampleController {
  constructor( @InjectQueue('example') private  audioQueue: Queue, private  catsService: ExampleService) {}
  @Post("send")
  async send(@Body() val:CreateCatDto) {
    this.audioQueue.add('send', val,{removeOnComplete:true});
    return  "发送成功"
  }
 
 
}

