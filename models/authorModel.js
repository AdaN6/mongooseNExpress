const {Schema, model} = require('mongoose');

const authorSchema = new Schema({
    firstName: String,
    lastName: {
        type: String,
        required: true,
        unique: true,
        match:/[A-Za-z]/,
        minlength: 3,
        maxlength: 20,
        default: ''
    },
    dateOfBirth: Date,
    active: {
        type: Boolean,
        default: true,
    }
})

module.exports = model('Author', authorSchema);