const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Contact Form API Endpoint 
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com', // Replace with your email
      pass: 'your-password', // Replace with your password
    },
  });

  // Email Options
  const mailOptions = {
    from: 'your-email@gmail.com', // Replace with your email
    to: 'destination-email@example.com', // Replace with the destination email
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send Email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
    console.log('Email sent: ' + info.response);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  });
});


