'use strict'
const Router = require('express').Router();
const TaskCtrl = require('../app/controller/TaskController');

Router.get('/api/tasks', TaskCtrl.index);
Router.post('/api/tasks', TaskCtrl.store);
Router.get('/api/hello-world', (req, res) => {
    return res.send('Hello world!');
})
module.exports = Router;
