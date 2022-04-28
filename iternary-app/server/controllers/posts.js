const express = require('express');
const app = express.Router();
const PostModel = require('../models/post');

app
    // GET
    .get('/', (req, res, next) => {
        PostModel.getList()
        .then(posts => {
            res.send({success: true, error: [], data: posts})
        })
        .catch(next)
    })
    .get('/:id', (req, res, next) => {
        PostModel.get(req.params.id)
        .then(post => {
            res.send({success: true, error: [], data: post})
        })
        .catch(next)
    })

    // POST
    .post('/', (req, res, next) => {
        PostModel.create(req.body)
        .then(post => {
            res.send({success: true, error: [], data: post})
        })
        .catch(next)
    })
    
    // DELETE
    .delete('/:id', (req, res, next) => {
        PostModel.remove(req.params.id)
        .then(post => {
            res.send({success: true, error: [], data: post})
        })
        .catch(next)
    })

    // PATCH
    .patch('/:id', (req, res, next) => {
        PostModel.update(req.params.id, req.body)
        .then(post => {
            res.send({success: true, error: [], data: post})
        })
        .catch(next)
    })

module.exports = app;