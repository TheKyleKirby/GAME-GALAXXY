const axios = require('axios');
const colors = require('colors');
const { JsonWebTokenError } = require('jsonwebtoken');

const ageRatingMap = {
  6: 'RP',
  7: 'EC',
  8: 'E',
  9: 'E10',
  10: 'T',
  11: 'M',
  12: 'AO'
}
const reverseAgeRatingMap = Object.fromEntries(
  Object.entries(ageRatingMap).map(([key, value]) => [value, Number(key)])
);


const resolvers = {
  Query: {
    gameByName: async (_, { name }) => {
      try {
        const response = await axios.post(
          'https://api.igdb.com/v4/games',
          `search "${name}"; fields id, name, slug, cover, platforms, url, tags, similar_games, age_ratings;`,
          {
            headers: {
              'Client-ID': process.env.IGDB_CLIENT_ID,
              Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`
            }
          }
        );

        console.log('IGDB API response for gameByName:', response.data);

        return response.data.map((game) => ({
          id: game.id,
          name: game.name,
          slug: game.slug,
          cover: game.cover,
          platforms: game.platforms,
          url: game.url,
          tags: game.tags,
          similar_games: game.similar_games,
          esrb: game.age_ratings ? game.age_ratings.find((rating) => rating.category === 1)?.rating : null,
        }));
      } catch (error) {
        console.error('Error fetching games by name from IGDB:', error.response ? error.response.data : error.message);
        throw new Error('Failed to fetch games by name from IGDB');
      }
    },

    gameById: async (_, { id }) => {
      try {
        const response = await axios.post(
          'https://api.igdb.com/v4/games',
          `fields id, name, slug, cover, platforms, url, tags, similar_games, age_ratings; where id = ${id};`,
          {
            headers: {
              'Client-ID': process.env.IGDB_CLIENT_ID,
              Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`
            }
          }
        );

        console.log('IGDB API response for gameById:', response.data);

        if (response.data.length > 0) {
          const game = response.data[0];

          const {url, slug, name, id, age_ratings, cover, platforms, similar_games, tags } = game

          return {
            url,
            slug,//use if we want to search by, or use in our endpoint(if going to another page, or clicking as an accordion)
            name,
            id,
            age_ratings,//have to make another request
            cover, //have to make another request
            platforms,//map through to find matching names => then map through to list in GameCards
            similar_games,//map through  to list in GameCards(limit to 3)
            tags//map through  to list in GameCards(limit to 3)
          }

        } else {
          return null;
        }
      } catch (error) {
        console.error('Error fetching game by ID from IGDB:', error.response ? error.response.data : error.message);
        throw new Error('Failed to fetch game by ID from IGDB');
      }
    },

    gamesByEsrbRating: async (_, { rating }) => {
      try {
        const response = await axios.post(
          'https://api.igdb.com/v4/games',
          `where age_ratings.rating = ${rating}; fields id, name, slug, cover, platforms, url, tags, similar_games, age_ratings;`,
          {
            headers: {
              'Client-ID': process.env.IGDB_CLIENT_ID,
              Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`
            }
          }
        );

        console.log('IGDB API response for gamesByEsrbRating:', response.data);

        // Loop through each game to fetch the ESRB rating details
        const gamesWithEsrb = response.data.map((game) => {
          return {
            ...game,
            esrb: rating,
          };
        });

        return gamesWithEsrb;
      } catch (error) {
        console.error('Error fetching games by ESRB rating from IGDB:', error.response ? error.response.data : error.message);
        throw new Error('Failed to fetch games by ESRB rating from IGDB');
      }
    },

    gameCoverById: async (_, {id}) => {
      try {
        const response = await axios.post(
        "https://api.igdb.com/v4/covers",
        `fields height,image_id,url,width; where id = ${id};`,
        {
          headers: {
            'Client-ID': process.env.IGDB_CLIENT_ID,
            Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`
          }
        })
        if (response.data.length > 0) {
          const cover = response.data[0];
          const {height,image_id,url,width} = cover
          return {
            height,
            image_id,
            url,
            width
          }
        }
        else {
          return null;
        }
      } catch (error) {
        console.error('Error fetching game by ID from IGDB:', error.response ? error.response.data : error.message);
        throw new Error('Failed to fetch game by ID from IGDB');
      }
    },

    gameAgeRating: async(_, {id}) =>{
          // search for age_rating
      try {
        const response = await axios.post(
          'https://api.igdb.com/v4/age_ratings',
          `fields category, rating; where id = ${id};`,
          {
            headers: {
              'Client-ID': process.env.IGDB_CLIENT_ID,
              Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`
            }
          }
        )

        console.log(`IGDB API response for Ratings: ${JSON.stringify(response.data)}`.blue)
  
        if (response.data.length > 0) {
          // todo need to make ratings an array to do age rating map through (maybe filter by category, prolly not.)
          const ratings = response.data[0]

          const { category, rating } = ratings
          const ageRatingEnum = ageRatingMap[rating] || null

console.log(`ratings : ${ratings.category}, ${ratings.rating}`.green)
          return {
            category,
            rating: ageRatingEnum
          }
        }
        else{
          return null
        }
      } catch (error) {
        console.log(`error getting rating ${error}`.red)
      }
    }
  }
}

module.exports = resolvers;


// Testing 

//* not working. trying to put it all together.
// wholeGameInfo: async(_, {id}) =>{
//   gameById: async (_, { id }) => {

//
    
//     const reverseAgeRatingMap = Object.fromEntries(
//       Object.entries(ageRatingMap).map(([key, value]) => [value, key])
//     )

//     try {
//       // Fetch game details
//       const gameResponse = axios.post(
//         'https://api.igdb.com/v4/games',
//         `fields id, name, slug, cover, platforms, url, tags, similar_games, age_ratings; where id = ${id};`,
//         {
//           headers: {
//             'Client-ID': process.env.IGDB_CLIENT_ID,
//             Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`
//           }
//         }
//       );

//       // Fetch game cover
//       const coverResponse = axios.post(
//         'https://api.igdb.com/v4/covers',
//         `fields height, image_id, url, width; where id = (select cover from games where id = ${id});`,
//         {
//           headers: {
//             'Client-ID': process.env.IGDB_CLIENT_ID,
//             Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`
//           }
//         }
//       );

//       // Fetch game age rating
//       const ageRatingResponse = axios.post(
//         'https://api.igdb.com/v4/age_ratings',
//         `fields category, rating; where id = (select age_ratings from games where id = ${id});`,
//         {
//           headers: {
//             'Client-ID': process.env.IGDB_CLIENT_ID,
//             Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`
//           }
//         }
//       );

//       // Await all the promises
//       const [gameData, coverData, ageRatingData] = await Promise.all([
//         gameResponse,
//         coverResponse,
//         ageRatingResponse
//       ]);

//       if (gameData.data.length > 0) {
//         const game = gameData.data[0];

//         // Extract game cover
//         const cover = coverData.data.length > 0 ? coverData.data[0] : null;

//         // Extract age ratings
//         const ratings = ageRatingData.data.map(rating => ({
//           category: rating.category,
//           rating: reverseAgeRatingMap[rating.rating] || 'Unknown',
//         }));
//         const { url, slug, name, id, similar_games, tags } = game
//         return {

//           url: url,
//           slug: slug,
//           name: name,
//           id: id,
//           age_ratings: ratings,
//           cover,
//           platforms: platforms,
//           similar_: similar_games,
//           tags: tags

//         }
//       } else {
//         return null
//       }
//     } catch (error) {
//       console.error('Error fetching game by ID from IGDB:', error.response ? error.response.data : error.message)
//       throw new Error('Failed to fetch game by ID from IGDB')
//     }
//   }

// }
