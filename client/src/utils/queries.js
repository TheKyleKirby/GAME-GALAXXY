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
    tags{
        tag
    }
    rating
    
	}
}
`
