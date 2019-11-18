const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
        firstname: {
            type: String,
            required: [true, 'firstname is required'],
        },
        lastname: {
            type: String,
            required: [true, 'lastname is required'],
        },
        password: {
            type: String,
            required: [true, 'password is required']

        },
        email: {
            type: String,
            required: [true, 'E-Mail is required']
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model('User', userSchema);
