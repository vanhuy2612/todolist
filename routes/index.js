'use strict'
const Router = require('express').Router();
const TaskCtrl = require('../app/controller/TaskController');
const validateTask = require('../app/validator/validateTask');
var UserCtrl= require('../app/controller/UserController');
var validateUser = require('../app/validator/validateUser');

const to = require('await-to-js').default;
// Tách : Router views, Router api 

// Router for task:
require('./views/task')(Router);
require('./api/task')(Router);

// Route for user: 
require('./views/user')(Router);
require('./api/user')(Router);

module.exports = Router;
