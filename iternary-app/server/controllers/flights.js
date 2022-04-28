const express = require('express');
const app = express.Router();
const FlightModel = require('../models/flight');

app
    // GET
    .get('/', (req, res, next) => {
        FlightModel.getList()
        .then(flights => {
            res.send({success: true, error: [], data: flights})
        })
        .catch(next)
    })
    .get('/:id', (req, res, next) => {
        FlightModel.get(req.params.id)
        .then(flight => {
            res.send({success: true, error: [], data: flight})
        })
        .catch(next)
    })
    .get('/adventure/:id', (req, res, next) => {
        FlightModel.getByAdventure(req.params.id)
        .then(flights => {
            res.send({success: true, error: [], data: flights})
        })
        .catch(next)
    })

    // POST
    .post('/', (req, res, next) => {
        FlightModel.create(req.body)
        .then(flight => {
            res.send({success: true, error: [], data: flight})
        })
        .catch(next)
    })
    
    // DELETE
    .delete('/:id', (req, res, next) => {
        FlightModel.remove(req.params.id)
        .then(flight => {
            res.send({success: true, error: [], data: flight})
        })
        .catch(next)
    })

    // PATCH
    .patch('/:id', (req, res, next) => {
        FlightModel.update(req.params.id, req.body)
        .then(flight => {
            res.send({success: true, error: [], data: flight})
        })
        .catch(next)
    })

module.exports = app;