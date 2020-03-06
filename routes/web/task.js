'use strict'

const TaskCtrl = require('../../app/controller/web/task.controller');

module.exports = (Router) => {
    Router.get('/', TaskCtrl.index);
    Router.get('/tasks', TaskCtrl.index);
}