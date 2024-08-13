const { gql } = require('apollo-server-express')

const typeDefs = gql `
#main tutorial
	type Tutorial {
		_id: ID!
		title: String
		author: User
		game: String
		content: String
		platform: String
		level: String
		tags: [String]
		rating: Float
		youTubeLink: String
		comments: [Comment]
	}
	# belongsToGroup: Boolean
	# groupBelongsTo: String


#tutorial group tutorial belongs to
	type GroupBelongsTo {
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
		game: String
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
		game: String
		content: String #truncate(useState to expand)
		platform: String #enum-change to int when we get that.
		tags: [String]
		rating: Float
		youTubeLink: String
	}

	type Query {
		allTutorials: [Tutorial]
		# for clicking read tutorial on page.
		clickedTutorial(_id: ID): Tutorial
		tutorialById(_id: [ID]): [Tutorial]

	#tutorials written by us. will provide an array of our _ids
		trendingTutorials(author: [ID]!): [Tutorial] #get ones made by us
	#icebox
		otherChapters(belongsToGroup: Boolean!, groupBelongsTo: String! ): [Tutorial]
	}

	type Mutation {
		createTutorial(tutorial: TutorialInput!): Tutorial
		updateTutorial(_id: ID!, tutorial: TutorialInput!): Tutorial
		deleteCreatedTutorial(_id: ID!): Tutorial
		addComment(tutorialId: ID! comment: CommentInput! ): Tutorial 
	}
`

module.exports = typeDefs