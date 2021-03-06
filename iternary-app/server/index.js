require("dotenv").config()
const express = require('express')
const path = require('path')

const usersController = require('./controllers/users')
const postsController = require('./controllers/posts')
const friendsController = require('./controllers/friends')
const stopsController = require('./controllers/stops')
const flightsController = require('./controllers/flights')
const agendasController = require('./controllers/agendas')
const commentsController = require('./controllers/comments')
const adventuresController = require('./controllers/adventures')

const app = express()
const port = process.env.PORT || 3001

app

  .use('/', express.static(path.join(__dirname, '/../build/')))
  .use(express.json())
  .use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTIONS");  
    next();
  })

  .get('/api/', (req, res) => {
    res.send('Hello World!')
  })

  .use('/api/users', usersController)
  .use('/api/posts', postsController)
  .use('/api/friends', friendsController)
  .use('/api/stops', stopsController)
  .use('/api/flights', flightsController)
  .use('/api/agendas', agendasController)
  .use('/api/comments', commentsController)
  .use('/api/adventures', adventuresController)

  .use((err, req, res, next) => {
    console.error(err)
    res.status(err.statusCode || 500)
        .send({ errors: [ err.message ?? 'Internal Server Error' ] })
  })

  .get('*', (req, res) => res.sendFile(path.join(__dirname, '../build/index.html')) )

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})