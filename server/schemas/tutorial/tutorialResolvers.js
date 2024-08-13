const Tutorial = require('../../models/Tutorial')
const { User } = require('../../models');
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
		}
	},

	Mutation: {
	

		createTutorial: async (parent, { tutorial }, context) => {
			if (context.user) {
				try {
					const newTutorial = await Tutorial.create({
						title: tutorial.title,
						author: context.user._id,
						game: tutorial.game,
						platform: tutorial.platform,
						level: tutorial.level,
						youTubeLink: tutorial.youTubeLink,
						content: tutorial.content,
						tags: tutorial.tags
					});
		
					const updatedUser = await User.findByIdAndUpdate(
						context.user._id,
						{ $push: { createdTutorials: newTutorial._id } },  // Ensure this line correctly updates the user
						{ new: true }
					);
		
					console.log('Updated User:', updatedUser); // <-- Add this line to verify the update
		
					return newTutorial;
				} catch (error) {
					console.log(`Error creating tutorial: ${error}`);
					throw new Error('Failed to create tutorial');
				}
			} else {
				throw new Error('Authorization required');
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