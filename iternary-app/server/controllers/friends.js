const express = require('express');
const app = express.Router();
const FriendModel = require('../models/friend');

app
    // GET
    .get('/', (req, res, next) => {
        FriendModel.getList()
        .then(friends => {
            res.send({success: true, error: [], data: friends})
        })
        .catch(next)
    })
    .get('/:id', (req, res, next) => {
        FriendModel.get(req.params.id)
        .then(friend => {
            res.send({success: true, error: [], data: friend})
        })
        .catch(next)
    })
    .get('/user/:userID', (req, res, next) => {
        FriendModel.getByUser(req.params.userID)
        .then(friend => {
            res.send({success: true, error: [], data: friend})
        })
        .catch(next)
    })

    // POST
    .post('/', (req, res, next) => {
        FriendModel.create(req.body)
        .then(friend => {
            res.send({success: true, error: [], data: friend})
        })
        .catch(next)
    })
    
    // DELETE
    .delete('/:id', (req, res, next) => {
        FriendModel.remove(req.params.id)
        .then(friend => {
            res.send({success: true, error: [], data: friend})
        })
        .catch(next)
    })

module.exports = app;