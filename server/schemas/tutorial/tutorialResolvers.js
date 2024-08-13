const Tutorial = require('../../models/Tutorial')
const { AuthenticationError } = require('../../utils/auth')

const resolvers = {

	Query: {

	//to test database(using for trending tutorials right now)
		allTutorials: async() =>{
			return Tutorial.find({})
			.populate('author')
			.populate('comments')
		},
	// triggered by clicking on 'read tutorial' button on card
		tutorialById: async (_parent, {id}) => {
			return await Tutorial.find({_id: {$in: id}})
			.populate('author')
			.populate('comments')
		},

		// !not working on back end yet.
		clickedTutorial: async (_parent, {id}) => {
			return await Tutorial.findById(id)
			.populate('author')
			.populate('comments')
		},
	},

	Mutation: {
		createTutorial: async(parent, {tutorial}) => {
			try{
				return (await Tutorial.create(tutorial))
				.populate('author')
				
			} catch(error){
				console.log(`error creating tutorial, ${error}`)
			}
		},
		
		updateTutorial: async(parent, {_id, tutorial}) => {
			console.log(tutorial)
			try{
				return (await Tutorial.findByIdAndUpdate(_id, tutorial, {new: true}))
				// .populate('author')
				.populate('comments')
			} catch(error){
				console.log(`error updating tutorial, ${error}`)
			}
		},


		// todo: add context for user._id auth when working on front end:
			// if(!context.user._id) {
			// 	throw AuthenticationError
			// }
		deleteCreatedTutorial: async (parent, _id) =>{
			console.log(_id)

			try {
				const deletedTutorial = await Tutorial.findByIdAndDelete(_id).populate('author')
				if(!deletedTutorial){
					console.log('tutorial not found')
				}

				console.log('Deleted!')
				return deletedTutorial
			} catch (error) {
				console.log(`error deleting tutorial, ${error}`)
			}
		},

		
		// todo add context auth when working
			// if (!context.user) {
			// 	throw new AuthenticationError("User must be logged in");
			//   }
			// author: context.user._id(hardcoding for now)
		addComment: async (parent, {tutorialId, comment}) => {
			try {
				const newComment = {
					content: comment.content,
					commenter: "66b6c5c1277ee4c99660e77b"
				}

				const updatedTutorial = await Tutorial.findByIdAndUpdate(
					tutorialId,
					{ $push: { comments: newComment} },
					{ new: true })
					// .populate('author')
					.populate('comments')
					
				console.log(updatedTutorial)
				return updatedTutorial
			} catch (error) {
				console.log(`error commenting on tutorial, ${error}`)
			}
		}
	}

}


module.exports = resolvers