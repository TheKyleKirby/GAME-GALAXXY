const axios = require("axios");

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
  COMPUTER: 6,
  MAC: 14,
  LINUX: 3,
};

const ageRatingMap = {
  6: "RP",
  7: "EC",
  8: "E",
  9: "E10",
  10: "T",
  11: "M",
  12: "AO",
};

const reverseAgeRatingMap = Object.fromEntries(
  Object.entries(ageRatingMap).map(([key, value]) => [Number(key), value])
);

const reverseConsoleIds = Object.fromEntries(
  Object.entries(consoleIds).map(([key, value]) => [value, key])
);

const gameResolvers = {
  Query: {
    gameByName: async (_, { name }) => {
      try {
        const response = await axios.post(
          "https://api.igdb.com/v4/games",
          `fields id, name, slug, cover.url, platforms, url, tags, similar_games, age_ratings; search "${name}";`,
          {
            headers: {
              "Client-ID": process.env.IGDB_CLIENT_ID,
              Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`,
            },
          }
        );

        if (!response.data || response.data.length === 0) {
          throw new Error("No games found with the provided name");
        }

        return response.data.map((game) => {
          const platforms = game.platforms
            ?.map((platformId) => reverseConsoleIds[platformId])
            .filter(Boolean);
          const ageRatings = game.age_ratings?.map((rating) => ({
            category: rating.category,
            rating: reverseAgeRatingMap[rating.rating],
          }));

          return {
            id: game.id,
            name: game.name,
            slug: game.slug,
            cover: game.cover ? { url: game.cover.url } : null,
            platforms,
            url: game.url,
            tags: game.tags,
            similar_games: game.similar_games,
            age_ratings: ageRatings,
          };
        });
      } catch (error) {
        console.error("Error fetching game by name:", error);
        throw new Error("Failed to fetch game by name");
      }
    },
    wholeGameInfo: async (_, { id }) => {
      if (!id) {
        throw new Error("Game ID is required");
      }

      try {
        const response = await axios.post(
          "https://api.igdb.com/v4/games",
          `fields id, name, slug, cover.url, platforms, url, tags, similar_games, age_ratings; where id = ${id};`,
          {
            headers: {
              "Client-ID": process.env.IGDB_CLIENT_ID,
              Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`,
            },
          }
        );

        if (!response.data || response.data.length === 0) {
          throw new Error("No game found with the provided ID");
        }

        const game = response.data[0];

        // Map platform IDs to platform names using reverseConsoleIds
        const platformNames = game.platforms
          ?.map((platformId) => reverseConsoleIds[platformId])
          .filter(Boolean);

        return {
          id: game.id,
          name: game.name,
          slug: game.slug,
          cover: game.cover ? { url: game.cover.url } : null,
          platforms: platformNames,
          url: game.url,
          tags: game.tags,
          similar_games: game.similar_games,
          age_ratings: game.age_ratings.map((rating) => ({
            category: rating.category,
            rating: reverseAgeRatingMap[rating.rating],
          })),
        };
      } catch (error) {
        console.error("Error fetching game info:", error);
        throw new Error("Failed to fetch game info");
      }
    },
  },
};

module.exports = gameResolvers;
