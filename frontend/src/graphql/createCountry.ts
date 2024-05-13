import { gql } from "@apollo/client";

export const createCountries = gql`
  mutation Mutation($data: NewCountryInput!) {
    addCountry(data: $data) {
      code
      continent {
        id
        name
      }
      emoji
      id
      name
    }
  }
`;
