// Model for tutorial
const { Schema, model } = require('mongoose')

const guideSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  game: {
    type: Schema.Types.ObjectId,
    ref: 'Game',
    required: true,
  },
  
})

const Guide = model('Guide', guideSchema)

module.exports = Guide