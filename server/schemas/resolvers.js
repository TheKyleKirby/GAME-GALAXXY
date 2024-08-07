const {User, Guide, Game} = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
	Query: {
		allUsers: async() =>{
			return User.find({})
		},
		// going to try to use api for games.
		// allGames: async() => {
		// 	return await Game.find({})
		// },
		allGuides: async() => {
			return Guide.find({}).populate('author')
		}


	},
	Mutation: {
		addUser: async( parent, {username, email, password }) =>{
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
		login: async (parent, {username, password}) => {
			const user = await User.findOne({username})

		if (!user) {
			throw AuthenticationError
		}
// checking password from bcrypt in models
		const correctPW = await user.isCorrectPassword(password)

		if (!correctPW) {
			throw AuthenticationError
		}

		const token = signToken(user)
		return { token, user }
	}
}
}

module.exports = resolvers
