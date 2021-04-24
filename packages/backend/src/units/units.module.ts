import { Module } from '@nestjs/common'
import { UnitsService } from './units.service'

@Module({
  imports: [],
  providers: [UnitsService],
  exports: [UnitsService],
})
export class UnitsModule {}
