'use strict'
const Router = require('express').Router();
const TaskCtrl = require('../app/controller/TaskController');
const validateTask = require('../app/validator/validateTask');
var UserCtrl= require('../app/controller/UserController');
var validateUser = require('../app/validator/validateUser');

const to = require('await-to-js').default;
// Tách : Router views, Router api 

// Router for task:
Router.get('/', TaskCtrl.index);
Router.post('/api/tasks',validateTask(), TaskCtrl.store);
Router.put('/api/tasks', TaskCtrl.update);
Router.delete('/api/tasks', TaskCtrl.delete);
Router.get('/api/hello-world', (req, res) => {
    res.send('Hello World');
});

// Route for user: 
//Router.post('/api/register',validateUser(),UserCtrl.store);
require('./user')(Router);

module.exports = Router;
