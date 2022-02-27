const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validator: function(value) {
            return isEmail(value);
        },
        message: function(userObject) {
            return `${userObject.email} is not a valid email address`;
        }
    },
    // thoughts: {
    //     type: String,
    // },
    // friends: {
    //     type: String,
    // },
});

const User = model('User', userSchema);

module.exports = User;