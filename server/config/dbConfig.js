const mongoose = require('mongoose')
const connectDB = async () =>{
	const conn = await mongoose.connect(process.env.MONGO_URI)

	console.log('mongoDb connected'.bgGreen)
}

module.exports = connectDB