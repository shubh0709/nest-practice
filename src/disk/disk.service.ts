import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getDisk() {
    console.log('disk exxectuing');
    this.powerService.getPower(8);
  }
}
