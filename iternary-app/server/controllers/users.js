const express = require('express');
const app = express.Router();
const UserModel = require('../models/user');

const CREATED_STATUS = 201;

app 
    .get('/', (req, res) => {
        res.send(UserModel.users)
    })
    .post('/', (req, res) => {
        const newUser = UserModel.create(req.body)
        res.status(CREATED_STATUS).send(newUser)
    })
    .get('/:id', (req, res) => {
        const user = UserModel.get(req.params.id)
        res.send(user)
    })
    .delete('/:id', (req, res) => {
        const user = UserModel.remove(req.params.id)
        res.send({success: true, error: [], data: user})
    })
    .patch('/:id', (req, res) => {
        const user = UserModel.update(req.params.id, req.body)
        res.send({success: true, error: [], data: user})
    })

module.exports = app;
