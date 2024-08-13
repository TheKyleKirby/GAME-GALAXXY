const { gql } = require('apollo-server-express');

const typeDefs = gql`

  enum RatingsEnum {
    RP
    EC
    E
    E10
    T
    M
    AO
  }

enum Platform {
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
    MAC       
    LINUX     
    OTHER
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

  type WholeGameInfo {
    id: Int
    name: String
    slug: String
    cover: GameCover
    platforms: [Platform]
    url: String
    tags: [Int]
    similar_games: [Int]
    age_ratings: [Rating]
  }

  type GameResultCard {
    id: ID
    name: String
    slug: String
    cover: Int
    platforms: [Int]
    url: String
    tags: [Int]
    similar_games: [Int]
    age_rating: Int
  }

  type TestGame {
    websites: String
    url: String
    slug: String
    name: String
    id: Int
    age_ratings: [Rating]
    cover: GameCover
    platforms: [Platform]  
    similar_games: [Int]
    tags: [Int]
  }

  type Query {
    gameByName(name: String!): [GameResultCard]
    gameById(id: [ID]): [TestGame]
    gamesByEsrbRating(rating: Int!): [GameResultCard]
    gameCoverById(id: ID): GameCover
    gameAgeRating(id: ID): Rating
    wholeGameInfo(id: Int!): WholeGameInfo  # Update this to take an ID and return WholeGameInfo
  }
`;

module.exports = typeDefs;
