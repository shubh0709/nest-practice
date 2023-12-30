import { Module } from '@nestjs/common';
import { DiController } from './di.controller';
import { DiService } from './di.service';

@Module({
  imports: [],
  controllers: [DiController],
  providers: [DiService],
})
export class DiModule {}
