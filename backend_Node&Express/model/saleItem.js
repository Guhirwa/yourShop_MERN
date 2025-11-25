const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saleItemSchema = new Schema({
    sale: {
        type: Schema.Types.ObjectId, ref: 'Sale',
        required: true,
    },
    product: {
        type: Schema.Types.ObjectId, ref: 'Product',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    unitPrice: {
        type: Number,
        required: true,
    }, 
    totalPrice: {
        type: Number,
        required: true,
    }
}, { timestamps: true })

const SaleItem = mongoose.model('SaleItem', saleItemSchema);

module.exports = SaleItem;