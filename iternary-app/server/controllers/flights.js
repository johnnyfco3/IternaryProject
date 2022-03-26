const express = require('express');
const app = express.Router();
const FlightModel = require('../models/flight');

const CREATED_STATUS = 201;

app
    .get('/', (req, res) => {
        res.send(FlightModel.flights)
    })

module.exports = app;