const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
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
    },
    bioText: {
        type: String,
    },
    topGames: {
        type: String,
    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    creatorsFollowing: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    savedTutorials: [{
        type: Schema.Types.ObjectId,
        ref: 'Tutorial'
    }],
    createdTutorials: [{
        type: Schema.Types.ObjectId,
        ref: 'Tutorial'
    }],
    isCreator: {
        type: Boolean
    },
    profilePicture: {
        type: String
    }, 
    savedGames: [{
        type: Number
    }]
});

// Salt rounds - set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

// Bcrypt used for the token
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
}

const User = model('User', userSchema);

module.exports = User;
