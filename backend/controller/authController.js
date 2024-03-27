

const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validator = require('validator');

const generateAuthToken = (user, res) => {
  const token = jwt.sign({ userId: user._id, role: user.role }, process.env.TOKEN_SECRET, {
    expiresIn: '30d',
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    // secure: process.env.NODE_ENV !== 'development',
    // sameSite: 'strict',
    sameSite: 'None',
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

const validateRegistrationInput = (username, email, password) => {
  if (!validator.isEmail(email)) {
    return 'Invalid email address';
  }

  if (password.length < 6) {
    return 'Password must be at least 6 characters long';
  }

  return null; // Validation successful
};

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate input
    const validationError = validateRegistrationInput(username, email, password);
    if (validationError) {
      return res.status(400).json({ success: false, message: validationError });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({
          success: false,
          message: 'Email is already registered. Please use a different email address.',
        });
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();

    const token = generateAuthToken(newUser, res);
    res.status(201).json({
      success: true,
      user: newUser,
      token,
      message: 'Registration successful. Welcome!',
    });
  } catch (error) {
    console.error('Error in registerUser:', error);
    res
      .status(500)
      .json({ success: false, message: 'Internal Server Error. Please try again later.' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email address' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials. User not found.',
      });
    }

 
    const token = generateAuthToken(user, res);

    let welcomeMessage = 'Hello! Login successful. Welcome back!';
    if (user.role === 'admin') {
      welcomeMessage = 'Hello Admin! Welcome back to the admin dashboard!';
    }

    res.status(200).json({ success: true, user, token, message: welcomeMessage });
  } catch (error) {
    console.error('Error in loginUser:', error);
    res
      .status(500)
      .json({ success: false, message: 'Internal Server Error. Please try again later.' });
  }
};

const logoutUser = (req, res) => {
  // Clear the cookie on the client side
  res.clearCookie('jwt');

  res.status(200).json({ success: true, message: 'Logout successful. Goodbye!' });
};

module.exports = { registerUser, loginUser, logoutUser };
























