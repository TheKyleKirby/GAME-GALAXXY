import { gql } from '@apollo/client';

// returns token when login is successful and the profile id and name
export 

  const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
      login(username: $username, password: $password) {
        token
        profile {
          _id
          username
        }
      }
    }
  `

  export const SIGN_UP = gql`
  mutation signUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;