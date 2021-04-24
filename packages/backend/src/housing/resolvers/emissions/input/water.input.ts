import { Field, Float, InputType, registerEnumType } from '@nestjs/graphql'

export enum WaterUnit {
  Litres,
}
registerEnumType(WaterUnit, { name: 'WaterUnit' })

@InputType()
export class HousingWaterInput {
  @Field(() => Float)
  usage: number

  @Field(() => WaterUnit)
  unit: WaterUnit
}
