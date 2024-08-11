import { gql } from '@apollo/client';

// response fields align with what the GraphQL server is returning

// returns token when login is successful and the profile id and name
export const LOG_IN = gql`
    mutation login($username: String!, $password: String!) {
      login(username: $username, password: $password) {
        token
        user {
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
`

export const UPDATE_BIO = gql `
  mutation updateBio($bioText: String!) {
  updateBio(bioText: $bioText) {
    _id
    bioText
  }
}
`


// todo, not working yet.
export const UPLOAD_PROFILE_PICTURE = gql`
  mutation uploadProfilePicture($file: Upload!) {
    uploadProfilePicture(file: $file) {
      success
      message
      profilePictureUrl
    }
  }
  `