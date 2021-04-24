import { Injectable } from '@nestjs/common'
import { UnitsService } from '~units/units.service'

import { TransportInput } from './resolvers/emissions/emissions.input'

@Injectable()
export class TransportService {
  constructor(private unitsService: UnitsService) {}

  calculateEmissions(input: TransportInput) {
    return this.calculateCarEmissions(input.car)
  }

  private calculateCarEmissions(car: TransportInput['car']) {
    if (!car) {
      return 0
    }

    const distanceInKm = this.unitsService.distanceToKm(car.distance.amount, car.distance.unit)
    const consumptionInLKm = this.unitsService.consumptionToLitresPerKm(
      car.consumption.amount,
      car.consumption.unit
    )

    const KG_CO2_PER_LITRE = 2.32
    return distanceInKm * consumptionInLKm * KG_CO2_PER_LITRE
  }
}
