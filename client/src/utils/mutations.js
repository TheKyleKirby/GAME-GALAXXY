import { gql } from '@apollo/client';

// returns token when login is successful and the profile id and name
export 

  const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
      login(username: $username, password: $password) {
        token
        profile {
          _id
          name
        }
      }
    }
  `

  export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;