const express = require('express');
const app = express.Router();
const StopModel = require('../models/stop');

const CREATED_STATUS = 201;

app
    // GET
    .get('/', (req, res) => {
        res.send(StopModel.stops)
    })
    .get('/:id', (req, res) => {
        const stop = StopModel.get(req.params.id)
        res.send(stop)
    })
    .get('/stop/:id', (req, res) => {
        const stop = StopModel.getByStopID(req.params.id)
        res.send(stop)
    })

    // POST
    .post('/', (req, res) => {
        const newStop = StopModel.create(req.body)
        res.status(CREATED_STATUS).send(newStop)
    })

    // DELETE
    .delete('/:id', (req, res) => {
        const stop = StopModel.remove(req.params.id)
        res.send({success: true, error: [], data: stop})
    })

    // PATCH
    .patch('/:id', (req, res) => {
        const stop = StopModel.update(req.params.id, req.body)
        res.send({success: true, error: [], data: stop})
    })

module.exports = app;