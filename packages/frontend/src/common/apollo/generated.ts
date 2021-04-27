import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum ConsumptionUnit {
  Lper100Km = 'Lper100Km',
  Mpg = 'MPG'
}

export enum DistanceUnit {
  Km = 'Km',
  Miles = 'Miles'
}

export enum EnergyUnit {
  Btu = 'BTU',
  KWh = 'KWh',
  Therm = 'Therm'
}

export type HousingElectricityInput = {
  amount: Scalars['Float'];
  unit: EnergyUnit;
};

export type HousingEmissionsResponse = {
  __typename?: 'HousingEmissionsResponse';
  amountPerPerson: Scalars['Float'];
  totalAmount: Scalars['Float'];
};

export type HousingFuelOilInput = {
  amount: Scalars['Float'];
  unit: VolumeUnit;
};

export type HousingInput = {
  electricity?: Maybe<HousingElectricityInput>;
  fuelOil?: Maybe<HousingFuelOilInput>;
  lpg?: Maybe<HousingLpgInput>;
  naturalGas?: Maybe<HousingNaturalGasInput>;
  residentsCount: Scalars['Int'];
};

export type HousingLpgInput = {
  amount: Scalars['Float'];
  unit: VolumeUnit;
};

export type HousingNaturalGasInput = {
  amount: Scalars['Float'];
  unit: EnergyUnit;
};

export type Query = {
  __typename?: 'Query';
  calculateHousingEmissions: HousingEmissionsResponse;
  calculateTransportEmissions: TransportEmissionsResponse;
};


export type QueryCalculateHousingEmissionsArgs = {
  input: HousingInput;
};


export type QueryCalculateTransportEmissionsArgs = {
  input: TransportEmissionsInput;
};

export type TransportEmissionsCarConsumptionInput = {
  amount?: Maybe<Scalars['Float']>;
  unit: ConsumptionUnit;
};

export type TransportEmissionsCarDistanceInput = {
  amount?: Maybe<Scalars['Float']>;
  unit: DistanceUnit;
};

export type TransportEmissionsCarInput = {
  consumption: TransportEmissionsCarConsumptionInput;
  distance: TransportEmissionsCarDistanceInput;
};

export type TransportEmissionsInput = {
  car?: Maybe<TransportEmissionsCarInput>;
};

export type TransportEmissionsResponse = {
  __typename?: 'TransportEmissionsResponse';
  totalAmount: Scalars['Float'];
};

export enum VolumeUnit {
  Gallons = 'Gallons',
  Litres = 'Litres'
}

export type CalculateTransportEmissionsQueryVariables = Exact<{
  input: TransportEmissionsInput;
}>;


export type CalculateTransportEmissionsQuery = (
  { __typename?: 'Query' }
  & { calculateTransportEmissions: (
    { __typename?: 'TransportEmissionsResponse' }
    & Pick<TransportEmissionsResponse, 'totalAmount'>
  ) }
);


export const CalculateTransportEmissionsDocument = gql`
    query CalculateTransportEmissions($input: TransportEmissionsInput!) {
  calculateTransportEmissions(input: $input) {
    totalAmount
  }
}
    `;

/**
 * __useCalculateTransportEmissionsQuery__
 *
 * To run a query within a React component, call `useCalculateTransportEmissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCalculateTransportEmissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCalculateTransportEmissionsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCalculateTransportEmissionsQuery(baseOptions: Apollo.QueryHookOptions<CalculateTransportEmissionsQuery, CalculateTransportEmissionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CalculateTransportEmissionsQuery, CalculateTransportEmissionsQueryVariables>(CalculateTransportEmissionsDocument, options);
      }
export function useCalculateTransportEmissionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CalculateTransportEmissionsQuery, CalculateTransportEmissionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CalculateTransportEmissionsQuery, CalculateTransportEmissionsQueryVariables>(CalculateTransportEmissionsDocument, options);
        }
export type CalculateTransportEmissionsQueryHookResult = ReturnType<typeof useCalculateTransportEmissionsQuery>;
export type CalculateTransportEmissionsLazyQueryHookResult = ReturnType<typeof useCalculateTransportEmissionsLazyQuery>;
export type CalculateTransportEmissionsQueryResult = Apollo.QueryResult<CalculateTransportEmissionsQuery, CalculateTransportEmissionsQueryVariables>;