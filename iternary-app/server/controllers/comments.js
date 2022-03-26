const express = require('express');
const app = express.Router();
const CommentModel = require('../models/comment');

const CREATED_STATUS = 201;

app 
    .get('/', (req, res) => {
        res.send(CommentModel.comments)
    })

module.exports = app;