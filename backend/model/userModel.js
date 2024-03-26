const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please enter name']
  },
  email: {
    type: String,
    required: [true, 'Please enter email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email address']
  },
  password: {
    type: String,
    required: [true, 'Please enter password'],
    minlength: [6, 'Password cannot exceed 6 characters'],
    // select: false
  },
  avatar: {
    type: String,
    // default: avatarImage, 
    default:"../../client/src/Component/Assets/img/avatar.jpeg"
},
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  createdAt :{
    type: Date,
    default: Date.now
},
phoneNo: {
  type: Number,
  required: [true, 'Please enter PhoneNumber'],
  // maxlength: [10, 'PhoneNumber cannot exceed 10characters'],
  // minlength: [10, 'PhoneNumber cannot exceed 10characters'],
  
},

}, { timestamps: true });

// Hashing the password before saving to the database
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password') || user.isNew) {
    try {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
      next();
    } catch (error) {
      return next(error);
    }
  } else {
    return next();
  }
});

// Compare user's entered password with the stored hashed password
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};   

module.exports = mongoose.model('petguarduser', userSchema);
    