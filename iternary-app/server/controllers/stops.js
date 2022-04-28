const express = require('express');
const app = express.Router();
const StopModel = require('../models/stop');

app
    // GET
    .get('/', (req, res, next) => {
        StopModel.getList()
        .then(stops => {
            res.send({success: true, error: [], data: stops})
        })
        .catch(next)
    })
    .get('/:id', (req, res, next) => {
        StopModel.get(req.params.id)
        .then(stop => {
            res.send({success: true, error: [], data: stop})
        })
        .catch(next)
    })

    // POST
    .post('/', (req, res, next) => {
        StopModel.create(req.body)
        .then(stop => {
            res.send({success: true, error: [], data: stop})
        })
        .catch(next)
    })

    // DELETE
    .delete('/:id', (req, res, next) => {
        StopModel.remove(req.params.id)
        .then(stop => {
            res.send({success: true, error: [], data: stop})
        })
        .catch(next)
    })

    // PATCH
    .patch('/:id', (req, res, next) => {
        StopModel.update(req.params.id, req.body)
        .then(stop => {
            res.send({success: true, error: [], data: stop})
        })
        .catch(next)
    })

module.exports = app;