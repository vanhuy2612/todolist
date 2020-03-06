'use strict'

const UserApiCtrl = require('../../app/controller/api/user.api.controller');
const AuthApiCtrl = require('../../app/controller/api/auth.api.controller')
const validateUser = require('../../app/validator/validateUser');

const to = require('await-to-js').default;

module.exports = (Router) => {
    Router.post('/api/user/login',AuthApiCtrl.login);
    Router.post('/api/user/register',validateUser(),UserApiCtrl.store);

    Router.put('/api/user',validateUser(),UserApiCtrl.update);
}