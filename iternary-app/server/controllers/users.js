const express = require('express');
const app = express.Router();
const UserModel = require('../models/user');

const CREATED_STATUS = 201;

app 
    // GET
    .get('/', (req, res) => {
        res.send(UserModel.list)
    })
    .get('/:id', (req, res) => {
        const user = UserModel.get(req.params.id)
        res.send(user)
    })
    .get('/email/:email', (req, res) => {
        const user = UserModel.getByEmail(req.params.email)
        res.send(user)
    })

    // POST
    .post('/', (req, res) => {
        const newUser = UserModel.create(req.body)
        res.status(CREATED_STATUS).send(newUser)
    })
    .post('/login', (req, res,) => {
        const user = UserModel.login(req.body.email, req.body.password)
        res.send(user)
        
    })
    .post('/logout', (req, res) => {
        UserModel.logout()
        res.send({success: true, error: [], data: {}})
    })

    //DELETE
    .delete('/:id', (req, res) => {
        const user = UserModel.remove(req.params.id)
        res.send({success: true, error: [], data: user})
    })

    // PATCH
    .patch('/:id', (req, res) => {
        const user = UserModel.update(req.params.id, req.body)
        res.send({success: true, error: [], data: user})
    })

module.exports = app;
