import { gql } from "@apollo/client"

export
	const GET_TUTORIALS = gql`
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
`
export const FILES_QUERY = gql`
    {
        files
    }
`

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      bioText
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



export const QUERY_USER  = gql `
    query user($username: String!) {
    user(username: $username)
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
		profilePicture
    }
`
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

export const GAME_BY_ID = gql `
  query gameById($gameByIdId: [ID]) {
  gameById(id: $gameByIdId) {

    url
    name
    id

  }
}
`

export const MAIN_SEARCH = gql`
query mainSearch($searchString: String) {
  mainSearch(searchString: $searchString) {
    games {
      id
      age_ratings {
        rating
      }
      cover {
        url
      }
      name
      platforms
      url
    }
    tutorials {
      _id
      title
      author
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
`

export const TUTORIALS_BY_ID = gql `
  query tutorialById($id: [ID]) {
  tutorialById(_id: $id) {
    title
    _id
  }
}
`