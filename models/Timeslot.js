const mongoose = require('mongoose');
const User = require('./User');

const TimeslotSchema = mongoose.Schema({
    subject: {
        type: String,
        requires: true
    },
    location: {
        type: String,
        requires: true
    },
    date: {
        type: Date,
        requires: true
    },
    teacher: {
        type: String,
        requires: true
    },
    student: {
        type: String,
        requires: true
    }
});


module.exports = mongoose.model('Timeslot', TimeslotSchema);