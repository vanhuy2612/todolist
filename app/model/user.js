'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BaseSchema = require('./BaseSchema');

const mTAG = 'users';
const projection = { delete: 0, __v: 0}
const FIELDS = {
    email: { type: String, index: true},
    name: { type: String, default: 'no-name'},
    password: { type: String, default: '123456789'},
    insert: {
        when: { type: Date, default: Date.now},
        by: { type: Schema.ObjectId, ref: 'User'}
    },
    
    update: {
        when: { type: Date},
        by: { type: Schema.ObjectId, ref: 'User'}
    },

    delete: {
        when: { type: Date, default: Date.now},
        by: { type: Schema.ObjectId, ref: 'User'}
    }
}
let userSchema = BaseSchema(FIELDS, projection);

module.exports = mongoose.model(mTAG, userSchema);