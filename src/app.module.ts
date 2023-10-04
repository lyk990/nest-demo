import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaaModule } from './aaa/aaa.module';
import { SssModule } from './sss/sss.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [AaaModule, SssModule, PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
