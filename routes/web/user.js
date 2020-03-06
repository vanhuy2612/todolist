'use strict'
const AuthCtrl = require('../../app/controller/web/auth.controller');

const to = require('await-to-js').default;

module.exports = (Router) => {
    Router.get('/login', AuthCtrl.getLoginForm);
    Router.get('/register', AuthCtrl.getRegisterForm);
}