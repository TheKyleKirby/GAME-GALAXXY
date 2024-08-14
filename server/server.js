require ('dotenv').config()
const express = require('express')
const { ApolloServer } =require('@apollo/server')  
const { expressMiddleware } = require('@apollo/server/express4')
const path = require('path')
const fs = require('fs')
const { authMiddleware } = require('./utils/auth');
const connectDB = require('./config/dbConfig')
const { typeDefs, resolvers } = require('./schemas')
const colors = require('colors')
const cors = require('cors')

// todo, this is not working right...need to read more.
// const graphqlUploadExpress = require('graphql-upload/public/graphqlUploadExpress.js')

const PORT = process.env.PORT || 3001
const app = express()
const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: process.env.NODE_ENV !== 'production',
    playground: process.env.NODE_ENV !== 'production',
	context: authMiddleware
})



const startApolloServer = async () =>{
	await server.start()

	
	app.use(express.urlencoded({ extended: true }))
	app.use(express.json())
	app.use(cors())

	// app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 1 }))
	app.use('/graphql', expressMiddleware(server, {context: authMiddleware}))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
	  });

	if (process.env.NODE_ENV === 'production') {
		app.use(express.static(path.join(__dirname, '../client/dist')));
	}

	app.listen(PORT, () =>{
		console.log(`server running on http://localhost:${PORT}`.bgCyan)
		console.log(`Use GraphQL at http://localhost:${PORT}/graphql`.bgBlue)
		})

}
connectDB().then(() => startApolloServer())
