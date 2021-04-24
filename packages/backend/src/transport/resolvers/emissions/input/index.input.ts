import { Field, InputType } from '@nestjs/graphql'
import { CarInput } from './car.input'

@InputType('TransportEmissionsInput')
export class TransportInput {
  @Field(() => CarInput, { nullable: true })
  car: CarInput
}
