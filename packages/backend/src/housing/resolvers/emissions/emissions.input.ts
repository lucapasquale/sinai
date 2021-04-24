import { Field, Float, InputType, Int } from '@nestjs/graphql'

import { EnergyUnit } from '~units/enums/energy-unit.enum'
import { VolumeUnit } from '~units/enums/volume-unit.enum'

@InputType()
class HousingElectricityInput {
  @Field(() => Float)
  amount: number

  @Field(() => EnergyUnit)
  unit: EnergyUnit
}

@InputType()
class HousingFuelOilInput {
  @Field(() => Float)
  amount: number

  @Field(() => VolumeUnit)
  unit: VolumeUnit
}

@InputType()
class HousingLpgInput {
  @Field(() => Float)
  amount: number

  @Field(() => VolumeUnit)
  unit: VolumeUnit
}

@InputType()
class HousingNaturalGasInput {
  @Field(() => Float)
  amount: number

  @Field(() => EnergyUnit)
  unit: EnergyUnit
}

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
}
