const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        requires: true
    },
    lastName: {
        type: String,
        requires: true
    },
    city: {
        type: String,
        requires: true
    },
    postalCode: {
        type: String,
        requires: true
    },
    street: {
        type: String,
        requires: true
    },
    houseNumber: {
        type: int,
        requires: true
    }
});


module.exports = mongoose.model('User', UserSchema);