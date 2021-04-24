import { Resolver, Query, Float, Field, ObjectType, Int, Args } from '@nestjs/graphql'
import { TransportService } from '../../transport.service'
import { TransportInput } from './emissions.input'

@ObjectType()
class TransportEmissionsResponse {
  @Field(() => Float)
  totalAmount: number
}

@Resolver()
export class TransportEmissionsResolver {
  constructor(private TransportService: TransportService) {}

  @Query(() => TransportEmissionsResponse)
  calculateTransportEmissions(@Args('input') input: TransportInput): TransportEmissionsResponse {
    const totalAmount = this.TransportService.calculateEmissions(input)

    return { totalAmount }
  }
}
