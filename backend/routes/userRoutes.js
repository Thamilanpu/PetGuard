const express = require('express');
const router = express.Router();
const { authenticate, isAdmin } = require('../middleware/authMiddleware');
const {
  getUserById,
  getAllUsers,
  updateUserById,
  deleteUserById,
} = require('../controller/userController');

router.get('/:id', authenticate, getUserById);
router.get('/', authenticate, isAdmin, getAllUsers);
router.put('/:id', authenticate, updateUserById);
router.delete('/:id', authenticate, isAdmin, deleteUserById);   

module.exports = router;


