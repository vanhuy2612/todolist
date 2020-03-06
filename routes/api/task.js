'use strict'

const TaskCtrl = require('../../app/controller/TaskController');
const validateTask = require('../../app/validator/validateTask');
var UserCtrl= require('../../app/controller/UserController');
var validateUser = require('../../app/validator/validateUser');

const to = require('await-to-js').default;

module.exports = (Router) => {
    Router.post('/api/tasks',validateTask(), TaskCtrl.store);
    Router.put('/api/tasks', TaskCtrl.update);
    Router.delete('/api/tasks', TaskCtrl.delete);
}

