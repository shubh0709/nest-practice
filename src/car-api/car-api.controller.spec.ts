import { Test, TestingModule } from '@nestjs/testing';
import { CarApiController } from './car-api.controller';

describe('CarApiController', () => {
  let controller: CarApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarApiController],
    }).compile();

    controller = module.get<CarApiController>(CarApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
