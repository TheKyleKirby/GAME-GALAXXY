const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type GameResultCard {
    id: ID!
    name: String!
    slug: String!
    cover: Int
    platforms: [Int]
    url: String
    tags: [Int]
    similar_games: [Int]
    esrb: Int
  }

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
    esrb: Int
  }

  type Query {
    gameByName(name: String!): [GameResultCard]
    gameById(id: ID!): WholeGame
    gamesByEsrbRating(rating: Int!): [GameResultCard]
  }
`;

module.exports = typeDefs;
