import { Field, Float, InputType, registerEnumType } from '@nestjs/graphql'

export enum DistanceUnit {
  Km,
  Miles,
}
registerEnumType(DistanceUnit, { name: 'DistanceUnit' })

@InputType('TransportEmissionsCarDistanceInput')
class CarDistanceInput {
  @Field(() => Float, { defaultValue: 0 })
  amount: number

  @Field(() => DistanceUnit)
  unit: DistanceUnit
}

export enum CarConsumptionUnit {
  Mpg,
  Lper100Km,
}
registerEnumType(CarConsumptionUnit, { name: 'CarConsumptionUnit' })

@InputType('TransportEmissionsCarConsumptionInput')
class CarConsumptionInput {
  @Field(() => Float, { defaultValue: 0 })
  amount: number

  @Field(() => CarConsumptionUnit)
  unit: CarConsumptionUnit
}

@InputType('TransportEmissionsCarInput')
export class CarInput {
  @Field(() => CarDistanceInput)
  distance: CarDistanceInput

  @Field(() => CarConsumptionInput)
  consumption: CarConsumptionInput
}
