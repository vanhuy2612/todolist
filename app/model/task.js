'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BaseSchema = require('./BaseSchema');

const mTAG = 'tasks';
const projection = { delete: 0, __v: 0 }
const FIELDS = {
    name: { type: String, index: true },
    status : {type : String}, // Trang thai lam viec
    time : {
        start : {type : Date}, // Ngay bat dau
        end : {type: Date} // Ngay ket thuc
    },
    description : {type : String},
    insert: {
        when: { type: Date, default: Date.now },
        by: { type: Schema.ObjectId, ref: 'User' }
    },

    update: {
        when: { type: Date },
        by: { type: Schema.ObjectId, ref: 'User' }
    },

    delete: {
        when: { type: Date },
        by: { type: Schema.ObjectId, ref: 'User' }
    }
}

let taskSchema = BaseSchema(FIELDS, projection);

module.exports = mongoose.model(mTAG, taskSchema);