const axios = require('axios')

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
				console.error(error);
				throw new Error('Failed to fetch games from IGDB');
			}
		}
	}
}


module.exports = resolvers