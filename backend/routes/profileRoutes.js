
const express = require('express');
const router = express.Router();
const { getUserProfile, updateProfile } = require('../controller/profileController');
const {authenticate} = require('../middleware/authMiddleware');


router.get('/profile', authenticate, getUserProfile);
router.put('/profile/update', authenticate, updateProfile);


module.exports = router;




