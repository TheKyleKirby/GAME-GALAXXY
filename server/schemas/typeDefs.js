const typeDefs = `
	type User{
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
	},

	type Game {
		_id: ID!
		title: String!
		description: String
		genre: String
		releaseDate: String
		rating: Float
		guides: [Guide]
	},

	type Guide {
		_id: ID!
		title: String!
		author: User!
		game: Game!
		console: String
		content: String!
		belongsToGroup: Boolean
		groupBelongsTo: GuideGroup
		section: String
		tags: [String]
		rating: Float
		comments: [Comment]
	},

	type GuideGroup {
		_id: ID!
		name: String!
		guides: [Guide]
		creator: [User]
	},

	type Comment {
		_id: ID!
		content: String!
		author: User!
	}

	type Auth {
		token: ID!
		user: User
	},

	type SearchResults {
		users: [User]
		games: [Game]
		guides: [Guide]
		tags: [Guide]
	}

	
	
	input UserInput {
		username: String!
		email: String!
		bio: String
		topGames: String
		profilePicture: String
	},

	input GuideInput {
		title: String!
		author: ID!
		game: ID!
		console: String
		content: String!
		belongsToGroup: Boolean
		groupBelongsTo: GuideGroup
		section: String
		tags: [String]
		rating: Float
		comments: [Comment]
	},

	input GameInput {
		title: String!
		description: String
		genre: String
		releaseDate: String
		rating: Float
		guides: [ID]
	}

	input GuideFilterInput {
		ids: [ID]!
		console: String
		rating: Float
		author: User
	},

	input SearchInput {
		users: String  
		games: String  
		guides: String  
		tags: [String] 
	},




	type Query {
		allUsers: [User]
		searchedUsers(username: String!): [User]
		loggedInUser(_id: ID!): User
		friends(_id: ID!): [User]

		allGames: [Game]
		gameById(id:ID!): Game
		gameByTitle(title: String!): Game

		allGuides: [Guide]
		guideById(_id: ID!): Guide
		search(filter: SearchInput): SearchResults
		filteredGuides(filter: GuideFilterInput): [Guide]		trendingGuides(rating: Float): [Game]

		relatedGuides(_id: ID!, belongsToGroup: Boolean): [Guide]
		guideGroupsByUser(_id: ID!) : GuideGroup

		searchedTags(tags: [String]): [Guide]

	},

	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth
		login(username: String!, password: String!): Auth
		updateProfile(user: UserInput): User
		addFriend(friendId: ID!): User
		followCreator(creatorId: ID!): User
		removeFriend(friendId: ID!): User
		unfollowCreator(creatorId: ID!): User
		

		addGame(game: GameInput!): Game
		saveGame(gameId: ID!) : User
		addGuide(guide: GuideInput!): Guide
		updateGuide(_id: ID!, guide: GuideInput) : Guide
		saveGuide(guideId: ID!) : User
		deleteGuide(_id: ID!)
	},
`


module.exports = typeDefs;
