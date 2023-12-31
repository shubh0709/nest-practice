import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reports } from './reports.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Reports])],
  controllers: [ReportsController],
})
export class ReportsModule {}
