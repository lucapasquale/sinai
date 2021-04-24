import { Field, Float, InputType, registerEnumType } from '@nestjs/graphql'

export enum FuelOilUnit {
  Litres,
}
registerEnumType(FuelOilUnit, { name: 'FuelOilUnit' })

@InputType()
export class HousingFuelOilInput {
  @Field(() => Float)
  usage: number

  @Field(() => FuelOilUnit)
  unit: FuelOilUnit
}
