import { Injectable } from '@nestjs/common'
import { TransportInput } from './resolvers/emissions/input/index.input'
import { CarConsumptionUnit, DistanceUnit } from './resolvers/emissions/input/car.input'

@Injectable()
export class TransportService {
  calculateEmissions(input: TransportInput) {
    return this.calculateCarEmissions(input.car)
  }

  private calculateCarEmissions(car: TransportInput['car']) {
    if (!car) {
      return 0
    }

    const distanceInKm =
      car.distance.unit === DistanceUnit.Km ? car.distance.amount : car.distance.amount * 0.621371

    const consumptionInLper100Km =
      car.consumption.unit === CarConsumptionUnit.Lper100Km
        ? car.consumption.amount
        : 235.214583 / car.consumption.amount

    const KG_CO2_PER_LITRE = 2.32

    return distanceInKm * (consumptionInLper100Km / 100) * KG_CO2_PER_LITRE
  }
}
