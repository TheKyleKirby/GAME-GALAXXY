const { Schema, model } = require('mongoose')

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	}	

})

// salt rounds - set up presave middleware to create password
userSchema.pre('sasve', async function (next) {
	if (this.isNew || this.isModified('password')) {
		const saltRounds = 10
		this.password = await bcrypt.hash(this.password, saltRounds)
	}
	next()
})

// bcrypt used for the token
userSchema.method.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password)
}

const User = model('User', userSchema)

module.exports = User