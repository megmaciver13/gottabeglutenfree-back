const mongoose = require('./connection')

const DirectionListSchema = new mongoose.Schema({
  stepOne: {
    text: String,
    imageUrl: String
  },
  stepTwo: {
    text: String,
    imageUrl: String
  },
  stepThree: {
    text: String,
    imageUrl: String
  },
  stepFour: {
    text: String,
    imageUrl: String
  },
  stepFive: {
    text: String,
    imageUrl: String
  },
  stepSix: {
    text: String,
    imageUrl: String
  },
  stepSeven: {
    text: String,
    imageUrl: String
  },
  stepEight: {
    text: String,
    imageUrl: String
  },
  stepNine: {
    text: String,
    imageUrl: String
  },
  stepTen: {
    text: String,
    imageUrl: String
  },
  stepEleven: {
    text: String,
    imageUrl: String
  },
  stepTwelve: {
    text: String,
    imageUrl: String
  }
})

const PostSchema = new mongoose.Schema({
  title: String,
  date: { type: Date, default: Date.now },
  featuredImage: String,
  introText: String,
  yieldQuantity: String,
  ingredients: [],
  finalImage: String,
  finalText: String,
  directions: [DirectionListSchema]
})

const DirectionList = mongoose.model('DirectionList', DirectionListSchema)
const Post = mongoose.model('Post', PostSchema)

module.exports = {
  DirectionList,
  Post
}
