const {mergeTypeDefs, mergeResolvers} = require('@graphql-tools/merge')


const user = require('./user')
const game = require('./game')
const tutorial = require('./tutorial')
const search = require('./search')

const typeDefs = mergeTypeDefs([user.userTypeDefs, game.gameTypeDefs, tutorial.tutorialTypeDefs, search.searchTypeDefs])
const resolvers = mergeResolvers([user.userResolvers, game.gameResolvers, tutorial.tutorialResolvers, search.searchResolvers])

module.exports = { typeDefs, resolvers }

