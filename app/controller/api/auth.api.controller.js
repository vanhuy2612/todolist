'use strict'
const APIController = require('./api.controller');
const UserModel = require('../../model/user');
const to = require('await-to-js').default;
const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const saltBcrypt = 10;
const jwt    = require('jsonwebtoken');
const secretKey = require('../../../config/auth');

class AuthApiController extends APIController {
    constructor() {
        super(AuthApiController, UserModel);
    }

    // Check user : 
    async login(req, res) {
        let email = req.body.email;

        let [err, user] = await to(UserModel.findOne({ email: email }));
        if (err) return res.status(400).json({ msg: "Your email is not available." });

        if (user) {
            let ok = bcrypt.compareSync(req.body.password, user.password);
            if (!ok) return res.status(400).json({ msg: "Password isnt correct." });

            // Create token
            const payload = {
                email : req.body.email,
            };
            const token = jwt.sign(payload, secretKey.jwt.secretKey, {
                expiresIn : 1440 // 24 hours
            });
            console.log(token);
            // Set tokens to the header.
            return res.json({token});
            
        } else res.status(400).json({ msg: "Your email is not available." });
    }
}
module.exports = new AuthApiController();