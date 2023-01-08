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
        type: User,
        requires: true
    },
    student: {
        type: User,
        requires: true
    }
});


module.exports = mongoose.model('Timeslot', TimeslotSchema);