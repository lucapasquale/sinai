import { registerEnumType } from '@nestjs/graphql'

export enum DistanceUnit {
  Km,
  Miles,
}

registerEnumType(DistanceUnit, { name: 'DistanceUnit' })
