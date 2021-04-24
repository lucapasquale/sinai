import { Field, Float, InputType } from '@nestjs/graphql'
import { ConsumptionUnit } from '~units/enums/consumption-unit.enum'
import { DistanceUnit } from '~units/enums/distance-unit.enum'

@InputType('TransportEmissionsCarDistanceInput')
class CarDistanceInput {
  @Field(() => Float, { defaultValue: 0 })
  amount: number

  @Field(() => DistanceUnit)
  unit: DistanceUnit
}

@InputType('TransportEmissionsCarConsumptionInput')
class CarConsumptionInput {
  @Field(() => Float, { defaultValue: 0 })
  amount: number

  @Field(() => ConsumptionUnit)
  unit: ConsumptionUnit
}

@InputType('TransportEmissionsCarInput')
class CarInput {
  @Field(() => CarDistanceInput)
  distance: CarDistanceInput

  @Field(() => CarConsumptionInput)
  consumption: CarConsumptionInput
}

@InputType('TransportEmissionsInput')
export class TransportInput {
  @Field(() => CarInput, { nullable: true })
  car?: CarInput
}
