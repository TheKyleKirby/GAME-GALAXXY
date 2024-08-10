const { User, Tutorial } = require("../../models");
const { signToken, AuthenticationError } = require("../../utils/auth");
const { createWriteStream } = require('fs')
const path = require('path')
const { GraphQLUpload } = require('graphql-upload');

const resolvers = {
	Query: {
		// to test database
		allUsers: async () => {
			return User.find({})
		},

		// fetch the profile of the currently authenticated user - A user wants to view or edit their own profile information. (add populate profile or populate something else ?)
		me: async (parent, args, context) => {
			if (context.user) {
				return Profile.findOne({ _id: context.user._id })
					.populate('savedTutorials')
					.populate('createdTutorials')
			}
			throw AuthenticationError;
		},

		// to view the profile of a specific user by providing their profile ID. (maybe change this to username...?)
		user: async (parent, { userId }) => {
			return User.findOne({ _id: userId })
				.populate('savedTutorials')
				.populate('createdTutorials')
		},
	},


	Mutation: {
		signUp: async (parent, { username, email, password }) => {

			// todo validate username is not taken

			// todo validate email is not taken

			// todo validate email is in email format

			const user = await User.create({
				username,
				email,
				password,
			});
			const token = signToken(user);
			return { token, user };
		},

		// find profile, if not found , throw error
		login: async (parent, { username, password }) => {
			const user = await User.findOne({ username });

			if (!user) {
				throw AuthenticationError;
			}
			// checking password from bcrypt in models
			const correctPW = await user.isCorrectPassword(password);

			if (!correctPW) {
				throw AuthenticationError;
			}

			const token = signToken(user);
			return { token, user };
		},


		uploadProfilePicture: async (_, {file}, {user}) =>{
			if(!user){
				throw AuthenticationError
			}

			const { createReadStream, filename } = await file

			const filePath = path.join(__dirname, ".../uploads", filename)

			await new Promise((res, rej) =>
				createReadStream()
					.pipe(createWriteStream(filePath))
					.on('finish', res)
					.on('error', rej)
				)

				const profilePictureUrl = `http://localhost:3001/uploads/${filename}`

				await User.findByIdAndDelete(user._id, {profilePicture: profilePictureUrl})

				return {
					success: true,
					message: 'File uploaded and profile picture saved',
					profilePictureUrl
				}

		}
	},

	Upload: GraphQLUpload
}

module.exports = resolvers