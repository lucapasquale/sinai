import { Field, Float, InputType, registerEnumType } from '@nestjs/graphql'

export enum ElectricityUnit {
  KWh,
}
registerEnumType(ElectricityUnit, { name: 'ElectricityUnit' })

@InputType()
export class HousingElectricityInput {
  @Field(() => Float)
  usage: number

  @Field(() => ElectricityUnit)
  unit: ElectricityUnit
}
