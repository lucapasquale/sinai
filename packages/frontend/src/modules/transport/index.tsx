import React, { FC } from 'react'
import {
  ConsumptionUnit,
  DistanceUnit,
  useCalculateTransportEmissionsQuery,
} from '../../common/apollo/generated'
// import { useCalculateTransportEmissions } from './graphql/use-calculate-transport-emissions'

export const Transport: FC = () => {
  console.log('1')
  const { data, loading, error } = useCalculateTransportEmissionsQuery({
    variables: {
      input: {
        car: {
          distance: { amount: 100, unit: DistanceUnit.Km },
          consumption: { amount: 8, unit: ConsumptionUnit.Lper100Km },
        },
      },
    },
  })

  if (error) {
    return <h1>error: {error.message}</h1>
  }

  if (loading) {
    return <h1>Loading</h1>
  }

  return (
    <h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </h1>
  )
}
