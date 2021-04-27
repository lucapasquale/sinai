import gql from 'graphql-tag'

export const QUERY = gql`
  query CalculateTransportEmissions($input: TransportEmissionsInput!) {
    calculateTransportEmissions(input: $input) {
      totalAmount
    }
  }
`
