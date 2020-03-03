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
}

module.exports = new TaskController();
