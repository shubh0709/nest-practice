import { Controller, Get } from '@nestjs/common';
import { DiService } from './di.service';

@Controller()
export class DiController {
  constructor(private readonly appService: DiService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
