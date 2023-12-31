import { NestFactory } from '@nestjs/core';
import { CarApiModule } from './car-api/car-api.module';
import { ValidationPipe } from '@nestjs/common';

console.log('executed main');

async function bootstrap() {
  const app = await NestFactory.create(CarApiModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(3000);
}

bootstrap();
