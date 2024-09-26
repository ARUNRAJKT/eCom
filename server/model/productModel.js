const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//product schema
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Electronics', 'Clothing', 'Home', 'Books', 'Beauty', 'Sports'] 
    },
    images: {
        type: [String],
        required: true
    },
    ratings: {
        average: {
            type: Number,
            min: 0,
            max: 5,
            default: 0
        },
        count: {
            type: Number,
            default: 0
        }
    }
});

const productModel = mongoose.model('Product', productSchema);
module.exports = productModel;
