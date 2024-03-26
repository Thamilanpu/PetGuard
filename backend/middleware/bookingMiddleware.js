
const jwt = require('jsonwebtoken');
const User = require('../model/bookingModel');

const { JWT_SECRET } = process.env;

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ success: false, message: 'Authentication failed. Token not provided.' , error:error.message });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Authentication failed. Invalid token.' ,error:error.message });
  }
};

const isAdmin= async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId);

    if (!user || !user.admin) {
      return res.status(403).json({ success: false, message: 'Authorization failed. Admin access required.',error:error.message  });
    }

    next();
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Internal server error',error:error.message  });
  }
};


module.exports = { authenticateToken, isAdmin }; 