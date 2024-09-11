const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // Basic Information
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String },
    email: { type: String, required: true, unique: true, match: [/.+@.+\..+/, 'Please enter a valid email address'] },
    passwordHash: { type: String, required: true },
    dateOfBirth: {type: Date },

    // Address Information
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zipCode: { type: String },
        country: { type: String }
    },

    // Order History
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }],

    // Shopping Cart
    cart: [{
        productId: {
            type: Schema.Types.ObjectId,
            ref: 'Product' // Assuming you have a Product model
        },
        quantity: {
            type: Number,
            default: 1
        }
    }],

    // Wishlist
    wishlist: [{
        type: Schema.Types.ObjectId,
        ref: 'Product' // Assuming you have a Product model
    }],

    // Authentication Info
    isActive: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        enum: ['user'],
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Middleware to update 'updatedAt' field
userSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

// Create the User Model
const User = mongoose.model('User', userSchema);

module.exports = User;
