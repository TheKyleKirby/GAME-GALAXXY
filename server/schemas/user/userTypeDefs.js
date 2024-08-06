
const typeDefs = `
	type User {
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
`

module.exports = typeDefs