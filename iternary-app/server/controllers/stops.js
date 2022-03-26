const express = require('express');
const app = express.Router();
const StopModel = require('../models/stop');

const CREATED_STATUS = 201;

app
    .get('/', (req, res) => {
        res.send(StopModel.stops)
    })

module.exports = app;