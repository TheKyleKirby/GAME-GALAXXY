const typeDefs = `
	type User {#ADDED
		_id: ID!
		username: String!
		email: String!
		password: String!
		bio: String
		topGames: String
		friends: [User]
		savedGames: [Game]
		creatorsFollowing: [User]
		savedGuides: [Guide]
		createdGuides: [Guide]
		isCreator: Boolean
		profilePicture: String
	}
	type Auth {#ADDED
		token: ID!
		user: User
	}
	input UserInput {#ADDED
		username: String!
		email: String!
		bio: String
		topGames: String
		profilePicture: String
		
	}
	type Guide { ###ADDED
		_id: ID!
		title: String!
		author: User!
		game: Game!
		console: String
		content: String!
		belongsToGroup: Boolean
		groupBelongsTo: String
		section: String
		tags: [String]
		rating: Float
		comments: [ID]
	}
	type GuideGroup {### Added
		_id: ID!
		name: String!
		guides: [Guide]
		creator: [User]
	}
	type Comment { ###ADDED
		_id: ID!
		content: String!
		author: User!
	}

	input GuideInput { ### ADDED
		title: String!
		author: ID!
		game: ID!
		console: String
		content: String!
		belongsToGroup: Boolean
		groupBelongsTo: String
		section: String
		tags: [String]
		rating: Float
		comments: [ID]
	}

	
	type Game {
		_id: ID
		title: String!
		description: String
		genre: String
		releaseDate: String
		rating: Float
		guides: [ID]
		esrb: String
	}


	type SearchResults {
		users: [User]
		games: [Game]
		guides: [Guide]
		tags: [Guide]
	}

	
	input GuideFilterInput {
		ids: [ID]!
		console: String#console
		rating: Float
		author: String#all users where isCreator===true
		esrbRating: String#really enum is on IGDB examples page with values.
		
	}

	input SearchInput {
		users: String  
		games: String  
		guides: String  
		tags: [String] 
	}




	type Query {
		allUsers: [User]## ADDED
		loggedInUser(_id: ID!): User ## ADDED
		allGuides: [Guide]#ADDED
		guideById(_id: ID!): Guide ###ADDED
		trendingGuides(rating: Float): [Game]###ADDED
		relatedGuides(_id: ID!, belongsToGroup: Boolean): [Guide] ###ADDED
		

		allGames: [Game]
		gameById(id:ID!): Game
		gameByTitle(title: String!): Game


		search(filter: SearchInput): SearchResults
		filteredGuides(filter: GuideFilterInput): [Guide]		



	},

	type Mutation {
		signUp(username: String!, email: String!, password: String!): Auth ##ADDED
		login(username: String!, password: String!): Auth  ##ADDED
		updateProfile(user: UserInput): User ###ADDED
		addFriend(friendId: ID!): User ###ADDED
		followCreator(creatorId: ID!): User ###ADDED
		removeFriend(friendId: ID!): User ###ADDED
		unfollowCreator(creatorId: ID!): User ###ADDED
		saveGame(gameId: ID!) : User  ###ADDED
		saveGuide(guideId: ID!) : User ###ADDED
		removedSavedTutorial(_id: ID!): User ###ADDED
		

		

		createTutorial(guide: GuideInput!): Guide
		updateTutorial(_id: ID!, guide: GuideInput) : Guide
		deleteCreatedTutorial(_id: ID!): User
	}

`
module.exports = typeDefs
