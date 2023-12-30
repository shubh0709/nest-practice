import { Injectable } from '@nestjs/common';

@Injectable()
export class DiService {
  getHello(): string {
    return 'Hello World!';
  }
}
