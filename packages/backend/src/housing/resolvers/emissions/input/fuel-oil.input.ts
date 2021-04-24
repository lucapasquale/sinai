import { Field, Float, InputType, registerEnumType } from '@nestjs/graphql'

export enum FuelOilUnit {
  Litres,
}
registerEnumType(FuelOilUnit, { name: 'FuelOilUnit' })

@InputType()
export class HousingFuelOilInput {
  @Field(() => Float)
  amount: number

  @Field(() => FuelOilUnit)
  unit: FuelOilUnit
}
