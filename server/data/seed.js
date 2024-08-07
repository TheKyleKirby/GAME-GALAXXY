require('dotenv').config()
const color = require('colors')
const mongoose = require('mongoose')
const connectDB = require('../config/dbConfig')
const User = require('../models/User')
const Guide = require('../models/Guide')

const userData = require('./sampleUsers.json')
const guideData = require('./sampleGuide.json')

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
		console.log(`Users Seeded!`.magenta)
		return seededUsers
		}

		
		const seedGuides = async (guidesArray, usersArray) =>{
			await cleanDB('Guide', 'guides')

			const guideObjects = guidesArray.map((guide, index) => ({
				title: guide.title,
				author: usersArray[index]._id,
				game: guide.game,
				console: guide.console,
				content: guide.content,
				tags: guide.tags,
				rating: guide.rating
			}))

			const insertedGuides = await Guide.insertMany(guideObjects)
			const populatedGuides = await Guide.find({}).populate('author').exec()
			console.log(populatedGuides)
			console.log(`Guides seeded!`.cyan)
		}

		const seededUsers = await seedUsers(userData);
		await seedGuides(guideData, seededUsers);

		process.exit(0)
	} catch (err) {
		console.error('Error seeding database:', err)
		process.exit(1)
	}
};

seedDatabase()