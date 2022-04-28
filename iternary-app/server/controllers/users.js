const express = require('express');
const app = express.Router();
const UserModel = require('../models/user');

app 
    // GET
    .get('/', (req, res, next) => {
        UserModel.getList()
        .then(users => {
            res.send({success: true, error: [], data: users})
        })
        .catch(next)
    })
    .get('/:id', (req, res, next) => {
        UserModel.get(req.params.id)
        .then(user => {
            res.send({success: true, error: [], data: user})
        })
        .catch(next)
    })
    .get('/email/:email', (req, res, next) => {
        UserModel.getByEmail(req.params.email)
        .then(user => {
            res.send({success: true, error: [], data: user})
        })
        .catch(next)
    })

    // POST
    .post('/', (req, res, next) => {
        UserModel.create(req.body)
        .then(user => {
            res.send({success: true, error: [], data: user})
        })
        .catch(next)
    })
    .post('/login', (req, res, next) => {
        UserModel.login(req.body.email, req.body.password)
        .then(user => {
            res.send({success: true, error: [], data: user})
        })
        .catch(next)
        
    })

    //DELETE
    .delete('/:id', (req, res, next) => {
        UserModel.remove(req.params.id)
        .then(user => {
            res.send({success: true, error: [], data: user})
        })
        .catch(next)
    })

    // PATCH
    .patch('/:id', (req, res, next) => {
        UserModel.update(req.params.id, req.body)
        .then(user => {
            res.send({success: true, error: [], data: user})
        })
        .catch(next)
    })

module.exports = app;
