
const typeDefs = `
	type User{
		_id: ID!
		username: String!
		email: String!
		password: String!
	},



	type Query {
		allUsers: [users]
		
		searchedUsers(username: String!) : [Users]
	}

	type Mutation {
	addUser(username: String!, email: String!, password: String!): Auth
	login(username: String!, password: String!): Auth
	}
`

// mutations

module.exports = typeDefs