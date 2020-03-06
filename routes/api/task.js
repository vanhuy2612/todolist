'use strict'

const TaskCtrl = require('../../app/controller/api/task.api.controller');
const validateTask = require('../../app/validator/validateTask');

const to = require('await-to-js').default;

module.exports = (Router) => {
    Router.post('/api/tasks',validateTask(), TaskCtrl.store);
    Router.put('/api/tasks', TaskCtrl.update);
    Router.delete('/api/tasks', TaskCtrl.delete);
}

