const Tutorial = require('../../models/Tutorial')

const resolvers = {

	Query: {

	//to test database
		allTutorials: async() =>{
			return Tutorial.find({}).populate('author')
		}
	}
}


module.exports = resolvers