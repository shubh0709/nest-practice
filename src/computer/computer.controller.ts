import { Controller, Get } from '@nestjs/common';
import { DiskService } from '../disk/disk.service';
import { CpuService } from '../cpu/cpu.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private CpuService: CpuService,
    private DiskService: DiskService,
  ) {}

  @Get()
  run() {
    this.CpuService.getCpu();
    this.DiskService.getDisk();
  }
}
