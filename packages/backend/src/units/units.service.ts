import { Injectable } from '@nestjs/common'

import { ConsumptionUnit } from './enums/consumption-unit.enum'
import { DistanceUnit } from './enums/distance-unit.enum'
import { EnergyUnit } from './enums/energy-unit.enum'
import { VolumeUnit } from './enums/volume-unit.enum'
import { WeightUnit } from './enums/weight-unit.enum'

@Injectable()
export class UnitsService {
  consumptionToLitresPerKm(amount: number, unit: ConsumptionUnit) {
    switch (unit) {
      case ConsumptionUnit.Lper100Km:
        return amount / 100

      case ConsumptionUnit.MPG:
        return (235.214583 * 100) / amount
    }
  }

  distanceToKm(amount: number, unit: DistanceUnit) {
    switch (unit) {
      case DistanceUnit.Km:
        return amount

      case DistanceUnit.Miles:
        return amount * 0.621371
    }
  }

  energyToKWh(amount: number, unit: EnergyUnit) {
    switch (unit) {
      case EnergyUnit.KWh:
        return amount

      case EnergyUnit.BTU:
        return amount * 0.000293071

      case EnergyUnit.Therm:
        return amount * 293.071
    }
  }

  energyToMmBTU(amount: number, unit: EnergyUnit) {
    switch (unit) {
      case EnergyUnit.BTU:
        return amount / 1_000_000

      case EnergyUnit.Therm:
        return amount * 0.1

      case EnergyUnit.KWh:
        return amount * 0.00341
    }
  }

  volumeToGallons(amount: number, unit: VolumeUnit) {
    switch (unit) {
      case VolumeUnit.Gallons:
        return amount

      case VolumeUnit.Litres:
        return amount / 3.78541
    }
  }

  weightToKg(amount: number, unit: WeightUnit) {
    switch (unit) {
      case WeightUnit.Kg:
        return amount

      case WeightUnit.Lb:
        return amount * 0.453592
    }
  }
}
