const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: String,
  price: String,
  description: String,
  // category: String,
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
