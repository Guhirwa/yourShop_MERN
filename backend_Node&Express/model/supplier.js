const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplierSchema = new Schema({
    code: {
        type: String,
        required: true,
        trim: true,
        maxlength: 5,
        unique: true
    },
    name: {
        type: String,
        required: true,
        maxlength: 30,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    location: {
        type: Schema.Types.ObjectId, ref: 'Location',
        required: true,
        trim: true
    }
}, { timestamps: true });

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;