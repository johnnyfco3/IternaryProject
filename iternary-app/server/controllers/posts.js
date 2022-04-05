const express = require('express');
const app = express.Router();
const PostModel = require('../models/post');

const CREATED_STATUS = 201;

app
    // GET
    .get('/', (req, res) => {
        res.send(PostModel.posts)
    })
    .get('/:id', (req, res) => {
        const post = PostModel.get(req.params.id)
        res.send(post)
    })

    // POST
    .post('/', (req, res) => {
        const newPost = PostModel.create(req.body)
        res.status(CREATED_STATUS).send(newPost)
    })
    
    // DELETE
    .delete('/:id', (req, res) => {
        const post = PostModel.remove(req.params.id)
        res.send({success: true, error: [], data: post})
    })

    // PATCH
    .patch('/:id', (req, res) => {
        const post = PostModel.update(req.params.id, req.body)
        res.send({success: true, error: [], data: post})
    })

module.exports = app;