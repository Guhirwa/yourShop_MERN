const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saleSchema = new Schema({
    code: { 
        type: String, 
        required: true, 
        trim: true, 
        maxlength:5,
        unique: true
    },
    user: { 
        type: Schema.Types.ObjectId, ref: 'User',
        required: true,
    },
    totalAmount: { 
        type: Number, 
        required: true,
    }
}, { timestamps: true });

const Sale = mongoose.model('Sale', saleSchema);

module.exports = Sale;