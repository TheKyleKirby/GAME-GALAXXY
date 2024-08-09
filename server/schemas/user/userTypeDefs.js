
const typeDefs = `
#main for all info needed(profile)
	type User {
		_id: ID!
		username: String!
		email: String!
		password: String!
		bio: String
		topGames: String
		friends: [User]
		savedGames: [ID]
		creatorsFollowing: [User]
		savedTutorials: [Tutorial]
		createdTutorials: [Tutorial]
		isCreator: Boolean
		profilePicture: String
	}

#for Authorizing Result
	type Auth {
		token: ID!
		user: User
	}

#for sign up info
	input SignUpInput {
		username: String!
		email: String!
		password: String!
	}

# for login info
	input LoginInput {
		username: String!
		password: String
	}

#for editing your profile
	input EditProfileInput {
		username: String
		email: String
		password: String
		bio: String
		topGames: String
		profilePicture: String
	}

	type Query {
		allUsers: [User]
		me: User
		user(_id: ID!): User
	}
		

	type Mutation {
	#basic profile stuff
		signUp(username: String!, email: String!, password: String!): Auth
		login(username: String!, password: String!): Auth
		editProfile(user: EditProfileInput!): User

	#friends & creators
		addFriend(friends: ID!): User
		followCreator(creatorsFollowing: ID!): User
		removeFriend(friends: ID!): User
		unfollowCreator(creatorsFollowing: ID!): User

	#Games & Tutorials
		saveGame(savedGames: ID!): User
		saveTutorial(savedTutorials: ID!): User
		removeSavedGame(savedGames: ID!): User
		removeSavedTutorial(savedTutorials: ID!): User
	}


`

module.exports = typeDefs