const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    userName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 15,
        unique: true
    },
    fullName: {
        type: String,
        trim: true,
        required: true,
        maxlength: 30
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength:8,
        maxlength:16,
        unique: true
    },
    role: {
        type: String,
        enum: ['ADMIN', 'CASHIER', 'CUSTOMER'],
        required: true,
        trim: true
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;