const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    code: { 
        type: String, 
        required: true, 
        trim: true, 
        maxlength:5,
        unique: true
    },
    categoryName: { 
        type: String, 
        required: true, 
        trim: true,
        maxlength: 15,
        unique: true
    },
    description: { 
        type: String, 
        trim: true,
        maxlength: 50,
    }
}, { timestamps: true });

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;