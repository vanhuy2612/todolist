'use strict'
const TaskModel = require('../model/task');
const BaseController = require('./BaseController');
class TaskController extends BaseController {
    constructor () {
        super(TaskController);
    }

    async index (req, res) {
        return res.send('Hello world!');
    }

    async store (req, res) {
        return res.json({a: '1'});
    }
    // chuẩn viêt API: Restful API
}

module.exports = new TaskController();
