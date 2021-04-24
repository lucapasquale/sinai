import { Field, Float, InputType, registerEnumType } from '@nestjs/graphql'

export enum LpgUnit {
  Litres,
}
registerEnumType(LpgUnit, { name: 'LpgUnit' })

@InputType()
export class HousingLpgInput {
  @Field(() => Float)
  usage: number

  @Field(() => LpgUnit)
  unit: LpgUnit
}
