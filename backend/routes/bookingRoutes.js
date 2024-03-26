const express = require('express');
const router = express.Router();
const {createBooking,getAllBookings,getBookingById,deleteBooking , updateBooking} = require('../controller/bookingController');
const { authenticate, isAdmin } = require('../middleware/authMiddleware');


// Create a new booking
router.post('/booking', createBooking); //authenticate, 

router.get('/bookings', authenticate, isAdmin, getAllBookings);   

router.get('/bookings/:bookingId', authenticate, getBookingById);

router.delete('/bookings/:bookingId', authenticate, isAdmin, deleteBooking);

// Update a booking by ID
// router.put('/bookings/:bookingId', authenticate, isAdmin, updateBooking);


module.exports = router;










// const express = require('express');
// const router = express.Router();
// const { authenticateToken, isAdmin } = require('../middleware/bookingMiddleware');
// const {
//   createBooking,
//   getAllBookings,
//   getBookingById,
//   updateBooking,
//   deleteBooking,
//   updateAllBookings,
// } = require('../controller/bookingController');

// router.post('/booking', authenticateToken, createBooking);
// router.get('/booking', authenticateToken, getAllBookings);
// router.get('/booking/:id', authenticateToken, getBookingById);
// // router.put('/bookings/:id', authenticateToken, updateBooking);
// router.delete('/booking/:id', authenticateToken, deleteBooking);
// router.put('/admin/booking/update-all', authenticateToken, isAdmin, updateAllBookings);

// module.exports = router;

