import { registerEnumType } from '@nestjs/graphql'

export enum VolumeUnit {
  Litres,
  Gallons,
}

registerEnumType(VolumeUnit, { name: 'VolumeUnit' })
