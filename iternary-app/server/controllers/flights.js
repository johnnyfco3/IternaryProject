const express = require('express');
const app = express.Router();
const FlightModel = require('../models/flight');

const CREATED_STATUS = 201;

app
    .get('/', (req, res) => {
        res.send(FlightModel.flightInfo)
    })
    .post('/', (req, res) => {
        const newFlight = FlightModel.create(req.body)
        res.status(CREATED_STATUS).send(newFlight)
    })
    .get('/:id', (req, res) => {
        const flight = FlightModel.get(req.params.id)
        res.send(flight)
    })
    .delete('/:id', (req, res) => {
        const flight = FlightModel.remove(req.params.id)
        res.send({success: true, error: [], data: flight})
    })
    .patch('/:id', (req, res) => {
        const flight = FlightModel.update(req.params.id, req.body)
        res.send({success: true, error: [], data: flight})
    })

module.exports = app;