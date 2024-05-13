import { gql } from "@apollo/client";

// TODO
export const getCountries = gql`
  query Query {
    countries {
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
