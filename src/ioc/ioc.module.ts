import { Module } from '@nestjs/common';
import { IocController } from './ioc.controller';
import { IocService } from './ioc.service';

@Module({
  imports: [],
  controllers: [IocController],
  providers: [IocService],
})
export class IocModule {}
