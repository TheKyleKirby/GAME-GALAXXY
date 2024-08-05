const User = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
	Query: {
		allUsers: async() =>{
			return User.find({})
		}
	},
	Mutation: {
		createUser: async( parent, {username, email, password }) => {
			const user = await User.create({
				username,
				email,
				password
			})
		// if valid token, user will be created 
			const token = signToken(user)
			return { token, user }
		},

	// find profile, if not found , throw error
		login: async (parent, {email,password}) => {
			const user = await User.findOne({email})

		if (!user) {
			throw AuthenticationError
		}

// checking password from bcrypt in models
		const correctPW = await User.isCorrectPassword(password)

		if (!correctPW) {
			throw AuthenticationError
		}
	}
}
}

module.exports = resolvers
