const express = require('express');
const app = express.Router();
const AdventureModel = require('../models/adventure');

const CREATED_STATUS = 201;

app
    // GET
    .get('/', (req, res) => {
        res.send(AdventureModel.adventures)
    })
    .get('/:id', (req, res) => {
        const adventure = AdventureModel.get(req.params.id)
        res.send(adventure)
    })

    // POST
    .post('/', (req, res) => {
        const newAdventure = AdventureModel.create(req.body)
        res.status(CREATED_STATUS).send(newAdventure)
    })

    // DELETE
    .delete('/:id', (req, res) => {
        const adventure = AdventureModel.remove(req.params.id)
        res.send({success: true, error: [], data: adventure})
    })

    // PATCH
    .patch('/:id', (req, res) => {
        const adventure = AdventureModel.update(req.params.id, req.body)
        res.send({success: true, error: [], data: adventure})
    })

module.exports = app;