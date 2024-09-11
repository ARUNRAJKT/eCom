const Admin = require('../model/adminModel'); // Path to your Admin model

// Get all admins
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single admin by ID
exports.getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });
    res.status(200).json(admin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new admin
exports.createAdmin = async (req, res) => {
  const { firstName, lastName, email, passwordHash } = req.body;
  
  if (!firstName || !lastName || !email || !passwordHash) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newAdmin = new Admin({ firstName, lastName, email, passwordHash });
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update an admin by ID
exports.updateAdminById = async (req, res) => {
  try {
    const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAdmin) return res.status(404).json({ message: 'Admin not found' });
    res.status(200).json(updatedAdmin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete an admin by ID
exports.deleteAdminById = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });
    res.status(200).json({ message: 'Admin deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
