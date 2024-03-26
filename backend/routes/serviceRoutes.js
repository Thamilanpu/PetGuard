














const express = require('express');
const router = express.Router();
const { authenticate,} = require('../middleware/authMiddleware');
const {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
  updateAllServices,
} = require('../controller/serviceController');

// router.post('/services', authenticate, createService); 
router.post('/services', createService);
router.get('/services/:id', authenticate, getServiceById);      
router.get('/services', authenticate, getAllServices); 
router.put('/services/:id', authenticate, updateService); 
router.put('/services/update/all', authenticate, updateAllServices);
router.delete('/services/:id', authenticate, deleteService);


module.exports = router;

