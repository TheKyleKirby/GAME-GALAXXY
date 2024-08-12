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
    // required: true
  },
  game: {
    type: String,
    // required: true
  },
  platform: {
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
  level: {
    type: String,
  },
  tags: {
    type: [String]
  },
  rating: {
    type: Number
  },
  youTubeLink:{
    type: String
  },
  comments: [commentSchema]
})




const Tutorial = model('Tutorial', tutorialSchema)

module.exports = Tutorial