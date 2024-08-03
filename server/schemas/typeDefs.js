const typeDefs = `
	type User{
		_id: ID!
		username: String!
		email: String!
		password: String!
	},

	type Game {
		_id ID!
		title: String!
		description: String!
		genre: String!
		releaseDate: String!
		tutorials: [tutorial]
	},

	type Tutorial {
		_id: ID!
		title: String!
		content: String!
		section: String!
		game: Game
	},

	type Auth {
		token: ID!
		user: User
	},

	type Query {
		allUsers: [User]
		searchedUsers(username: String!): [User]
		games: [Game]
		game(id: ID!): Game
		tutorials: [Tutorial]
		tutorials(id: ID!): Tutorial
	},

	type Mutation {
	addUser(username: String!, email: String!, password: String!): Auth
	login(username: String!, password: String!): Auth
	addGame(title: String!, description: String!, genre: String!, releaseDate: String!): Game
	addTutorial(title: String!, content: String!, section: String!, game: ID!): Tutorial
	},
`



module.exports = typeDefs;
