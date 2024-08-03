const User = require('../models')

const resolvers = {
	Query: {
		allUsers: async() =>{
			return User.find({})
		}
	},
	Mutation: {
		createUser: async( parent, {username, email, password }) =>{
			const user = await User.create({
				username,
				email,
				password
			})
			return user
		}
	}
}

module.exports = resolvers
