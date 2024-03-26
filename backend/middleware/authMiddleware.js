
const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

const authenticate = (req, res, next) => {
  // Get the token from the request headers or cookies
  const token = req.header('Authorization') || req.cookies.jwt;

  if (!token || token.trim() === '') {
    return res.status(401).json({ success: false, message: 'Unauthorized - Token missing' });
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
    if (err) {
      console.error('JWT Verification Error:', err.message);
      return res.status(403).json({ success: false, message: 'Forbidden - Invalid token' });
    }

    req.user = decodedToken; // Assign the decoded token to req.user
    next();
  });
};

const isAdmin = async (req, res, next) => {
  try {
    if (!req.user) {
      return res
        .status(401)
        .json({ success: false, message: 'Unauthorized - Admin access required' });
    }

    const foundUser = await User.findById(req.user.userId);
    if (!foundUser || foundUser.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Forbidden - Admin access required' });
    }

    next();
  } catch (error) {
    console.error('isAdmin Error:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports = { authenticate, isAdmin };
