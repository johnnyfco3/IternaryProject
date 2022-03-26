const express = require('express');
const app = express.Router();
const UserModel = require('../models/user');

const CREATED_STATUS = 201;

app 
    .get('/', (req, res) => {
        res.send(UserModel.users)
    })

module.exports = app;
