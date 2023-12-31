import { Module } from '@nestjs/common';
import { CarApiController } from './car-api.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { ReportsModule } from 'src/reports/reports.module';
import { Users } from 'src/users/users.entity';
import { Reports } from 'src/reports/reports.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'my-db.sqlite',
      entities: [Users, Reports],
      synchronize: true,
    }),
    CarApiModule,
    UsersModule,
    ReportsModule,
  ],
  controllers: [CarApiController],
})
export class CarApiModule {}
