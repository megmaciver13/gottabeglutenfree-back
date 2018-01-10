const express = require('express')
const mongoose = require('./db/schema')
const cors = require('cors')
const parser = require('body-parser')

const app = express()

const Schema = require('./db/schema')

const Post = Schema.Post
const DirectionList = Schema.DirectionList

app.use(cors())
app.use(parser.json())

app.get('/', (req, res) => {
  res.redirect('/posts')
})

app.get('/posts', (req, res) => {
  Post.find()
    .then(posts => {
      res.json(posts)
    })
    .catch(err => console.log(err))
})

app.listen(3001)
