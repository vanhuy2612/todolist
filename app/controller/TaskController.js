'use strict'
const TaskModel = require('../model/task');
const BaseController = require('./BaseController');
const to = require('await-to-js').default;
class TaskController extends BaseController {
    constructor () {
        super(TaskController);
    }

    async index (req, res) {
        return res.send('Hello world!');
    }

    async store (req, res, next) {
        let data = req.body;
        let [err, task] = await to(TaskModel.insertOne(data));
        if (err) {
            return res.status(400).json({message: 'Fail'});
        }
        console.log('task', task);
        return res.json({message: 'OK', task});
    }
    // chuẩn viêt API: Restful API
}

module.exports = new TaskController();
