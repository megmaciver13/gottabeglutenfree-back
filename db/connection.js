const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/gottabeglutenfree', { useMongoClient: true })

mongoose.Promise = Promise

module.exports = mongoose
