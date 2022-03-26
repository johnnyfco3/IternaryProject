const express = require('express');
const app = express.Router();
const PostModel = require('../models/post');

const CREATED_STATUS = 201;

app
    .get('/', (req, res) => {
        res.send(PostModel.posts)
    })

module.exports = app;