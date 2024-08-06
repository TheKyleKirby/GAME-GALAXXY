require('dotenv').config()
const mongoose = require('mongoose')
const connectDB = require('../config/dbConfig')
const User = require('../models/User')

const userData = require('./sampleUsers.json')

const cleanDB = async (modelName, collectionName) => {
	try {
		const model = mongoose.model(modelName)
		let modelExists = await mongoose.connection.db.listCollections({ name: collectionName }).toArray()


		if (modelExists.length) {
			await mongoose.connection.db.dropCollection(collectionName)
		}
	} catch (err) {
		throw err
	}
}


const seedDatabase = async () => {
	try {
		await connectDB()

		await cleanDB('User', 'users')

		await User.insertMany(userData)

		console.log('Users seeded!')
		process.exit(0)
	} catch (err) {
		console.error('Error seeding database:', err)
		process.exit(1)
	}
};

seedDatabase()