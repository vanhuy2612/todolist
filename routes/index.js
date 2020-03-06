'use strict'
const Router = require('express').Router();

// Sử dụng xác thực trong các router.
// Router.use(AuthMiddleware);

// Router for web
require('./web/index')(Router);
// Route for APIs
require('./api/index')(Router);

module.exports = Router;
