const { gql } = require('apollo-server-express')


const typeDefs = gql`
#main for all info needed(profile)
	type User {
		_id: ID!
		username: String!
		email: String!
	 	#password: String! should not be exposed in graphql for security reasons
		bioText: String
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

#upload reply
	type UploadResponse {
		success: Boolean
		message: String
		profilePictureUrl: String
}

#for editing your profile-don't think we need this anymore, since we're just going to do a profilePic mutation and a bioUpdate
	input EditProfileInput {
		username: String
		email: String
		password: String
		bioText: String
		topGames: String
		profilePicture: String
	}

#testing drop upload
	scalar Upload


	type Query {
		allUsers: [User]
		me: User
		user(username: String!): User
		userByUsername(username: String): User
	}


	type Mutation {
		signUp(username: String!, email: String!, password: String!): Auth
		login(username: String!, password: String!): Auth
		editProfile(user: EditProfileInput!): User
		updateBio(bioText: String!): User

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
	
	#Testing picture upload
		uploadProfilePicture(file: Upload!): UploadResponse
	}


`

module.exports = typeDefs