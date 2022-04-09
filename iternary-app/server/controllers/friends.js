const express = require('express');
const app = express.Router();
const FriendModel = require('../models/friend');

const CREATED_STATUS = 201;

app
    // GET
    .get('/', (req, res) => {
        res.send(FriendModel.friends)
    })
    .get('/:id', (req, res) => {
        const friend = FriendModel.get(req.params.id)
        res.send(friend)
    })
    .get('/email/:email', (req, res) => {
        const friend = FriendModel.getByEmail(req.params.email)
        res.send(friend)
    })

    // POST
    .post('/', (req, res) => {
        const newFriend = FriendModel.create(req.body)
        res.status(CREATED_STATUS).send(newFriend)
    })
    .post('/:id', (req, res) => {
        const friend = FriendModel.addFriends(req.params.id, req.body)
        res.send({success: true, error: [], data: friend})
    })
    
    // DELETE
    .delete('/:id', (req, res) => {
        const friend = FriendModel.remove(req.params.id)
        res.send({success: true, error: [], data: friend})
    })
    .delete('/email/:id', (req, res) => {
        const friend = FriendModel.removeFriend(req.params.id, req.body)
        res.send({success: true, error: [], data: friend})
    })

module.exports = app;