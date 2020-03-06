'use strict'
const BaseController = require('../BaseController');

class AuthController extends BaseController {
    constructor() {
        super(AuthController);
    }

    async getLoginForm (req, res) {
        return await res.render('login', {
            title : 'Login',
            errors : req.session.errors || []
        })
    }

    async getRegisterForm (req, res) {
        return await res.render('register',{
            title : 'Register',
            errors : req.session.errors || []
        });
    }
}
module.exports = new AuthController()
