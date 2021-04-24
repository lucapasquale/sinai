import { Test, TestingModule } from '@nestjs/testing'
import { EnergyUnit } from '../units/enums/energy-unit.enum'
import { VolumeUnit } from '../units/enums/volume-unit.enum'
import { UnitsService } from '../units/units.service'
import { HousingService } from './housing.service'
import { HousingInput } from './resolvers/emissions/emissions.input'

describe('HousingService - calculateEmissions', () => {
  let service: HousingService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnitsService, HousingService],
    }).compile()

    service = module.get<HousingService>(HousingService)
  })

  it('should return 0 if empty input or amount in each usage is 0', async () => {
    expect(service.calculateEmissions({})).toBe(0)

    expect(
      service.calculateEmissions({
        electricity: { amount: 0, unit: EnergyUnit.KWh },
        fuelOil: { amount: 0, unit: VolumeUnit.Gallons },
        lpg: { amount: 0, unit: VolumeUnit.Gallons },
        naturalGas: { amount: 0, unit: EnergyUnit.Therm },
      })
    ).toBe(0)
  })

  it('should calculate electricity emission', async () => {
    const input = { electricity: { amount: 1, unit: EnergyUnit.KWh } } as HousingInput

    expect(service.calculateEmissions(input)).toBe(0.4296423424)
  })

  it('should calculate fuelOil emission', async () => {
    const input = { fuelOil: { amount: 1, unit: VolumeUnit.Litres } } as HousingInput

    expect(service.calculateEmissions(input)).toBe(2.689735061723829)
  })

  it('should calculate lpg emission', async () => {
    const input = { lpg: { amount: 1, unit: VolumeUnit.Litres } } as HousingInput

    expect(service.calculateEmissions(input)).toBe(1.499789983119398)
  })

  it('should calculate naturalGas emission', async () => {
    const input = { naturalGas: { amount: 1, unit: EnergyUnit.BTU } } as HousingInput

    expect(service.calculateEmissions(input)).toBe(0.00005306)
  })
})
