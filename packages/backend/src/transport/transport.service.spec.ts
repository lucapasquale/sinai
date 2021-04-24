import { Test, TestingModule } from '@nestjs/testing'

import { ConsumptionUnit } from '~units/enums/consumption-unit.enum'
import { DistanceUnit } from '~units/enums/distance-unit.enum'
import { UnitsService } from '~units/units.service'

import { TransportService } from './transport.service'
import { TransportInput } from './resolvers/emissions/emissions.input'

describe('TransportService - calculateEmissions', () => {
  let service: TransportService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnitsService, TransportService],
    }).compile()

    service = module.get<TransportService>(TransportService)
  })

  it('should return 0 if empty input or amount in each usage is 0', async () => {
    expect(service.calculateEmissions({})).toBe(0)

    expect(
      service.calculateEmissions({
        car: {
          distance: { amount: 0, unit: DistanceUnit.Km },
          consumption: { amount: 0, unit: ConsumptionUnit.Lper100Km },
        },
      })
    ).toBe(0)
  })

  it('should calculate car emission', async () => {
    const kmInput = {
      car: {
        distance: { amount: 100, unit: DistanceUnit.Km },
        consumption: { amount: 10, unit: ConsumptionUnit.Lper100Km },
      },
    } as TransportInput

    const milesInput = {
      car: {
        distance: { amount: 50, unit: DistanceUnit.Miles },
        consumption: { amount: 25, unit: ConsumptionUnit.MPG },
      },
    } as TransportInput

    expect(service.calculateEmissions(kmInput)).toBe(23.2)
    expect(service.calculateEmissions(milesInput)).toBe(67_816.16158312796)
  })
})
