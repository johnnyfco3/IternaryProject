const express = require('express');
const app = express.Router();
const AdventureModel = require('../models/adventure');

const CREATED_STATUS = 201;

app
    .get('/', (req, res) => {
        res.send(AdventureModel.adventures)
    })

module.exports = app;