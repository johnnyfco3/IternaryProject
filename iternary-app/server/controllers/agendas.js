const express = require('express');
const app = express.Router();
const AgendaModel = require('../models/agenda');

const CREATED_STATUS = 201;

app
    .get('/', (req, res) => {
        res.send(AgendaModel.agendas)
    })
    .post('/', (req, res) => {
        const newAgenda = AgendaModel.create(req.body)
        res.status(CREATED_STATUS).send(newAgenda)
    })
    .get('/:id', (req, res) => {
        const agenda = AgendaModel.get(req.params.id)
        res.send(agenda)
    })
    .delete('/:id', (req, res) => {
        const agenda = AgendaModel.remove(req.params.id)
        res.send({success: true, error: [], data: agenda})
    })
    .patch('/:id', (req, res) => {
        const agenda = AgendaModel.update(req.params.id, req.body)
        res.send({success: true, error: [], data: agenda})
    })

module.exports = app;