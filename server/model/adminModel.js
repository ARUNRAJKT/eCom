const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  // Basic Information
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address']
  },
  passwordHash: {
    type: String,
    required: true
  },
  
  // Authentication Info
  isActive: {
    type: Boolean,
    default: true
  },
  role: {
    type: String,
    enum: ['admin'], // Simplified to a single admin role
    default: 'admin'
  }
  
});


const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
