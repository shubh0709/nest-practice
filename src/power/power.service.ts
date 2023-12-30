import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  getPower(watts: number) {
    console.log(`supplying ${watts} of power `);
  }
}
