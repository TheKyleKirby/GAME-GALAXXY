const { User, Tutorial } = require("../../models");
const { signToken, AuthenticationError } = require("../../utils/auth");

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
			const existingUsername = await User.findOne({ username });
				if (existingUsername) {
				throw new Error('Username is already taken.');
				}

			// todo validate email is not taken
			const existingEmail = await User.findOne({ email });
				if (existingEmail) {
				throw new Error('Email is already taken.');
				}

			// todo validate email is in email format
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

	// lets users edit their profile
		editProfile: async (parent, { user }, context) => {
			if (!context.user) throw new Error("Not authenticated");
			return await User.findByIdAndUpdate(context.user._id, user, { new: true });
		},

		addFriend: async (parent, { friends }, context) => {
			if (!context.user) throw new Error("Not authenticated");
			return await User.findByIdAndUpdate(
			  context.user._id,
			  { $addToSet: { friends } },
			  { new: true }
			);
		},

		followCreator: async (parent, { creatorsFollowing }, context) => {
			if (!context.user) throw new Error("Not authenticated");
			return await User.findByIdAndUpdate(
			  context.user._id,
			  { $addToSet: { creatorsFollowing } },
			  { new: true }
			);
		},

		removeFriend: async (parent, { friends }, context) => {
			if (!context.user) throw new Error("Not authenticated");
			return await User.findByIdAndUpdate(
			  context.user._id,
			  { $pull: { friends } },
			  { new: true }
			);
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
			);
		},

		saveTutorial: async (parent, { savedTutorials }, context) => {
			if (!context.user) throw new Error("Not authenticated");
			return await User.findByIdAndUpdate(
			  context.user._id,
			  { $addToSet: { savedTutorials } },
			  { new: true }
			);
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
			);
		},

	}
}

module.exports = resolvers