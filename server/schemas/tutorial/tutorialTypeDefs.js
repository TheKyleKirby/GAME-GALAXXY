const typeDefs = `
#main tutorial
	type Tutorial {
		_id: ID!
		title: String!
		author: User!
		game: GameResultCard!
		content: String!
		console: Int
		belongsToGroup: Boolean
		tutorialGroup: ID
		chapter: Int
		tags: [Tag]
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

#Tutorial Tags
	type Tag {
		_id: ID!
		tag: String!
	}

# Tutorial Comments
	type Comment {
		_id: ID!
		comment: String!
		commenter: User!
	}


#Input type for creating/updating Tutorial
	input TutorialInput {
		title: String!
		author: ID!
		game: ID!
		content: String
		console: Int
		belongsToGroup: Boolean
		tutorialGroup: ID
		chapter: Int
		tags: [ID]
		rating: Float
	}

#Results for tutorial cards(main/results page)
	type TutorialCardResults { #might need to update this depending on what we decide on.
		_id: ID
		title: String
		author: User
		game: ID
		content: String #truncate(useState to expand)
		console: String #enum
		tags: [Tag]
		rating: Float
	}

	type Query {
		allTutorials: [Tutorial]
		tutorialById(_id: ID!): Tutorial

	#tutorials written by us. will provide an array of our _ids
		trendingTutorials(author: [ID]!): [Tutorial] #get ones made by us
		
		otherChapters(belongsToGroup: Boolean!, tutorialGroup: String! ): [Tutorial]
	}

	type Mutation {
		createTutorial(tutorial: TutorialInput!): Tutorial
		updateTutorial(tutorial: TutorialInput!): Tutorial
		deleteCreatedTutorial(_id: ID!): User
		addComment(comments: ID!): Tutorial 
	}
`

module.exports = typeDefs