import { CreateSssInput } from './create-sss.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSssInput extends PartialType(CreateSssInput) {
  @Field(() => Int)
  id: number;
}
