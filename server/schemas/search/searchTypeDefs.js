// const { gql } = require('apollo-server-express');

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
