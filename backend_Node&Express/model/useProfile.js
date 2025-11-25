const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const useProfileSchema = new Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'User', 
        required: true,
        unique: true,
    },
    gender: { 
        type: String, 
        enum: ['MALE', 'FEMALE'],
        required: true,
        trim: true,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 15,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 15,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
        trim: true,
        maxlength: 15,
    },
    location: {
        type: Schema.Types.ObjectId, ref: 'Location',
        required: true,
        trim: true,
        maxlength: 15,
    },
}, { timestamps: true });

const UseProfile = mongoose.model('UseProfile', useProfileSchema);

module.exports = UseProfile;