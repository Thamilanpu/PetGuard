

const express = require('express');
const { isAdmin } = require('../middleware/authMiddleware');
const adminController = require('../controller/adminController');
const router = express.Router();

router.get('/', isAdmin, adminController.welcomeAdmin);
router.get('/dashboard', isAdmin, adminController.adminDashboard);
router.post('/create-user', isAdmin, adminController.createUser);
router.put('/update-user/:userId', isAdmin, adminController.updateUser);
router.delete('/delete-user/:userId', isAdmin, adminController.deleteUser);
router.get('/user-details', isAdmin, adminController.getUserDetails);
router.get('/all-users', isAdmin, adminController.getAllUsers);

module.exports = router;

























// const express = require('express');
// const { isAdmin } = require('../middleware/authMiddleware');
// const User = require('../model/userModel');
// const router = express.Router();

// router.get('/', isAdmin, (req, res) => {
//   res.status(200).json({ success: true, message: 'Welcome, admin!' });
// });

// router.get('/dashboard', isAdmin, (req, res) => {
//   res.status(200).json({ success: true, message: 'Admin Dashboard' });
// });

// router.post('/create-user', isAdmin, async (req, res) => {
//   try {
//     const { username, email } = req.body;
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({ success: false, message: 'User with this email already exists' });
//     }

//     const newUser = new User({ username, email });
//     await newUser.save();

//     res.status(201).json({ success: true, message: 'User created by admin', user: newUser });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// });

// router.put('/update-user/:userId', isAdmin, async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).json({ success: false, message: 'User not found' });
//     }

//     const { username, email } = req.body;
//     user.username = username || user.username;
//     user.email = email || user.email;
//     await user.save();

//     res.status(200).json({ success: true, message: `User ${userId} updated by admin`, user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// });

// router.delete('/delete-user/:userId', isAdmin, async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).json({ success: false, message: 'User not found' });
//     }

//     await user.remove();
//     res.status(200).json({ success: true, message: `User ${userId} deleted by admin` });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// });

// router.get('/user-details', isAdmin, async (req, res) => {
//   try {
//     const users = await User.find({}, 'username email');
//     res.status(200).json({ success: true, users });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// });

// router.get('/all-users', isAdmin, async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json({ success: true, users });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// });

// module.exports = router;




























// const express = require('express');
// const { isAdmin } = require('../middleware/authMiddleware');
// const User = require('../model/userModel');

// const router = express.Router();

// // GET /api/admin
// router.get('/', isAdmin, (req, res) => {
//   res.status(200).json({ success: true, message: 'Welcome, admin!' });
// });

// // GET /api/admin/dashboard
// router.get('/dashboard', isAdmin, (req, res) => {
//   res.status(200).json({ success: true, message: 'Admin Dashboard' });
// });

// // POST /api/admin/create-user
// router.post('/create-user', isAdmin, async (req, res) => {
//   try {
//     const { username, email } = req.body;
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({ success: false, message: 'User with this email already exists' });
//     }

//     const newUser = new User({ username, email });
//     await newUser.save();

//     res.status(201).json({ success: true, message: 'User created by admin', user: newUser });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// });

// // PUT /api/admin/update-user/:userId
// router.put('/update-user/:userId', isAdmin, async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).json({ success: false, message: 'User not found' });
//     }

//     const { username, email } = req.body;
//     user.username = username || user.username;
//     user.email = email || user.email;
//     await user.save();

//     res.status(200).json({ success: true, message: `User ${userId} updated by admin`, user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// });

// // DELETE /api/admin/delete-user/:userId
// router.delete('/delete-user/:userId', isAdmin, async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).json({ success: false, message: 'User not found' });
//     }

//     await user.remove();
//     res.status(200).json({ success: true, message: `User ${userId} deleted by admin` });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// });

// // // GET /api/admin/view-users
// // router.get('/view-users', isAdmin, async (req, res) => {
// //   try {
// //     const users = [
// //       { id: 1, name: 'User1', email: 'user1@example.com' },
// //       { id: 2, name: 'User2', email: 'user2@example.com' },
// //     ];
// //     res.status(200).json({ success: true, users });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ success: false, message: 'Internal Server Error' });
// //   }
// // });

// // GET /api/admin/user-details
// router.get('/user-details', isAdmin, async (req, res) => {
//   try {
//     const users = await User.find({}, 'username email'); // Adjust the fields you want to retrieve
//     res.status(200).json({ success: true, users });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// });




// // GET /api/admin/all-users
// router.get('/all-users', isAdmin, async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json({ success: true, users });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// });



// // POST /api/admin/send-notification
// router.post('/send-notification', isAdmin, async (req, res) => {
//   try {
//     // Logic to send a notification to all users by the admin
//     const notificationMessage = req.body.message; // Assuming the message is provided in the request body

//     // Example using a NotificationService (replace with your actual notification logic)
//     await NotificationService.sendNotificationToAllUsers(notificationMessage);

//     res.status(200).json({ success: true, message: 'Notification sent by admin' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// });

// // GET /api/admin/analytics
// router.get('/analytics', isAdmin, async (req, res) => {
//   try {
//     // Logic to retrieve and display analytics data for the admin
//     const analyticsData = await AnalyticsService.getAdminAnalytics(); // Replace with your actual analytics logic

//     res.status(200).json({ success: true, analytics: analyticsData });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// });


// module.exports = router;
