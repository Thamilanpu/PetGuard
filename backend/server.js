const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require("cors");
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const payment = require('./routes/payment')

const corsOptions = {
  origin: ['http://localhost:3000',`https://pet-guard-tau.vercel.app/`],
  credentials: true,
};

dotenv.config();
const app = express();
app.use(cookieParser());
const PORT = process.env.PORT || 5000;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,  
      writeConcern: {
        w: 'majority'   
      }
    });     
    console.log('MongoDB database is connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api', profileRoutes);
app.use('/api', bookingRoutes);                
app.use('/api', serviceRoutes);   
app.use('/api',payment);