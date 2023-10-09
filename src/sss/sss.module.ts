import { Module } from '@nestjs/common';
import { SssService } from './sss.service';
import { SssResolver } from './sss.resolver';

@Module({
  providers: [SssResolver, SssService]
})
export class SssModule {}
