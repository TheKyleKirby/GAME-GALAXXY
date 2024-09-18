const { User } = require("../../models");
const { signToken, AuthenticationError } = require("../../utils/auth");
const { createWriteStream } = require('fs')
const path = require('path')
const { GraphQLUpload } = require('graphql-upload');

const resolvers = {
	Query: {
		// to test database
		allUsers: async () => {
			return User.find({})
			.populate('friends')
			.populate('savedTutorials')
			.populate('createdTutorials')
		},

		// fetch the profile of the currently authenticated user - A user wants to view or edit their own profile information. (add populate profile or populate something else ?)
		me: async (_parent, args, context) => {
			if (context.user) {
				try {
					const user = await User.findById(context.user._id)
						.populate('savedTutorials')
						.populate('createdTutorials')
						.populate('friends')
		
					if (!user) {
						throw new Error('User not found');
					}
					return user;
				} catch (err) {
					console.error('Error fetching user data:', err);
					throw new Error('Error fetching user data');
				}
			}
		
			throw new AuthenticationError('Not logged in');
		},
		

		// to view the profile of a specific user by providing their profile ID. (maybe change this to username...?)
		user: async (_parent, { username }) => {
			return User.findOne({ username })
				.populate('savedTutorials')
				.populate('createdTutorials')
		},
	},


	Mutation: {
		signUp: async (parent, { username, email, password }) => {

			const existingUsername = await User.findOne({ username });
			if (existingUsername) {
				throw new Error('Username is already taken.');
			}

			const existingEmail = await User.findOne({ email });
			if (existingEmail) {
				throw new Error('Email is already taken.');
			}

			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(email)) {
				throw new Error('Invalid email format.');
			}

			const user = await User.create({
				username,
				email,
				password,
			});
			const token = signToken(user);
			return { token, user };
		},

		// find profile, if not found , throw error
		login: async (parent, { username, password }, context) => {
			const user = await User.findOne({ username });

			if (!user) {
				throw new Error('username or password incorrect')
			}
			// checking password from bcrypt in models
			const correctPW = await user.isCorrectPassword(password);

			if (!correctPW) {
				throw new Error('username or password incorrect')
			}

			const token = signToken({ username: user.username, email: user.email, _id: user._id });
			return { token, user };
		},

		// lets users edit their profile-change to be update bio.
		editProfile: async (parent, { user }, context) => {
			if (!context.user) throw new Error("Not authenticated");
			return await User.findByIdAndUpdate(context.user._id, user, { new: true });
		},

		updateBio: async (parent, { bioText }, context) => {
			if (!context.user) throw new Error("Not authenticated");
			const updatedUserBio =  await User.findByIdAndUpdate(
				context.user._id,
				{ bioText },
				{ new: true }
			);
			return updatedUserBio
		},

		addFriend: async (parent, { friends }, context) => {
			if (!context.user) throw new Error("Not authenticated");
			return await User.findByIdAndUpdate(
				context.user._id,
				{ $addToSet: { friends } },
				{ new: true }
			)
			.populate('friends')
		},

		followCreator: async (parent, { creatorsFollowing }, context) => {
			if (!context.user) throw new Error("Not authenticated");
			return await User.findByIdAndUpdate(
				context.user._id,
				{ $addToSet: { creatorsFollowing } },
				{ new: true }
			)
		
		},

		removeFriend: async (parent, { friends }, context) => {
			if (!context.user) throw new Error("Not authenticated");
			return await User.findByIdAndUpdate(
				context.user._id,
				{ $pull: { friends } },
				{ new: true }
			)
			.populate('friends')
		},

		unfollowCreator: async (parent, { creatorsFollowing }, context) => {
			if (!context.user) throw new Error("Not authenticated");
			return await User.findByIdAndUpdate(
				context.user._id,
				{ $pull: { creatorsFollowing } },
				{ new: true }
			);
		},

		saveGame: async (parent, { savedGames }, context) => {
			if (!context.user) throw new Error("Not authenticated");
			return await User.findByIdAndUpdate(
				context.user._id,
				{ $addToSet: { savedGames } },
				{ new: true }
			)
		},

		saveTutorial: async (parent, { savedTutorials }, context) => {
			if (!context.user) throw new Error("Not authenticated");
			return await User.findByIdAndUpdate(
				context.user._id,
				{ $addToSet: { savedTutorials } },
				{ new: true }
			)
			.populate('savedTutorials')
		},

		removeSavedGame: async (parent, { savedGames }, context) => {
			if (!context.user) throw new Error("Not authenticated");
			return await User.findByIdAndUpdate(
				context.user._id,
				{ $pull: { savedGames } },
				{ new: true }
			);
		},

		removeSavedTutorial: async (parent, { savedTutorials }, context) => {
			if (!context.user) throw new Error("Not authenticated");
			return await User.findByIdAndUpdate(
				context.user._id,
				{ $pull: { savedTutorials } },
				{ new: true }
			)
			.populate('savedTutorials')
		},

		uploadProfilePicture: async (_, { file }, { user }) => {
			if (!user) {
				throw AuthenticationError
			}

			const profilePictureUrl = file

			await User.findByIdAndUpdate(user._id, { profilePicture: profilePictureUrl })

			return {
				success: true,
				message: 'File uploaded and profile picture saved',
				profilePictureUrl
			}

		}
	},

}

module.exports = resolvers