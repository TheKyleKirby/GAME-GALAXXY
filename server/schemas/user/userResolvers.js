const User = require('../../models/User')

const resolvers = {
	Query: {
		allUsers: async() =>{
			return User.find({})
		}
	}
}

module.exports = resolvers