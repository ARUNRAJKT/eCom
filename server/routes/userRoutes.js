const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to get all users
router.get('/', userController.getAllUsers);

// Route to get a single user by ID
router.get('/users/:id', userController.getUserById);

// Route to create a new user
router.post('/', userController.createUser);

// Route to update an existing user by ID
router.put('/users/:id', userController.updateUser);

// Route to delete a user by ID
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
