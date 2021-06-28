import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChatDocument = Example & Document;

@Schema()
export class Example {
  @Prop()
  sender: string;
  
}

export const ChatSchema = SchemaFactory.createForClass(Example);