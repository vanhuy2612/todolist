const Router = require('express').Router();
const TastCtrl = require('../app/controller/TaskController');

Router.get('/api/tasks', TastCtrl.index);
module.exports = Router;