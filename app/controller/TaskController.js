'use strict'
const TaskModel = require('../model/task');
const BaseController = require('./BaseController');
const to = require('await-to-js').default;
const mongoose = require('mongoose');
class TaskController extends BaseController {
    constructor () {
        super(TaskController);
    }

    async index (req, res) {
        return res.send('Hello world!');
    }

    async store (req, res, next) {
        // Way 1 :
        // let task = new TaskModel({
        //     data...
        // })
        // task.save();
        let data = req.body;
        let [err, task] = await to(TaskModel.insertOne(data));
        if (err) {
            return res.status(400).json({message: 'Fail'});
        }
        console.log('task', task);
        return res.json({message: 'OK', task});
    }

    async update (req, res, next) {
        let _id = mongoose.mongo.ObjectId(req.body.id);
        let data = req.body;

        let [err, task] = await to(TaskModel.updateMany({_id : _id}, data));
        if (err) {
            return res.status(400).json({message: 'Fail'});
        }
        console.log('task', task);
        return res.json({message: 'OK', task});
    }
    
    async delete (req, res, next) {
        let _id = mongoose.mongo.ObjectId(req.body.id);

        let [err, task] = await to(TaskModel.deleteMany({_id : _id}));
        if (err) {
            return res.status(400).json({message: 'Fail'});
        }
        console.log('task', task);
        return res.json({message: 'OK', task});
    }
    // chuẩn viêt API: Restful API

}

module.exports = new TaskController();
