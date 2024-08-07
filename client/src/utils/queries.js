import { gql } from "@apollo/client"

export
	const GET_TUTORIALS = gql`
		query allGuides {
	allGuides {
    _id
    author {
    	_id
    	username
    }
    console
    content
    game {
    	_id
    }
    rating
    tags
    title
	}
}
`
