const express = require('express');
const app = express.Router();
const FriendModel = require('../models/friend');

const CREATED_STATUS = 201;

app
    .get('/', (req, res) => {
        res.send(FriendModel.friends)
    })
    .post('/', (req, res) => {
        const newFriend = FriendModel.create(req.body)
        res.status(CREATED_STATUS).send(newFriend)
    })
    .get('/:id', (req, res) => {
        const friend = FriendModel.get(req.params.id)
        res.send(friend)
    })
    .delete('/:id', (req, res) => {
        const friend = FriendModel.remove(req.params.id)
        res.send({success: true, error: [], data: friend})
    })
    .delete('/:id/:email', (req, res) => {
        const friend = FriendModel.removeFriend(req.params.id, req.params.email)
        res.send({success: true, error: [], data: friend})
    })
    .patch('/:id', (req, res) => {
        const friend = FriendModel.update(req.params.id, req.body)
        res.send({success: true, error: [], data: friend})
    })

module.exports = app;