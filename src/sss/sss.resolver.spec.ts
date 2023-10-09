import { Test, TestingModule } from '@nestjs/testing';
import { SssResolver } from './sss.resolver';
import { SssService } from './sss.service';

describe('SssResolver', () => {
  let resolver: SssResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SssResolver, SssService],
    }).compile();

    resolver = module.get<SssResolver>(SssResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
