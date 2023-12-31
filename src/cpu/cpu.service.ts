import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  getCpu() {
    console.log('cpu exxectuing');
    this.powerService.getPower(4);
  }
}
