// Model for tutorial
const { Schema, model } = require('mongoose')

const guideSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  game: {
    type: Schema.Types.ObjectId,
    ref: 'Game',
    required: true,
  },
  console: {
    type: String
  },
  content: {
    type: String,
    required: true,
  },
  belongsToGroup:{
    type: Boolean
  },
  groupBelongsTo: {
    type: String
  },
  section: {
    type: String,
  },
  tags: {
    type: [String]
  },
  rating: {
    type: Number
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
})

const Guide = model('Guide', guideSchema)

module.exports = Guide