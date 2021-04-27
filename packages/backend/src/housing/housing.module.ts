import { Module } from '@nestjs/common'
import { UnitsModule } from '~units/units.module'

import { HousingService } from './housing.service'
import { HousingEmissionsResolver } from './resolvers/emissions/index.resolver'

@Module({
  imports: [UnitsModule],
  providers: [HousingService, HousingEmissionsResolver],
})
export class HousingModule {}
