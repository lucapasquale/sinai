import * as R from 'ramda'
import { Injectable } from '@nestjs/common'

import { UnitsService } from '~units/units.service'
import { WeightUnit } from '~units/enums/weight-unit.enum'

import { HousingInput } from './resolvers/emissions/emissions.input'

@Injectable()
export class HousingService {
  constructor(private unitsService: UnitsService) {}

  calculateEmissions(input: Omit<HousingInput, 'residentsCount'>) {
    const amounts = [
      this.electricityEmissions(input.electricity),
      this.fuelOilEmissions(input.fuelOil),
      this.lpgEmissions(input.lpg),
      this.naturalGasEmisions(input.naturalGas),
    ]

    return R.sum(amounts)
  }

  private electricityEmissions(electricity: HousingInput['electricity']) {
    if (!electricity) {
      return 0
    }

    const energyInKWh = this.unitsService.energyToKWh(electricity.amount, electricity.unit)

    const LB_CO2_PER_KWH = 0.9472
    const KgCO2PerKWh = this.unitsService.weightToKg(LB_CO2_PER_KWH, WeightUnit.Lb)

    return energyInKWh * KgCO2PerKWh
  }

  private fuelOilEmissions(fuelOil: HousingInput['fuelOil']) {
    if (!fuelOil) {
      return 0
    }

    const fuelInGallons = this.unitsService.volumeToGallons(fuelOil.amount, fuelOil.unit)

    const MM_BTU_PER_FUEL_GALLON = 0.139
    const KG_CO2_PER_FUEL_MM_BTU = 73.25

    return fuelInGallons * MM_BTU_PER_FUEL_GALLON * KG_CO2_PER_FUEL_MM_BTU
  }

  private lpgEmissions(lpg: HousingInput['lpg']) {
    if (!lpg) {
      return 0
    }

    const lpgInGallons = this.unitsService.volumeToGallons(lpg.amount, lpg.unit)

    const MM_BTU_PER_LPG_GALLON = 0.092
    const KG_CO2_PER_LPG_MM_BTU = 61.71

    return lpgInGallons * MM_BTU_PER_LPG_GALLON * KG_CO2_PER_LPG_MM_BTU
  }

  private naturalGasEmisions(naturalGas: HousingInput['naturalGas']) {
    if (!naturalGas) {
      return 0
    }

    const energyInMmBTU = this.unitsService.energyToMmBTU(naturalGas.amount, naturalGas.unit)
    const KG_CO2_PER_GAS_MM_BTU = 53.06

    return energyInMmBTU * KG_CO2_PER_GAS_MM_BTU
  }
}
