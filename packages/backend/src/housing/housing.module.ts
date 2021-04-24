import { Module } from '@nestjs/common'

import { HousingService } from './housing.service'
import { HousingEmissionsResolver } from './resolvers/emissions/index.resolver'

@Module({
  imports: [],
  providers: [HousingService, HousingEmissionsResolver],
})
export class HousingModule {}
