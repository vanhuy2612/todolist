'use strict'
const APIController = require('./api.controller');
const UserModel = require('../../model/user');
const to = require('await-to-js').default;
const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const saltBcrypt = 10;

class UserApiController extends APIController {
    constructor() {
        super(UserApiController, UserModel);
    }
    // Async get all user :
    async index(req, res) {
        let [err, users] = await to(UserModel.find({}));

        if (err) return res.status(400).json({ message: "Faild" });
        return res.send(users);
    }
    // Async store user : 
    async store(req, res) {
        let errors = validationResult(req).array();

        if (errors.length > 0) {
            req.session.errors = errors;
            return res.json({message: errors});
        } else {
            console.log("Pass validate");
            let [err, user] = await to(UserModel.findOne({ 'email': req.body.email }));
            if (err) return res.status(400).json({ message: 'Email Fail' });
            if (!user) {
                // Ma hoa password:
                let password = bcrypt.hashSync(req.body.password, saltBcrypt);
                let User = {
                    email: req.body.email,
                    name: req.body.name,
                    password: password
                }
                // Store user:
                let [err, result] = await to(UserModel.insertOne(User));
                if (err) return res.status(400).json({ message: 'Store User Fail' });
                res.send(result);
            }
            // User is used.
            else return res.status(400).json({ message: 'User is used' });
        }
    }
    // Async delete user : 
    async delete(req, res) {
        let _id = mongoose.mongo.ObjectId(req.query.id);
        let [err, user] = await to(UserModel.deleteOne({ _id: _id }));

        if (err) return res.status(400).json({ message: "Delete user faild." });

    }
    // Async update user : 
    async update(req, res) {
        let _id = mongoose.mongo.ObjectId(req.query._id);
        let password = bcrypt.hashSync(req.body.password, saltBcrypt);
        let data = {
            email: req.body.email,
            name: req.body.name,
            password: password
        }
        let [err, user] = await to(UserModel.updateMany({ _id: _id }, data));

        if (err) return res.status(400).json({ message: "Update user fail." });
        res.send(user);
    }
}
module.exports = new UserApiController();