'use strict'

const { 
    DB_HOST, 
    DB_NAME, 
    DB_USER, 
    DB_PASS,
    DB_PORT 
} = require('./db');

const dbConnectURI = (DB_USER !== '' && DB_PASS !== '') ? `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}` : `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

module.exports = {
    mongodb: {
        dbConnectURI,
        options: {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
}