const typeDefs = `
#main tutorial
	type Tutorial {
		_id: ID!
		title: String!
		author: User!
		game: Game!
		content: String!
		console: Console
		belongsToGroup: Boolean
		tutorialGroup: TutorialGroup
		chapter: Int
		tags: [Tag]
		rating: Float
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
# options for consoles# will match up with platform ID's below is what will show, id's will be in here.
	enum Console{
		SONY PLAYSTATION 2 (PS2)
		SONY PLAYSTATION 4 (PS4)
		NINTENDO SWITCH
		SONY PLAYSTATION (PS1)
		NINTENDO WII
		SONY PLAYSTATION 3 (PS3)
		MICROSOFT XBOX 360
		NINTENDO ENTERTAINMENT SYSTEM (NES)
		SUPER NINTENDO ENTERTAINMENT SYSTEM (SNES)
		MICROSOFT XBOX ONE
		NINTENDO GAMECUBE
		SEGA GENESIS (MEGA DRIVE)
		SONY PLAYSTATION 5 (PS5)
		MICROSOFT XBOX
		NINTENDO 3DS
		SONY PSP 
		ATARI 2600
		NINTENDO DS
		SEGA DREAMCAST
		NEO GEO
		OTHER
	}

#Input type for creating/updating Tutorial
	input TutorialInput {
		title: String!
		author: User!
		game: ID!
		content: String
		console: Console
		belongsToGroup: Boolean
		tutorialGroup: TutorialGroup
		chapter: Int
		tags: [Tag]
		rating: Float
	}
#Results for tutorial cards(main/results page)
	type TutorialCardResults { #might need to update this depending on what we decide on.
		_id: ID
		title: String
		author: User
		game: ID
		content: String #truncate(useState to expand)
		tags: [Tag]
		rating: Float
	}

	type Query {
		allTutorials: [Tutorial]
		tutorialById(_id: ID!): Tutorial
		trendingTutorials(author: [User]): [Tutorial] #get ones made by us
		otherChapters(belongsToGroup: Boolean!, tutorialGroup: TutorialGroup ): [Tutorials]
	}

	type Mutation {
		
	}
`