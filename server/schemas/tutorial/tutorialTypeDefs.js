const { gql } = require('apollo-server-express')

const typeDefs = gql `
#main tutorial
	type Tutorial {
		_id: ID!
		title: String
		author: User
		game: ID
		content: String
		platform: String
		belongsToGroup: Boolean
		tutorialGroup: ID
		level: String
		tags: [String]
		rating: Float
		youTubeLink: String
		comments: [Comment]
	}

#tutorial group tutorial belongs to
	type TutorialGroup {
		_id: ID!
		title: String!
		creator: User!
	}

# Tutorial Comments
	type Comment {
		_id: ID
		content: String
		commenter: User
	}

	input CommentInput {
		content: String!
		commenter: ID
	}

#Input type for creating/updating Tutorial
	input TutorialInput {
		title: String
		author: ID
		game: ID
		platform: String
		level: String
		youTubeLink: String
		content: String
		#saying it should be null right now??? will be enum
		tags: [String]
	}

#Results for tutorial cards(main/results page)
	type TutorialCardResults { #might need to update this depending on what we decide on.
		_id: ID
		title: String
		author: User
		game: ID
		content: String #truncate(useState to expand)
		platform: String #enum-change to int when we get that.
		tags: [String]
		rating: Float
		youTubeLink: String
	}

	type Query {
		allTutorials: [Tutorial]
		tutorialById(_id: ID!): Tutorial

	#tutorials written by us. will provide an array of our _ids
		trendingTutorials(author: [ID]!): [Tutorial] #get ones made by us
	#icebox
		otherChapters(belongsToGroup: Boolean!, tutorialGroup: String! ): [Tutorial]
	}

	type Mutation {
		createTutorial(tutorial: TutorialInput!): Tutorial
		updateTutorial(_id: ID!, tutorial: TutorialInput!): Tutorial
		deleteCreatedTutorial(_id: ID!): Tutorial
		addComment(tutorialId: ID! comment: CommentInput! ): Tutorial 
	}
`

module.exports = typeDefs