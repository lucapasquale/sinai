import { registerEnumType } from '@nestjs/graphql'

export enum ConsumptionUnit {
  MPG,
  Lper100Km,
}

registerEnumType(ConsumptionUnit, { name: 'ConsumptionUnit' })
