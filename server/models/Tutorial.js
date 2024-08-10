// Model for tutorial
const { Schema, model } = require('mongoose')

const commentSchema = new Schema({
  content: String,
  commenter: { type: Schema.Types.ObjectId, ref: 'User' }, // Reference to User schema if needed
  createdAt: { type: Date, default: Date.now }
})

const tutorialSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  game: {
    type: String,
    required: true
  },
  console: {
    type: String
  },
  content: {
    type: String,
    required: true
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
  comments: [commentSchema]
})




const Tutorial = model('Tutorial', tutorialSchema)

module.exports = Tutorial