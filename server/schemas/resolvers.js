const { User, Guide, Game } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const axios = require("axios");
// Added the query for gameByName. I nested it inside the Query objext that was already there. -Tristan
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
		},
		// fetch the profile of the currently authenticated user - A user wants to view or edit their own profile information. (add populate profile or populate something else ?)
		me: async (parent, args, context) => {
			if (context.user) {
			  return Profile.findOne({ _id: context.user._id });
			}  
			throw AuthenticationError;
		},
		// to view the profile of a specific user by providing their profile ID. (maybe change this to username...?)
		user: async (parent, { userId }) => {
			return User.findOne({ _id: userId });
		},

    gameByName: async (_, { name }) => {
      try {
        const response = await axios.post(
          'https://api.igdb.com/v4/games',
          `search "${name}"; fields id, name, slug, cover, platforms, url, tags, similar_games;`,
          {
            headers: {
              'Client-ID': process.env.IGDB_CLIENT_ID,
              Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`
            }
          }
        );
        console.log('IGDB API response:', response.data);

        return response.data.map(game => ({
          id: game.id,
          name: game.name,
          slug: game.slug,
          cover: game.cover,
          platforms: game.platforms,
          url: game.url,
          tags: game.tags,
          similar_games: game.similar_games
        }));
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch games from IGDB');
      }
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({
        username,
        email,
        password,
      });
      // if valid token, user will be created
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
  },
};

module.exports = resolvers;
