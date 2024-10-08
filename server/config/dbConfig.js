require ("dotenv").config ({path:"../../.env"})
// console.log(process.env.MONGO_URI)
const mongoose = require('mongoose')
const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI)
		
		console.log(`MongoDB connected successfully`.bgBlue)
	} catch (error) {
		console.error(`Error connecting to MongoDB:${error.message}`.red)
		process.exit(1)
	}
}

module.exports = connectDB