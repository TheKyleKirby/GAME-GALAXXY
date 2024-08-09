require('dotenv').config()
const color = require('colors')
const mongoose = require('mongoose')
const connectDB = require('../config/dbConfig')
const User = require('../models/User')
const Tutorial = require('../models/Tutorial')

const userData = require('./sampleUsers.json')
const tutorialData = require('./sampleTutorial.json')

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

		const seedUsers = async (userData) =>{
			await cleanDB('User', 'users')

			const seededUsers = await User.insertMany(userData)
		console.log(`Users Seeded! ${seededUsers}`.magenta)
		return seededUsers
		}

		
		const seedTutorials = async (tutorialsArray, usersArray) =>{
			await cleanDB('Tutorial', 'tutorials')

			const tutorialObjects = tutorialsArray.map((tutorial, index) => ({
				title: tutorial.title,
				author: usersArray[index]._id,
				game: tutorial.game,
				console: tutorial.console,
				content: tutorial.content,
				tags: tutorial.tags,
				rating: tutorial.rating
			}))

			const insertedTutorials = await Tutorial.insertMany(tutorialObjects)
			const populatedTutorials = await Tutorial.find({}).populate('author').exec()
			console.log(populatedTutorials)
			console.log(`Tutorials seeded!${insertedTutorials}`.cyan)
			return insertedTutorials
		}

		const seededUsers = await seedUsers(userData)
		await seedTutorials(tutorialData, seededUsers)

		process.exit(0)
	} catch (err) {
		console.error('Error seeding database:', err)
		process.exit(1)
	}
};

seedDatabase()