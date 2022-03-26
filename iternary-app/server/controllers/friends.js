const express = require('express');
const app = express.Router();
const FriendModel = require('../models/friend');

const CREATED_STATUS = 201;

app
    .get('/', (req, res) => {
        res.send(FriendModel.friends)
    })

module.exports = app;