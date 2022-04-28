const express = require('express');
const app = express.Router();
const AgendaModel = require('../models/agenda');

app
    // GET
    .get('/', (req, res, next) => {
        AgendaModel.getList()
        .then(agendas => {
            res.send({success: true, error: [], data: agendas})
        })
        .catch(next)
    })
    .get('/:id', (req, res, next) => {
        AgendaModel.get(req.params.id)
        .then(agenda => {
            res.send({success: true, error: [], data: agenda})
        })
        .catch(next)
    })
    .get('/stop/:id', (req, res, next) => {
        AgendaModel.getByStopID(req.params.id)
        .then(agendas => {
            res.send({success: true, error: [], data: agendas})
        })
        .catch(next)
    })

    // POST
    .post('/', (req, res, next) => {
        AgendaModel.create(req.body)
        .then(agenda => {
            res.send({success: true, error: [], data: agenda})
        })
        .catch(next)
    })

    // DELETE
    .delete('/:id', (req, res, next) => {
        AgendaModel.remove(req.params.id)
        .then(agenda => {
            res.send({success: true, error: [], data: agenda})
        })
        .catch(next)
    })

    // PATCH
    .patch('/:id', (req, res, next) => {
        AgendaModel.update(req.params.id, req.body)
        .then(agenda => {
            res.send({success: true, error: [], data: agenda})
        })
        .catch(next)
    })

module.exports = app;