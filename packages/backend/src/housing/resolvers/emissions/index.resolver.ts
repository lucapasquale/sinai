import { Resolver, Query, Float, Field, ObjectType, Int, Args } from '@nestjs/graphql'
import { HousingService } from '../../housing.service'
import { HousingInput } from './emissions.input'

@ObjectType()
class HousingEmissionsResponse {
  @Field(() => Float)
  amountPerPerson: number

  @Field(() => Float)
  totalAmount: number
}

@Resolver()
export class HousingEmissionsResolver {
  constructor(private housingService: HousingService) {}

  @Query(() => HousingEmissionsResponse)
  calculateHousingEmissions(@Args('input') input: HousingInput): HousingEmissionsResponse {
    if (input.residentsCount <= 0) {
      throw new Error('invalid number of residentsCount')
    }

    const totalAmount = this.housingService.calculateEmissions(input)

    return {
      totalAmount,
      amountPerPerson: totalAmount / input.residentsCount,
    }
  }
}
