'use strict'
const BaseController = require('../BaseController');

class TaskController extends BaseController {
    constructor() {
        super(TaskController);
    };

    async index (req, res) {
        return await res.render('home',{
            title : 'Home',
            errors : req.session.errors || []
        });
    }
}
module.exports = new TaskController()