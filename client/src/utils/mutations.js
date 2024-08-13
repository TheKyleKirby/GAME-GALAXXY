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

export const CREATE_TUTORIAL = gql `
  mutation createTutorial($tutorial: TutorialInput!) {
    createTutorial(tutorial: $tutorial) {
    title
    game
    platform
    level
    youTubeLink
    content
    tags
  }
}

`
export const DELETE_TUTORIAL = gql `
  mutation DeleteCreatedTutorial($id: ID!) {
  deleteCreatedTutorial(_id: $id) {
    author {
      username
      _id
    }
    title
  }
}
`
// saving tutorial
export const SAVE_TUTORIAL = gql `
  mutation saveTutorial($savedTutorials: ID!) {
  saveTutorial(savedTutorials: $savedTutorials) {
    username
    savedTutorials {
      title
      _id
    }
  }
}
`
export const ADD_FRIEND = gql `
  mutation addFriend($friends: ID!) {
  addFriend(friends: $friends) {
    _id
    username
  }
}
`

export const REMOVE_FRIEND = gql `
  mutation removeFriend($friends: ID!) {
  removeFriend(friends: $friends) {
    username
    friends {
      username
      _id
    }
    _id
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