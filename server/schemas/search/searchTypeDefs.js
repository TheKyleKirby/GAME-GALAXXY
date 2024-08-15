const searchTypeDefs = `
	type SearchResults {
		users: [User]
		tutorials: [Tutorial]
		games: [TestGame]
	
	}
	input SearchInput {
		searchString: String!
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
		mainSearch(searchString: String): SearchResults


		filteredTutorials(filter: TutorialFilterInput): Tutorial
		filteredGames(filter: GameFilterInput): [GameResultCard]
	}
`

module.exports = searchTypeDefs