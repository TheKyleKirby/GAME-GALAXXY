// const { User, Tutorial } = require('../../models');
// const axios = require('axios');

// const searchResolvers = {
//   Query: {
//     mainSearch: async (_, { search }) => {
//       const { query } = search;
//       const results = {
//         users: [],
//         games: [],
//         tutorials: []
//       };

//       // Search Users
//       results.users = await User.find({ username: new RegExp(query, 'i') });

//       // Search Games via IGDB API
//       try {
//         const gameResponse = await axios.post(
//           'https://api.igdb.com/v4/games',
//           `search "${query}"; fields id, name, slug, cover;`,
//           {
//             headers: {
//               'Client-ID': process.env.IGDB_CLIENT_ID,
//               Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`
//             }
//           }
//         );
//         results.games = gameResponse.data.map(game => ({
//           id: game.id,
//           name: game.name,
//           slug: game.slug,
//           cover: game.cover,
//         }));
//       } catch (error) {
//         console.error('Error searching games:', error.response ? error.response.data : error.message);
//       }

//       // Search Tutorials
//       results.tutorials = await Tutorial.find({ title: new RegExp(query, 'i') }).lean();

//       // Map to SearchTutorial type
//       results.tutorials = results.tutorials.map(tutorial => ({
//         id: tutorial._id,
//         title: tutorial.title,
//         content: tutorial.content,
//         author: tutorial.author.toString()  // Convert author to string if necessary
//       }));

//       return results;
//     }
//   }
// };

// module.exports = searchResolvers;
