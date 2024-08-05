require ('dotenv').config()
const express = require('express')
const connectDB = require('./config/dbConfig')
const app = express()
const PORT = process.env.PORT || 3001
const { graphqlHTTP } = require('express-graphql')
const { typeDefs, resolvers } = require('./schemas')
const colors = require('colors')
const cors = require('cors')

// for token
const { authMiddleware } = require('./utils/auth');
app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));


connectDB()

app.use(cors())
app.use('/graphql', graphqlHTTP({
	typeDefs,
	resolvers,
	graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(PORT, console.log(`server running on http://localhost:${PORT}`.bgCyan))
