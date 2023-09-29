import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaaModule } from './aaa/aaa.module';
import { SssModule } from './sss/sss.module';

@Module({
  imports: [AaaModule, SssModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
