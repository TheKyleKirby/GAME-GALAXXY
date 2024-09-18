const axios = require('axios');
const { User, Tutorial } = require('../../models');
const gameResolvers = require('../game/gameResolvers');

const searchResolvers = {
  Query: {
    mainSearch: async (parent, { searchString }) => {
      const query = searchString;
      
      let users = [];
      let tutorials = [];
      let games = [];

      try {
        // Search for users
        users = await User.find({ username: new RegExp(query, 'i') })

        const userIds = users.map(user => user._id)

        // Search for tutorials
        tutorials = await Tutorial.find({
          $or: [ 
            {title: new RegExp(query, 'i') }, 
            {game: new RegExp(query, 'i')},
            {author: {$in: userIds }}
          ]
        })

        // Fetch game ID using search string
        const gameId = await fetchGameIdBySearchString(query);

        if (gameId) {
          // Fetch detailed game info using the game ID
          const gameInfo = await gameResolvers.Query.wholeGameInfo(null, { id: gameId });
          games.push(gameInfo);
        }

      } catch (error) {
        console.log(`error in main search ${error}`.red);
      }


      return {
        users,
        tutorials,
        games,
      };
    },
  },
};

// Function to fetch game ID using the search string
async function fetchGameIdBySearchString(searchString) {
  try {
    const response = await axios.post(
      'https://api.igdb.com/v4/games',
      `fields id; search "${searchString}"; limit 1;`,
      {
        headers: {
          'Client-ID': process.env.IGDB_CLIENT_ID,
          Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`,
        },
      }
    );

    if (response.data && response.data.length > 0) {
      return response.data[0].id;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching game ID:', error);
    return null;
  }
}

module.exports = searchResolvers;




	
	// 	mainSearch: async (_, { search }) => {
	// 		const { query } = search;
	// 		const results = {
	// 			users: [],
	// 			games: [],
	// 			tutorials: []
	// 		};

	// 		// Search Users
	// 		results.users = await User.find({ username: new RegExp(query, 'i') });

	// 		// Search Games via IGDB API
	// 		try {
	// 			const gameResponse = await axios.post(
	// 				'https://api.igdb.com/v4/games',
	// 				`search "${query}"; fields id, name, slug, cover;`,
	// 				{
	// 					headers: {
	// 						'Client-ID': process.env.IGDB_CLIENT_ID,
	// 						Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`
	// 					}
	// 				}
	// 			);
	// 			results.games = gameResponse.data.map(game => ({
	// 				id: game.id,
	// 				name: game.name,
	// 				slug: game.slug,
	// 				cover: game.cover,
	// 			}));
	// 		} catch (error) {
	// 			console.error('Error searching games:', error.response ? error.response.data : error.message);
	// 		}

	// 		// Search Tutorials
	// 		results.tutorials = await Tutorial.find({ title: new RegExp(query, 'i') }).lean();

	// 		// Map to SearchTutorial type
	// 		results.tutorials = results.tutorials.map(tutorial => ({
	// 			id: tutorial._id,
	// 			title: tutorial.title,
	// 			content: tutorial.content,
	// 			author: tutorial.author.toString()  // Convert author to string if necessary
	// 		}));

	// 		return results;
	// 	}
	// 