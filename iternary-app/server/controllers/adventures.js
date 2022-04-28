const express = require('express');
const app = express.Router();
const AdventureModel = require('../models/adventure');

app
    // GET
    .get('/', (req, res, next) => {
        AdventureModel.getList()
        .then(adventures => {
            res.send({success: true, error: [], data: adventures})
        })
        .catch(next)
    })
    .get('/:id', (req, res, next) => {
        AdventureModel.get(req.params.id)
        .then(adventure => {
            res.send({success: true, error: [], data: adventure})
        })
        .catch(next)
    })

    // POST
    .post('/', (req, res, next) => {
        AdventureModel.create(req.body)
        .then(adventure => {
            res.send({success: true, error: [], data: adventure})
        })
        .catch(next)
    })

    // DELETE
    .delete('/:id', (req, res, next) => {
        AdventureModel.remove(req.params.id)
        .then(adventure => {
            res.send({success: true, error: [], data: adventure})
        })
        .catch(next)
    })

    // PATCH
    .patch('/:id', (req, res, next) => {
        AdventureModel.update(req.params.id, req.body)
        .then(adventure => {
            res.send({success: true, error: [], data: adventure})
        })
        .catch(next)
    })

module.exports = app;