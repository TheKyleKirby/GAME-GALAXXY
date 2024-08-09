const typeDefs = `
	type SearchResults {
		users: [User]
		games: [GameResultCard]
		tutorials: [Tutorial]
		tags: [Tutorial]
	}

	input SearchInput {
		users: String  
		games: String  
		tutorials: String  
		tags: String 
	}

	input TutorialFilterInput {
		ids: [ID]!
		console: String#console #going to do console enum
		rating: Float
		game: String
		author: String #create drop down of where all users where isCreator===true
		}

	input GameFilterInput {
		ids: [ID]!
		console: String #going to make console enum
		rating: Float
		ESRB: Int #make ESRB enum
	}

	type Query {
		mainSearch(search: SearchInput): [SearchResults]
		filteredTutorials(filter: TutorialFilterInput): [Tutorial]
		filteredGames(filter: GameFilterInput): [GameResultCard]
	}
`


module.exports = typeDefs