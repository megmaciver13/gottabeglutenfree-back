const mongoose = require('./connection')

const DirectionSchema = new mongoose.Schema({
  text: String,
  imageUrl: String
})

const PostSchema = new mongoose.Schema({
  title: String,
  date: { type: Date, default: Date.now },
  featuredImage: String,
  introText: String,
  additionalImage: String,
  yieldQuantity: String,
  ingredients: [],
  finalImage: String,
  finalText: String,
  directions: [DirectionSchema]
})

const Direction = mongoose.model('DirectionList', DirectionSchema)
const Post = mongoose.model('Post', PostSchema)

module.exports = {
  Direction: Direction,
  Post: Post
}
