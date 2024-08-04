const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    genre: {
        type: String,
        require: true,
    },
    releaseDate: {
        type: Date,
        require: true,
    },

});

const Game = model('Game', gameSchema);

module.exports - Game;
