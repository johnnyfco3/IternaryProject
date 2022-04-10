const express = require('express');
const app = express.Router();
const AgendaModel = require('../models/agenda');

const CREATED_STATUS = 201;

app
    // GET
    .get('/', (req, res) => {
        res.send(AgendaModel.itinerary)
    })
    .get('/:id', (req, res) => {
        const agenda = AgendaModel.get(req.params.id)
        res.send(agenda)
    })
    .get('/stop/:id', (req, res) => {
        const agenda = AgendaModel.getByStopID(req.params.id)
        res.send(agenda)
    })

    // POST
    .post('/', (req, res) => {
        const newAgenda = AgendaModel.create(req.body)
        res.status(CREATED_STATUS).send(newAgenda)
    })

    // DELETE
    .delete('/:id', (req, res) => {
        const agenda = AgendaModel.remove(req.params.id)
        res.send({success: true, error: [], data: agenda})
    })

    // PATCH
    .patch('/:id', (req, res) => {
        const agenda = AgendaModel.update(req.params.id, req.body)
        res.send({success: true, error: [], data: agenda})
    })

module.exports = app;