const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseItemSchema = new Schema({
    purchaseOrder: {
        type: Schema.Types.ObjectId, ref: 'PurchaseOrder',
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

const PurchaseItem = mongoose.model('PurchaseItem', purchaseItemSchema);

module.exports = PurchaseItem;