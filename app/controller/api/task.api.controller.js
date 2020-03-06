'use strict'
const TaskModel = require('../../model/task');
const APIController = require('./api.controller');
const to = require('await-to-js').default;
const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');




class TaskApiController extends APIController {
    constructor() {
        super(TaskApiController, TaskModel);
    }

    async index(req, res) {
        let [err, tasks] = await to(TaskModel.find({}));

        if (err) {
            return res.status(400).json({ message: 'Fail' });
        }
        res.render('index', {
            title: 'Index Page',
            errors: req.session.errors || [],
            tasks: tasks
        })
    }

    async store(req, res, next) {
        // Way 1 :
        // let task = new TaskModel({
        //     data...
        // })
        // task.save();

        let errors = validationResult(req).array();

        if (errors.length > 0) {
            console.log(errors);
            req.session.errors = errors;
            return res.json(errors);
        } else {
            let data = {
                name: req.body.name,
                status: req.body.status,
                time: {
                    start: req.body.timestart,
                    end: req.body.timeend
                },
                des: req.body.des
            }
            let [err, task] = await to(TaskModel.insertOne(data));
            if (err) {
                return res.status(400).json({ message: 'Fail' });
            }
            return res.json(task);
        }

    }

    async update(req, res, next) {
        let _id = mongoose.mongo.ObjectId(req.query._id); // propeties in query params
        let data = req.body; // data for update in body

        let [err, task] = await to(TaskModel.updateMany({ _id: _id }, data));
        if (err) {
            return res.status(400).json({ message: 'Fail' });
        }
        console.log('task', task);
        return res.json({ message: 'OK', task });
    }

    async delete(req, res, next) {
        let _id = mongoose.mongo.ObjectId(req.query._id);

        let [err, task] = await to(TaskModel.deleteMany({ _id: _id }));
        if (err) {
            return res.status(400).json({ message: 'Fail' });
        }
        console.log('task', task);
        return res.json({ message: 'OK', task });
    }
    // chuẩn viêt API: Restful API
    async findTaskByID(req, res, next) {
        let _id = mongoose.mongo.ObjectId(req.query.id);

        let [err, task] = await to(TaskModel.findById({ _id: _id }));
        if (err) {
            return res.status(400).json({ message: 'Fail' });
        }
    }

}

module.exports = new TaskApiController();
