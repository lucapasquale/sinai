import { Field, Float, InputType, registerEnumType } from '@nestjs/graphql'

export enum NaturalGasUnit {
  Therm,
}
registerEnumType(NaturalGasUnit, { name: 'NaturalGasUnit' })

@InputType()
export class HousingNaturalGasInput {
  @Field(() => Float)
  usage: number

  @Field(() => NaturalGasUnit)
  unit: NaturalGasUnit
}
