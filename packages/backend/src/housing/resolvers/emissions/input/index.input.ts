import { Field, InputType, Int } from '@nestjs/graphql'

import { HousingElectricityInput } from './electricity.input'
import { HousingLpgInput } from './lpg.input'
import { HousingWasteInput } from './waste.input'
import { HousingNaturalGasInput } from './natural-gas.input'
import { HousingWaterInput } from './water.input'
import { HousingFuelOilInput } from './fuel-oil.input'

@InputType()
export class HousingInput {
  @Field(() => Int)
  residentsCount: number

  @Field(() => HousingElectricityInput, { nullable: true })
  electricity?: HousingElectricityInput

  @Field(() => HousingNaturalGasInput, { nullable: true })
  naturalGas?: HousingNaturalGasInput

  @Field(() => HousingFuelOilInput, { nullable: true })
  fuelOil?: HousingFuelOilInput

  @Field(() => HousingLpgInput, { nullable: true })
  lpg?: HousingLpgInput

  @Field(() => HousingWasteInput, { nullable: true })
  waste?: HousingWasteInput

  @Field(() => HousingWaterInput, { nullable: true })
  water?: HousingWaterInput
}
