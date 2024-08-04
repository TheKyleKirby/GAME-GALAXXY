const User = require('../models/User')

const resolvers = {
	Query: {
		allUsers: async() =>{
			return User.find({})
		}
	},
	Mutation: {
		addUser: async( parent, {username, email, password }) =>{
			return await User.create({
				username,
				email,
				password
			})
		}
	}
}

module.exports = resolvers
