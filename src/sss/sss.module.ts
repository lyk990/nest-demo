import { Module } from '@nestjs/common';
import { SssService } from './sss.service';
import { SssController } from './sss.controller';

@Module({
  controllers: [SssController],
  providers: [SssService]
})
export class SssModule {}
