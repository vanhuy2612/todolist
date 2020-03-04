'use strict'
const Router = require('express').Router();
const TaskCtrl = require('../app/controller/TaskController');
const validator = require('../app/controller/Validator');

Router.get('/', TaskCtrl.index);
Router.post('/api/tasks',validator(), TaskCtrl.store);
Router.put('/api/tasks', TaskCtrl.update);
Router.delete('/api/tasks', TaskCtrl.delete);
Router.get('/api/hello-world', (req, res) => {
    return res.send('Hello world!');
})
module.exports = Router;
