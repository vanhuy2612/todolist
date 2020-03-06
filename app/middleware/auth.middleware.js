'use strict'
const AuthConfig = require('../../config/auth');
const jwt = require('jsonwebtoken');
const url = require('url');

const IgnoreRoutes = [ // Các route ko cần check token authentication.
    '/api/user/login',
    '/api/user/register',
    '/favicon.ico'
];

module.exports = async function (req, res, next) {
    // bo qua nhung route ko can check auth.  
    if (req.url.indexOf('/api/') < 0 || IgnoreRoutes.includes(req.url)) {
        console.log("vuot qua ignore");
        next();
    }
    let token = req.headers.authorization; // let request = req.headers;
    if (!token) { // bao loi 401 Unauthorized khi ko tim thay token trong header.
        return res.status(401).json({ message: 'Unauthorized' });
    }

    token = token.replace('Bearer ', '').trim();
    // Dung thu vien JWT check token.
    let [err, result] = await to(jwt.verify(token, AuthConfig.jwt.secretKey))
    if (err) {
        return res.status(400).json({ message: 'Faild' });
    }
    // Token is not available or not: 
    if (!result) return res.status(401).json({ message: 'Token faild' });

    next();
}
