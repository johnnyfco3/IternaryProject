const express = require('express');
const app = express.Router();
const CommentModel = require('../models/comment');

const CREATED_STATUS = 201;

app 
    .get('/', (req, res) => {
        res.send(CommentModel.comments)
    })
    .post('/', (req, res) => {
        const newComment = CommentModel.create(req.body)
        res.status(CREATED_STATUS).send(newComment)
    })
    .get('/:id', (req, res) => {
        const comment = CommentModel.get(req.params.id)
        res.send(comment)
    })
    .delete('/:id', (req, res) => {
        const comment = CommentModel.remove(req.params.id)
        res.send({success: true, error: [], data: comment})
    })
    .patch('/:id', (req, res) => {
        const comment = CommentModel.update(req.params.id, req.body)
        res.send({success: true, error: [], data: comment})
    })

module.exports = app;