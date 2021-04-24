import { Field, Float, InputType, registerEnumType } from '@nestjs/graphql'

export enum WasteUnit {
  Kg,
}
registerEnumType(WasteUnit, { name: 'WasteUnit' })

@InputType()
export class HousingWasteInput {
  @Field(() => Float)
  amount: number

  @Field(() => WasteUnit)
  unit: WasteUnit
}
