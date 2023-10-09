import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSssInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
