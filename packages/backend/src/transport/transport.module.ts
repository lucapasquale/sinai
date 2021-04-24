import { Module } from '@nestjs/common'

import { TransportService } from './transport.service'
import { TransportEmissionsResolver } from './resolvers/emissions/emissions.resolver'

@Module({
  imports: [],
  providers: [TransportService, TransportEmissionsResolver],
})
export class TransportModule {}
