// const typeDefs = `
// 	type User {#ADDED
// 		_id: ID!
// 		username: String!
// 		email: String!
// 		password: String!
// 		bio: String
// 		topGames: String
// 		friends: [User]
// 		savedGames: [Game]
// 		creatorsFollowing: [User]
// 		savedGuides: [Guide]
// 		createdGuides: [Guide]
// 		isCreator: Boolean
// 		profilePicture: String
// 	}
// 	type Auth {#ADDED
// 		token: ID!
// 		user: User
// 	}
// 	input UserInput {#ADDED
// 		username: String!
// 		email: String!
// 		bio: String
// 		topGames: String
// 		profilePicture: String
		
// 	}
// 	type Guide { ###ADDED
// 		_id: ID!
// 		title: String!
// 		author: User!
// 		game: Game!
// 		console: String
// 		content: String!
// 		belongsToGroup: Boolean
// 		groupBelongsTo: String
// 		section: String
// 		tags: [String]
// 		rating: Float
// 		comments: [ID]
// 	}
// 	type GuideGroup {### Added
// 		_id: ID!
// 		name: String!
// 		guides: [Guide]
// 		creator: [User]
// 	}
// 	type Comment { ###ADDED
// 		_id: ID!
// 		content: String!
// 		author: User!
// 	}
// 	input GuideInput { ### ADDED
// 		title: String!
// 		author: ID!
// 		game: ID!
// 		console: String
// 		content: String!
// 		belongsToGroup: Boolean
// 		groupBelongsTo: String
// 		section: String
// 		tags: [String]
// 		rating: Float
// 		comments: [ID]
// 	}
// 	type GameResultCard {###ADDED
// 		id: ID
// 		name: String
// 		slug: String
// 		cover: [Int]
// 		platforms: [Int]
// 		url: String
// 		tags: [Int]
// 		similar_games: [Int]
// 	}
// 		type Game {###ADDED
// 		id: ID
// 		name: String
// 		slug: String
// 		cover: [Int]
// 		platforms: [Int]
// 		url: String
// 		tags: [Int]
// 		similar_games: [Int]
// 	}
// 	type SearchResults {###ADDED
// 		users: [User]
// 		games: [Game]
// 		guides: [Guide]
// 		tags: [Guide]
// 	}
// 	input GuideFilterInput {###ADDED
// 		ids: [ID]!
// 		console: String#console
// 		rating: Float
// 		author: String#all users where isCreator===true
// 	}
// 	input SearchInput {###ADDED
// 		users: String  
// 		games: String  
// 		guides: String  
// 		tags: [String] 
// 	}

// 	type Query {
// 		allUsers: [User]## ADDED
// 		loggedInUser(_id: ID!): User ## ADDED
// 		allGuides: [Guide]#ADDED
// 		guideById(_id: ID!): Guide ###ADDED
// 		trendingGuides(rating: Float): [Game]###ADDED
// 		relatedGuides(_id: ID!, belongsToGroup: Boolean): [Guide] ###ADDED
// 		gameById(id:ID!): Game###ADDED
// 		gameByName(name: String!): [GameResultCard] ###ADDED
// 		me: User ###ADDED
// 		user: User ###ADDED
// 		search(filter: SearchInput): SearchResults###ADDED
// 		filteredGuides(filter: GuideFilterInput): [Guide]	###ADDED	






// 	}

// 	type Mutation {
// 		signUp(username: String!, email: String!, password: String!): Auth ##ADDED
// 		login(username: String!, password: String!): Auth  ##ADDED
// 		updateProfile(user: UserInput): User ###ADDED
// 		addFriend(friendId: ID!): User ###ADDED
// 		followCreator(creatorId: ID!): User ###ADDED
// 		removeFriend(friendId: ID!): User ###ADDED
// 		unfollowCreator(creatorId: ID!): User ###ADDED
// 		saveGame(gameId: ID!) : User  ###ADDED
// 		saveGuide(guideId: ID!) : User ###ADDED
// 		removedSavedTutorial(_id: ID!): User ###ADDED
// 		createTutorial(guide: GuideInput!): Guide  ###ADDED
// 		updateTutorial(_id: ID!, guide: GuideInput) : Guide ###ADDED
// 		deleteCreatedTutorial(_id: ID!): User ###ADDED
		

		

// 	}
// `

// module.exports = typeDefs
