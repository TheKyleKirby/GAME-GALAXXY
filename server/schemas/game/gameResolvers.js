const axios = require('axios');

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
          return {
            id: game.id,
            name: game.name,
            slug: game.slug,
            cover: game.cover,
            platforms: game.platforms,
            url: game.url,
            tags: game.tags,
            similar_games: game.similar_games,
            esrb: game.age_ratings ? game.age_ratings.find((rating) => rating.category === 1)?.rating : null,
          };
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
  }
};

module.exports = resolvers;
