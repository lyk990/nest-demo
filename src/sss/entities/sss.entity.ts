import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Sss {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
