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
    console
    tags
    rating
    
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
    }
}
`;

// match exactly with your GraphQL schema and the resolver.
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