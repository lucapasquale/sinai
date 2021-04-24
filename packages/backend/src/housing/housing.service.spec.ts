import { Test, TestingModule } from '@nestjs/testing'
import { HousingService } from './housing.service'
import { ElectricityUnit } from './resolvers/emissions/input/electricity.input'
import { FuelOilUnit } from './resolvers/emissions/input/fuel-oil.input'
import { HousingInput } from './resolvers/emissions/input/index.input'
import { LpgUnit } from './resolvers/emissions/input/lpg.input'
import { NaturalGasUnit } from './resolvers/emissions/input/natural-gas.input'
import { WasteUnit } from './resolvers/emissions/input/waste.input'
import { WaterUnit } from './resolvers/emissions/input/water.input'

describe('HousingService - calculateEmissions', () => {
  let service: HousingService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HousingService],
    }).compile()

    service = module.get<HousingService>(HousingService)
  })

  it('should return 0 if empty input or amount in each usage is 0', async () => {
    expect(service.calculateEmissions({})).toBe(0)

    expect(
      service.calculateEmissions({
        electricity: { amount: 0, unit: ElectricityUnit.KWh },
        fuelOil: { amount: 0, unit: FuelOilUnit.Litres },
        lpg: { amount: 0, unit: LpgUnit.Litres },
        naturalGas: { amount: 0, unit: NaturalGasUnit.Therm },
        waste: { amount: 0, unit: WasteUnit.Kg },
        water: { amount: 0, unit: WaterUnit.Litres },
      })
    ).toBe(0)
  })

  it('should calculate electricity emission', async () => {
    const input = { electricity: { amount: 1, unit: ElectricityUnit.KWh } } as HousingInput

    expect(service.calculateEmissions(input)).toBe(0.4296423424)
  })

  it('should calculate fuelOil emission', async () => {
    const input = { fuelOil: { amount: 1, unit: FuelOilUnit.Litres } } as HousingInput

    expect(service.calculateEmissions(input)).toBe(2.689733261)
  })

  it('should calculate lpg emission', async () => {
    const input = { lpg: { amount: 1, unit: LpgUnit.Litres } } as HousingInput

    expect(service.calculateEmissions(input)).toBe(1.49978897904)
  })

  it('should calculate naturalGas emission', async () => {
    const input = { naturalGas: { amount: 1, unit: NaturalGasUnit.Therm } } as HousingInput

    expect(service.calculateEmissions(input)).toBe(5_306)
  })

  it('should calculate waste emission', async () => {
    const input = { waste: { amount: 1, unit: WasteUnit.Kg } } as HousingInput

    expect(service.calculateEmissions(input)).toBe(1)
  })

  it('should calculate water emission', async () => {
    const input = { water: { amount: 1, unit: WaterUnit.Litres } } as HousingInput

    expect(service.calculateEmissions(input)).toBe(1)
  })
})
