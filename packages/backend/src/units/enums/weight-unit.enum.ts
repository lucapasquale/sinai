import { registerEnumType } from '@nestjs/graphql'

export enum WeightUnit {
  Kg,
  Lb,
}

registerEnumType(WeightUnit, { name: 'WeightUnit' })
