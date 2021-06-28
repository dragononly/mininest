import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import {ExampleService} from './example.service'
@Processor('example')
export class ExampleProcessor {
  private readonly logger = new Logger(ExampleProcessor.name);
  constructor(private readonly ExampleService: ExampleService) {}
  @Process('send')
    async easy(job: Job) {
      await this.ExampleService.test(job.data)
  }
}