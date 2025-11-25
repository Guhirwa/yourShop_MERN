const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseOrderSchema = new Schema({
    code: { 
        type: String, 
        required: true, 
        trim: true, 
        maxlength:5,
        unique: true
    },
    supplier: { 
        type: Schema.Types.ObjectId, ref: 'Supplier',
        required: true,
    },
    status: { 
        type: String, 
        enum: ['PENDING', 'APPROVED', 'REJECTED'],
        default: 'PENDING',
        required: true,
    }
}, { timestamps: true });

const PurchaseOrder = mongoose.model('PurchaseOrder', purchaseOrderSchema);

module.exports = PurchaseOrder;