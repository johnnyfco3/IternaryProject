const express = require('express');
const app = express.Router();
const CommentModel = require('../models/comment');

app 
    // GET
    .get('/', (req, res, next) => {
        CommentModel.getList()
        .then(comments => {
            res.send({success: true, error: [], data: comments})
        })
        .catch(next)
    })
    .get('/:id', (req, res, next) => {
        CommentModel.get(req.params.id)
        .then(comment => {
            res.send({success: true, error: [], data: comment})
        })
        .catch(next)
    })

    // POST
    .post('/', (req, res, next) => {
        CommentModel.create(req.body)
        .then(comment => {
            res.send({success: true, error: [], data: comment})
        })
        .catch(next)
    })
    
    // DELETE
    .delete('/:id', (req, res, next) => {
        CommentModel.remove(req.params.id)
        .then(comment => {
            res.send({success: true, error: [], data: comment})
        })
        .catch(next)
    })

    // PATCH
    .patch('/:id', (req, res, next) => {
        CommentModel.update(req.params.id, req.body)
        .then(comment => {
            res.send({success: true, error: [], data: comment})
        })
        .catch(next)
    })

module.exports = app;