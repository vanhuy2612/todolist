'use strict'

const TaskCtrl = require('.././app/controller/TaskController');
const validateTask = require('.././app/validator/validateTask');
var UserCtrl= require('.././app/controller/UserController');
var validateUser = require('.././app/validator/validateUser');

const to = require('await-to-js').default;

module.exports = (Router) => {
    Router.post('/api/user/login',UserCtrl.check);
    Router.post('/api/user',validateUser(),UserCtrl.store);

    Router.put('/api/user',validateUser(),UserCtrl.update);
}