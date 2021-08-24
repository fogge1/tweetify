// const Joi = require('Joi');
const mongoose = require('mongoose');

const Bird = mongoose.model('Bird', new mongoose.Schema({
    message: {
        type: String,
        required: true,
        maxlength: 255
    },
    user: {
        type: String,
        required: true,
    }
}));

exports.Bird = Bird; 