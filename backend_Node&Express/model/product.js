const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        maxlength: 5,
    },
    productName: {
        type: String,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId, ref: 'Category',
        required: true,
    },
    unitPrice: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;