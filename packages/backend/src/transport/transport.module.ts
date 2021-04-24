import { Module } from '@nestjs/common'

import { UnitsModule } from '~units/units.module'
import { TransportService } from './transport.service'
import { TransportEmissionsResolver } from './resolvers/emissions/emissions.resolver'

@Module({
  imports: [UnitsModule],
  providers: [TransportService, TransportEmissionsResolver],
})
export class TransportModule {}
