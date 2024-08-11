const { gql } = require('apollo-server-express')

const typeDefs = gql `
#main tutorial
	type Tutorial {
		_id: ID!
		title: String
		author: User
		game: ID
		content: String
		console: String
		belongsToGroup: Boolean
		tutorialGroup: ID
		chapter: Int
		tags: [String]
		rating: Float
		youtubeEmbeddedLink: String
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
		content: String
		console: Int
		belongsToGroup: Boolean
		tutorialGroup: ID
		chapter: Int
		tags: [String]
		rating: Float
		youtubeEmbeddedLink: String
	}

#Results for tutorial cards(main/results page)
	type TutorialCardResults { #might need to update this depending on what we decide on.
		_id: ID
		title: String
		author: User
		game: ID
		content: String #truncate(useState to expand)
		console: String #enum-change to int when we get that.
		tags: [String]
		rating: Float
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