import { Field, Float, InputType, registerEnumType } from '@nestjs/graphql'

export enum NaturalGasUnit {
  Therm,
}
registerEnumType(NaturalGasUnit, { name: 'NaturalGasUnit' })

@InputType()
export class HousingNaturalGasInput {
  @Field(() => Float)
  amount: number

  @Field(() => NaturalGasUnit)
  unit: NaturalGasUnit
}
