import { gql } from "@apollo/client";

// Query to get tutorials
export const GET_TUTORIALS = gql`
  query allTutorials {
    allTutorials {
      _id
      title
      author {
        _id
        username
      }
      game
      content
      platform
      tags
      rating
      youTubeLink
    }
  }
`;

// Query to get files (if needed)
export const FILES_QUERY = gql`
  {
    files
  }
`;

// Query to get user information
export const QUERY_ME = gql`
query me {
  me {
    _id
    username
    email
    bioText
    topGames
    friends {
      username
      _id
    }
    savedTutorials {
      title
      _id
    }
    createdTutorials {
      _id
      author {
        _id
      }
      content
      title
    }
    profilePicture
  }
}
`;

// Query to get user by username
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      bioText
      topGames
      friends
      savedGames
      creatorsFollowing
      savedTutorials
      createdTutorials
      isCreator
      friends {
        username
      }
      savedGames
      savedTutorials {
        _id
        title
      }
      createdTutorials {  
        _id
        title
        content
        # Add any other fields you need
      }
      profilePicture
    }
  }
`;

// Query to get whole game information by ID
export const WHOLE_GAME_INFO = gql`
  query WholeGameInfo($id: ID!) {
    wholeGameInfo(id: $id) {
      id
      name
      slug
      url
      cover {
        url
        image_id
      }
      platforms
      age_ratings {
        category
        rating
      }
      similar_games
      tags
    }
  }
`;

// Query to get game by ID
export const GAME_BY_ID = gql`
  query gameById($gameByIdId: [ID]) {
    gameById(id: $gameByIdId) {
      url
      name
      id
    }
  }
`;

// Query to search main data
export const MAIN_SEARCH = gql`
  query mainSearch($searchString: String!) {
    mainSearch(searchString: $searchString) {
      games {
        id
        name
        cover {
          url
        }
        platforms
        age_ratings {
          rating
        }
        url
      }
      tutorials {
        _id
        title
        author {
          _id
          username
        }
        game
        level
        platform
        youTubeLink
        rating
        comments {
          commenter {
            username
          }
          content
        }
      }
      users {
        _id
        username
        profilePicture
        friends {
          username
        }
      }
    }
  }
`;

// Query to get tutorial by ID
export const TUTORIALS_BY_ID = gql`
  query tutorialById($id: [ID]) {
    tutorialById(_id: $id) {
      title
      _id
    }
  }
`;

// Query for a clicked tutorial
export const CLICKED_TUTORIAL = gql `
  query clickedTutorial($id: ID) {
  clickedTutorial(_id: $id) {
    _id
    author {
      username
      _id
    }
    comments {
      commenter {
        username
      }
      _id
      content
    }
    content
    tags
    game
    level
    platform
    title
    youTubeLink
  }
}
`
