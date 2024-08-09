	const typeDefs = `
	
	#Everything we can get basically
	type WholeGame {
		id: Int
		category: Int
		cover: Int
		created_at: Int
		first_release_date: Int
		name: String
		parent_game: Int
		slug: String
		updated_at: Int
		url: String
		checksum: String
		language_supports: [Int]
		websites: [Int]
		themes: [Int]
		tags: [Int]
		similar_games: [Int]
		screenshots: [Int]
		release_dates: [Int]
		player_perspectives: [Int]
		platforms: [Int]
		keywords: [Int]
		involved_companies: [Int]
		genres: [Int]
		game_modes: [Int]
		alternative_names: [Int] 
	}



	type GameResultCard {
		id: ID
		name: String
		slug: String
		cover: [Int]
		platforms: [Int]
		url: String
		tags: [Int]
		similar_games: [Int]
	}

	type Query {
		gameById(id: ID!): GameResultCard
		gameByName(name: String!): [GameResultCard]
		gameBySlug(slug: String!): GameResultCard
	}
`

// ?field for ESRB?

module.exports = typeDefs