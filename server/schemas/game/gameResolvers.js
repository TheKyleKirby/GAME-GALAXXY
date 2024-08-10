const axios = require('axios');

const resolvers = {
  Query: {
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
        console.error('Error fetching games from IGDB:', error.response ? error.response.data : error.message);
        throw new Error('Failed to fetch games from IGDB');
      }
    },

    gameById: async (_, { id }) => {
      try {
        const response = await axios.post(
          'https://api.igdb.com/v4/games',
          `fields id, name, slug, cover, platforms, url, tags, similar_games; where id = ${id};`,
          {
            headers: {
              'Client-ID': process.env.IGDB_CLIENT_ID,
              Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`
            }
          }
        );

        console.log('IGDB API response for gameById:', response.data);

        if (response.data.length > 0) {
          const game = response.data[0]; // There should only be one game with this ID
          return {
            id: game.id,
            name: game.name,
            slug: game.slug,
            cover: game.cover,
            platforms: game.platforms,
            url: game.url,
            tags: game.tags,
            similar_games: game.similar_games
          };
        } else {
          return null;
        }
      } catch (error) {
        console.error('Error fetching game by ID from IGDB:', error.response ? error.response.data : error.message);
        throw new Error('Failed to fetch game by ID from IGDB');
      }
    }
  }
};

module.exports = resolvers;
