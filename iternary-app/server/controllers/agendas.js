const express = require('express');
const app = express.Router();
const AgendaModel = require('../models/agenda');

const CREATED_STATUS = 201;

app
    .get('/', (req, res) => {
        res.send(AgendaModel.agendas)
    })

module.exports = app;