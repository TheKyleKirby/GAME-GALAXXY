const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers')
module.exports = { typeDefs, resolvers };


// *alteration in server once all separated and set up.
// const user = require('./schemas/user') DONE
// const game = require('./schemas/game')
// const guide = require('./schemas/guide')
// const search = require('./schemas/search)

// const typeDefs = mergeTypeDefs([user.userTypeDefs, game.typeDefs, guide.typeDefs])
// const resolvers = mergeResolvers([user.userResolvers, game.resolvers, guide.resolvers])
