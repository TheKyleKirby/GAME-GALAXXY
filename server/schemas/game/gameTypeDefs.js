const { gql } = require('apollo-server-express');

const typeDefs = gql`

  enum RatingsEnum{
  RP
  EC
  E	
  E10	
  T	
  M	
  AO
  }

  enum Platform{
    ATARI_2600
    DREAMCAST
    GAMECUBE
    GENESIS
    NES
    NINTENDO_3DS
    NINTENDO_DS
    NINTENDO_SWITCH
    NINTENDO_WII
    PLAYSTATION_2
    PLAYSTATION_3
    PLAYSTATION_4
    PLAYSTATION_5
    PSP
    SNES
    XBOX
    XBOX_360
    XBOX_ONE
    COMPUTER
    OTHER
  }


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

  type TestGame{
    websites: String
    url: String
    slug: String
    name: String
    id: Int
    age_ratings: [Rating]
    cover: GameCover
    platforms: [Int]
    similar_games: [Int]
    tags: [Int]

  }

  type GameCover {
    height: Int
    image_id: String
    url: String
    width: Int
  }

  type Rating {
    category: Int
    rating: RatingsEnum
  }

  type Query {
    gameByName(name: String!): [GameResultCard]
    gameById(id: ID!): TestGame
    gamesByEsrbRating(rating: Int!): [GameResultCard]
    gameCoverById(id: ID): GameCover
    gameAgeRating(id: ID): Rating
    wholeGameInfo(id: ID!): TestGame
  }
`;

module.exports = typeDefs;
