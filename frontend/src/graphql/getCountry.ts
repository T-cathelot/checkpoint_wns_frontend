import { gql } from "@apollo/client";

export const getCountry = gql`
  query Country($countryId: Float!) {
    country(id: $countryId) {
      name
      emoji
      continent {
        name
        id
      }
    }
  }
`;
