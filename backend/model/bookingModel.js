
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: { 
    type: String, 
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  address: {
    type: String,  
    required: true,
  },
  PetCategory: {
    type: String,
    required: true,
  },
  petAge: {
    type: String,
    required: true,
  },
  reservationDate: {
    type: Date,
    required: true,
  },
  reservationEndDate: {
    type: Date, 
    required: true,    
  },     
  reservationTime: {
    type: String,
    required: true,
  },
  service: {
    type: String,
  },
  totalPrice: {
    type: Number,
    default: 0.0,    
  },
  totalDays: {
    type: Number,
  },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;



























// const mongoose = require('mongoose');

// const bookingSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   phoneNo: {
//     type: Number,
//     required: true,
   
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   PetCategory: {
//     type: String,
//     required: true,
//   },
//   petAge: {
//     type: String,
//     required: true,
//   },

//   reservationDate: {
//     type: Date,
//     required: true,
//   },
//   reservationEndDate: {
//     type: Date,
//     required: true,
//   },
//   reservationTime: {
//     type: String,
//     required: true,
//   },
//   service: {
//     type: String,
//   },
//   price: {
//     type: Number,
//     default: 0.0,
//   },
//   totalDays: {
//     type: Number,
//   },
  
//   //     // status: {
// //     //   type: String,
// //     //   enum: ["pending", "approved", "cancelled"],
// //     //   default: "pending",
// //     // },

// //     // isPaid: {
// //     //   type: Boolean,
// //     //   default: true,
// //     // },
 
// });

// const Booking = mongoose.model('Booking', bookingSchema);

// module.exports = Booking;






























// // // import mongoose from "mongoose";
// // const mongoose = require('mongoose');

// // const bookingSchema = new mongoose.Schema(
// //   {
// //     name: {
// //       type: mongoose.Types.ObjectId,
// //       ref: "User",
// //       required: true,
// //     },
// //     email: {
// //       type: String,
// //       ref: "User",
// //       required: true,
// //     },
// //     phoneNo: {
// //       type: String,
// //       ref: "User",
// //       required: true,
// //     },
// //     address: {
// //       type: String,
// //       ref: "User",
// //       required: true,
// //     },
// //     reservationDate: {
// //       type: Date,
// //       required: true,
// //     },
// //     reservationEndDate: {
// //       type: Date,
// //       required: true,
// //     },
// //     reservationTime: {
// //       type: Date,
// //       required: true,
// //     },
// //     PetType: {
// //       type: String,
// //       required: true,
// //     },
// //     selectedService: {
// //       type: String,
// //       enum: [
// //        " Pet Boarding",
// //         "Dog Walking",
// //        " Dog Grooming",
// //         "Pet Training",
// //         "Cat Sitting and Feeding",
// // "Boarding Family Vacancies"
// //       ],
// //       required: true,
// //     },
// //     // status: {
// //     //   type: String,
// //     //   enum: ["pending", "approved", "cancelled"],
// //     //   default: "pending",
// //     // },

// //     // isPaid: {
// //     //   type: Boolean,
// //     //   default: true,
// //     // },
// //   }
// // );

// // module.exports = mongoose.model("Booking", bookingSchema);
