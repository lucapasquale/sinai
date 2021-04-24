import { registerEnumType } from '@nestjs/graphql'

export enum EnergyUnit {
  KWh,
  Therm,
  BTU,
}

registerEnumType(EnergyUnit, { name: 'EnergyUnit' })
