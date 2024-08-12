const { gql } = require('apollo-server-express');

// const typeDefs = gql`
//   type SearchGameResult {
//     id: ID!
//     name: String!
//     cover: String
//     slug: String
//   }

//   type User {
//     id: ID!
//     username: String!
//     avatar: String
//   }

//   type SearchTutorial {
//     id: ID!
//     title: String!
//     content: String!
//     author: String!  // Ensuring proper comment format and no stray slashes
//   }

//   type SearchResult {
//     users: [User]
//     games: [SearchGameResult]
//     tutorials: [SearchTutorial]
//   }

//   input SearchInput {
//     query: String!
//   }

//   type Query {
//     mainSearch(search: SearchInput): SearchResult
//   }
// `;

// module.exports = typeDefs;


const typeDefs = gql`
	type SearchResults {
		users: [User]
		tutorials: [Tutorial]
		games: [TestGame]
		# tags: [Tutorial]
	}
	input SearchInput {
		searchString: String!
		# tags: String 
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
		mainSearch(searchString: String!): SearchResults


		filteredTutorials(filter: TutorialFilterInput): Tutorial
		filteredGames(filter: GameFilterInput): [GameResultCard]
	}
`


module.exports = typeDefs