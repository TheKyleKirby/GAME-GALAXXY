
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
		loggedInUser(_id: ID!): User
	}

	type Mutation {
	#basic profile stuff
		signUp(input: SignUpInput!): Auth
		login(input: LoginInput!): Auth
		editProfile(input: EditProfileInput!): User

	#friends & creators
		addFriend(friends: ID!): User
		followCreator(creatorsFollowing: ID!): User
		removeFriend(friends: ID!): User
		unfollowCreator(creatorsFollowing: ID!): User

	#Games & Tutorials
		saveGame(savedGames: ID!): User
		saveTutorial(savedTutorials: ID!): User
		createTutorial()
		removeSavedGame(savedGames: ID!): User
		removeSavedTutorial(savedTutorials: ID!): User
	}


`

module.exports = typeDefs