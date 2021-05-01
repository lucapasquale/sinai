import gql from 'graphql-tag'

export const QUERY = gql`
  query CalculateHousingEmissions($input: HousingInput!) {
    calculateHousingEmissions(input: $input) {
      totalAmount
      amountPerPerson
    }
  }
`
