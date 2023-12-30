import { Controller, Get } from '@nestjs/common';
import { IocService } from './ioc.service';

@Controller()
export class IocController {
  constructor(private readonly appService: IocService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
