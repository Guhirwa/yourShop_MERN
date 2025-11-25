const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    code: { 
        type: String, 
        trim: true, 
        required: true, 
        maxlength:10 
    },
    name: { 
        type: String, 
        required: true, 
        maxlength: 30 
    },
    type: { 
        type: String, 
        enum: ['PROVINCE', 'DISTRICT', 'SECTOR', 'CELL', 'VILLAGE'],
        trim: true,
        required: true,
    },
    parentCode: {
        type: Schema.Types.ObjectId, ref: 'Location',
        trim: true,
        default: null,
        required: false,
    }
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;