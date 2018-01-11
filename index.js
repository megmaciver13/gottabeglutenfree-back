const express = require('express')
const cors = require('cors')
const parser = require('body-parser')

const app = express()

const Schema = require('./db/schema')

const Post = Schema.Post

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

app.post('/posts', (req, res) => {
  console.log(req.body)
  Post.create(req.body)
    .then(post => {
      res.json(post)
    })
    .catch(err => console.log(err))
})

app.put('/posts/:title', (req, res) => {
  console.log(req.body)
  Post.findOneAndUpdate({title: req.params.title}, req.body)
    .then(post => {
      res.json(post)
    })
    .catch(err => console.log(err))
})

app.delete('/posts/:title', (req, res) => {
  console.log(req.params)
  Post.findOneAndRemove({title: req.params.title})
    .then(work => {
      res.json(work)
    })
    .catch(err => console.log(err))
})

app.get('/posts/:title', (req, res) => {
  Post.findOne({title: req.params.title})
    .then(post => {
      res.json(post)
    })
    .catch(err => console.log(err))
})

app.listen(3001)
