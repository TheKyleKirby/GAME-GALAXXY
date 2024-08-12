const axios = require('axios'); 
const colors = require('colors');
const { JsonWebTokenError } = require('jsonwebtoken');

const consoleIds = {
  ATARI_2600: 59,
  DREAMCAST: 23,
  GAMECUBE: 21,
  GENESIS: 29,
  NES: 18,
  NINTENDO_3DS: 37,
  NINTENDO_DS: 20,
  NINTENDO_SWITCH: 130,
  NINTENDO_WII: 5,
  PLAYSTATION_2: 8,
  PLAYSTATION_3: 9,
  PLAYSTATION_4: 48,
  PLAYSTATION_5: 167,
  PSP: 38,
  SNES: 19,
  XBOX: 11,
  XBOX_360: 12,
  XBOX_ONE: 49,
  COMPUTER: 6
};

const ageRatingMap = {
  6: 'RP',
  7: 'EC',
  8: 'E',
  9: 'E10',
  10: 'T',
  11: 'M',
  12: 'AO'
};

const reverseAgeRatingMap = Object.fromEntries(
  Object.entries(ageRatingMap).map(([key, value]) => [Number(key), value])
);

const reverseConsoleIds = Object.fromEntries(
  Object.entries(consoleIds).map(([key, value]) => [value, key])
);

const gameResolvers = {
  Query: {
    wholeGameInfo: async (_, { searchString }) => {
      try {
        // Fetch game details
        const gameResponse = await axios.post(
          'https://api.igdb.com/v4/games',
          `search "${searchString}"; fields id, name, slug, cover, platforms, url, tags, similar_games, age_ratings; limit 10;`,
          {
            headers: {
              'Client-ID': process.env.IGDB_CLIENT_ID,
              Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`
            }
          }
        );

        if (gameResponse.data.length === 0) {
          throw new Error('Game not found');
        }

        const game = gameResponse.data[0];

        // Debugging: Inspect the age ratings IDs
        // console.log('Age Ratings IDs:', game.age_ratings);

        // Fetch game cover directly using the cover ID from gameResponse
        const coverId = game.cover;
        let cover = null;
        if (coverId) {
          const coverResponse = await axios.post(
            'https://api.igdb.com/v4/covers',
            `fields height, image_id, url, width; where id = ${coverId};`,
            {
              headers: {
                'Client-ID': process.env.IGDB_CLIENT_ID,
                Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`
              }
            }
          );
          cover = coverResponse.data.length > 0 ? coverResponse.data[0] : null;
        }

        // Map over the age_ratings array to fetch and convert the ratings
        let ratings = [];
        if (game.age_ratings && game.age_ratings.length > 0) {
          ratings = await Promise.all(
            game.age_ratings.map(async (ageRatingId) => {
              const ageRatingResponse = await axios.post(
                'https://api.igdb.com/v4/age_ratings',
                `fields category, rating; where id = ${ageRatingId};`,
                {
                  headers: {
                    'Client-ID': process.env.IGDB_CLIENT_ID,
                    Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`
                  }
                }
              );

              // Debugging: Inspect the response for each age rating ID
              // console.log('Age Rating Response:', ageRatingResponse.data);

              if (ageRatingResponse.data.length > 0) {
                const rating = ageRatingResponse.data[0];
                const mappedRating = reverseAgeRatingMap[rating.rating] || null;
                
                // Debugging: Inspect the mapping results
                // console.log('Mapped Rating:', mappedRating, 'Original Rating:', rating.rating);

                return mappedRating ? { category: rating.category, rating: mappedRating } : null;
              } else {
                return null;
              }
            })
          );
        }

        // Filter out any `null` ratings from the final response
        ratings = ratings.filter(rating => rating !== null);

        // Map platform IDs to platform names using consoleIds and filter out unknowns and nulls
        const platformNames = game.platforms
          .map(platformId => reverseConsoleIds[platformId])
          .filter(platformName => platformName !== undefined && platformName !== null);

        const { url, slug, name, id: gameId, similar_games, tags } = game;

        return {
          url: url,
          slug: slug,
          name: name,
          id: gameId,
          age_ratings: ratings, // Now should only contain valid ratings
          cover: cover,
          platforms: platformNames, // Should now only contain valid platforms
          similar_games: similar_games,
          tags: tags
        };

      } catch (error) {
        console.error('Error fetching game by ID from IGDB:'.red, error.response ? error.response.data : error.message);
        throw new Error('Failed to fetch game by ID from IGDB');
      }
    }
  }
};

module.exports = gameResolvers;
