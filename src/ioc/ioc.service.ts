import { Injectable } from '@nestjs/common';

@Injectable()
export class IocService {
  getHello(): string {
    return 'Hello World!';
  }
}
