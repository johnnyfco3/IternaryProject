const express = require('express')

const usersController = require('./controllers/users')
const postsController = require('./controllers/posts')
const friendsController = require('./controllers/friends')
const stopsController = require('./controllers/stops')
const flightsController = require('./controllers/flights')
const agendasController = require('./controllers/agendas')
const commentsController = require('./controllers/comments')
const adventuresController = require('./controllers/adventures')

const app = express()
const port = 3000

app
  .get('/', (req, res) => {
    res.send('Hello World!')
  })
  .use('/users', usersController)
  .use('/posts', postsController)
  .use('/friends', friendsController)
  .use('/stops', stopsController)
  .use('/flights', flightsController)
  .use('/agendas', agendasController)
  .use('/comments', commentsController)
  .use('/adventures', adventuresController)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})