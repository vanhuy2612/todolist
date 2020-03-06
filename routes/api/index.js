'use strict'
module.exports = function (Router) {
    require('./user')(Router);
    require('./task')(Router);
}