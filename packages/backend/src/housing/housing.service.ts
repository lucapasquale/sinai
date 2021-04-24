import * as R from 'ramda'
import { Injectable } from '@nestjs/common'

import { HousingInput } from './resolvers/emissions/input/index.input'
import { NaturalGasUnit } from './resolvers/emissions/input/natural-gas.input'
import { ElectricityUnit } from './resolvers/emissions/input/electricity.input'
import { FuelOilUnit } from './resolvers/emissions/input/fuel-oil.input'
import { LpgUnit } from './resolvers/emissions/input/lpg.input'
import { WasteUnit } from './resolvers/emissions/input/waste.input'
import { WaterUnit } from './resolvers/emissions/input/water.input'

@Injectable()
export class HousingService {
  calculateEmissions(input: Omit<HousingInput, 'residentsCount'>) {
    const amounts = [
      this.electricityEmissions(input.electricity),
      this.fuelOilEmissions(input.fuelOil),
      this.lpgEmissions(input.lpg),
      this.naturalGasEmisions(input.naturalGas),
      this.wasteEmissions(input.waste),
      this.waterEmissions(input.water),
    ]

    return R.sum(amounts)
  }

  private electricityEmissions(electricity: HousingInput['electricity']) {
    if (!electricity) {
      return 0
    }

    switch (electricity.unit) {
      case ElectricityUnit.KWh:
        const KWH_TO_MWH = 0.001
        const LB_CO2_PER_MWH = 947.2
        const LB_TO_KG = 0.453592

        return electricity.amount * KWH_TO_MWH * LB_CO2_PER_MWH * LB_TO_KG

      default:
        throw new Error('invalid unit received')
    }
  }

  private fuelOilEmissions(fuelOil: HousingInput['fuelOil']) {
    if (!fuelOil) {
      return 0
    }

    switch (fuelOil.unit) {
      case FuelOilUnit.Litres:
        const LITERS_TO_GALONS = 0.264172
        const MM_BTU_PER_GALLON = 0.139
        const KG_CO2_PER_MM_BTU = 73.25

        return fuelOil.amount * LITERS_TO_GALONS * MM_BTU_PER_GALLON * KG_CO2_PER_MM_BTU

      default:
        throw new Error('invalid unit received')
    }
  }

  private lpgEmissions(lpg: HousingInput['lpg']) {
    if (!lpg) {
      return 0
    }

    switch (lpg.unit) {
      case LpgUnit.Litres:
        const LITERS_TO_GALONS = 0.264172
        const MM_BTU_PER_GALLON = 0.092
        const KG_CO2_PER_MM_BTU = 61.71

        return lpg.amount * LITERS_TO_GALONS * MM_BTU_PER_GALLON * KG_CO2_PER_MM_BTU

      default:
        throw new Error('invalid unit received')
    }
  }

  private naturalGasEmisions(naturalGas: HousingInput['naturalGas']) {
    if (!naturalGas) {
      return 0
    }

    switch (naturalGas.unit) {
      case NaturalGasUnit.Therm:
        const THERM_TO_MM_BTU = 100
        const KG_CO2_PER_MM_BTU = 53.06

        return naturalGas.amount * THERM_TO_MM_BTU * KG_CO2_PER_MM_BTU

      default:
        throw new Error('invalid unit received')
    }
  }

  // TODO: get waste CO2 emissions
  private wasteEmissions(waste: HousingInput['waste']) {
    if (!waste) {
      return 0
    }

    switch (waste.unit) {
      case WasteUnit.Kg:
        const CO2_KG_PER_KG = 1

        return waste.amount * CO2_KG_PER_KG

      default:
        throw new Error('invalid unit received')
    }
  }

  // TODO: get water CO2 emissions
  private waterEmissions(water: HousingInput['water']) {
    if (!water) {
      return 0
    }

    switch (water.unit) {
      case WaterUnit.Litres:
        const CO2_KG_PER_LITRES = 1

        return water.amount * CO2_KG_PER_LITRES

      default:
        throw new Error('invalid unit received')
    }
  }
}
