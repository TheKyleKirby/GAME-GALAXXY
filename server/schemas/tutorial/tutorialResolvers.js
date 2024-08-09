const Tutorial = require('../../models/Tutorial')

const resolvers = {

	Query: {

	//to test database(using for trending tutorials right now)
		allTutorials: async() =>{
			return Tutorial.find({})
			.populate('author')
			.populate('tags')
		}
	}
}


module.exports = resolvers