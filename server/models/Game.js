const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    genre: {
        type: String,
    },
    releaseDate: {
        type: Date,
    },
    rating: {
        type: Number
    },
    guides: [{
        type: Schema.Types.ObjectId,
        ref: 'Guide'
    }]

})

const Game = model('Game', gameSchema);

module.exports = Game;
