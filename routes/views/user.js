'use strict'

const TaskCtrl = require('.././app/controller/TaskController');
const validateTask = require('.././app/validator/validateTask');
var UserCtrl= require('.././app/controller/UserController');
var validateUser = require('.././app/validator/validateUser');

const to = require('await-to-js').default;

module.exports = (Router) => {
    Router.get('/api/user/login', (req, res, next) => {
        res.render('login',{
            title : 'Login',
            errors : req.session.errors || []
        })
    })
    Router.get('/api/user',UserCtrl.index);
    Router.get('/api/user/register',(req, res, next) => {
        res.render('register',{
            title : 'Register',
            errors : req.session.errors || []
        });
    });
}