import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Example, ChatDocument } from './schemas/example.schema';
@Injectable()
export class ExampleService {
  constructor(
    @InjectModel(Example.name) private  catModel: Model<ChatDocument>,
  ) {}

  async test(val): Promise<Example[]> {
    return this.catModel.find({}).exec();
  }
}