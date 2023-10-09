import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SssService } from './sss.service';
import { Sss } from './entities/sss.entity';
import { CreateSssInput } from './dto/create-sss.input';
import { UpdateSssInput } from './dto/update-sss.input';

@Resolver(() => Sss)
export class SssResolver {
  constructor(private readonly sssService: SssService) {}

  @Mutation(() => Sss)
  createSss(@Args('createSssInput') createSssInput: CreateSssInput) {
    return this.sssService.create(createSssInput);
  }

  @Query(() => [Sss], { name: 'sss' })
  findAll() {
    return this.sssService.findAll();
  }

  @Query(() => Sss, { name: 'sss' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.sssService.findOne(id);
  }

  @Mutation(() => Sss)
  updateSss(@Args('updateSssInput') updateSssInput: UpdateSssInput) {
    return this.sssService.update(updateSssInput.id, updateSssInput);
  }

  @Mutation(() => Sss)
  removeSss(@Args('id', { type: () => Int }) id: number) {
    return this.sssService.remove(id);
  }
}
