'use strict'

const TaskCtrl = require('.././app/controller/TaskController');
const validateTask = require('.././app/validator/validateTask');
var UserCtrl= require('.././app/controller/UserController');
var validateUser = require('.././app/validator/validateUser');

const to = require('await-to-js').default;
module.exports = (Router) => {
    Router.get('/', TaskCtrl.index);
    Router.get('/api/hello-world', (req, res) => {
        res.send('Hello World');
    });
}