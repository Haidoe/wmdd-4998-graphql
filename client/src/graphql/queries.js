import { gql } from "@apollo/client";

export const GET_PEOPLE = gql`
  {
    people {
      id
      firstName
      lastName
    }
  }
`;

export const GET_CARS_OF_PERSON_BY_ID = gql`
  query GetCarsOfPersonById($id: String!) {
    carsOfPersonId(id: $id) {
      id
      make
      model
      year
      price
      personId
    }
  }
`;

export const ADD_PERSON = gql`
  mutation AddPerson($id: String!, $firstName: String!, $lastName: String!) {
    addPerson(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;

// export const UPDATE_CONTACT = gql`
//   mutation UpdateContact($id: String!, $firstName: String!, $lastName: String!) {
//     updateContact(id: $id, firstName: $firstName, lastName: $lastName) {
//       id
//       firstName
//       lastName
//     }
//   }
// `

// export const REMOVE_CONTACT = gql`
//   mutation RemoveContact($id: String!) {
//     removeContact(id: $id) {
//       id
//       firstName
//       lastName
//     }
//   }
// `
