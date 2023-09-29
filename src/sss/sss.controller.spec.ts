import { Test, TestingModule } from '@nestjs/testing';
import { SssController } from './sss.controller';
import { SssService } from './sss.service';

describe('SssController', () => {
  let controller: SssController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SssController],
      providers: [SssService],
    }).compile();

    controller = module.get<SssController>(SssController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
