
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './Component/Assets/css/style.css';
import './Component/Assets/css/bootstrap.min.css';
import { AuthProvider } from './context/AuthContext';

import Home from './Component/Pages/Home';
import Header from './Component/Pages/Header';
import Service from './Component/Pages/Service';
import About from './Component/Pages/About';
import Booking from './Component/Pages/Booking';
import Contact from './Component/Pages/Contact';
import Footer from './Component/Pages/Footer';
import Login from './Component/Pages/Login';
import Register from './Component/Pages/Register';
import Logout from './Component/Pages/Logout';
import Payment from './Component/Payment/Payment';

import User from './Component/Admin/User';
import AdminApp from './Component/Admin/AdminApp';
 import BookingList from './Component/Admin/BookingList';
import ServiceList from './Component/Admin/ServiceList';
import ServiceForm from './Component/Admin/ServiceForm'
import BookingForm from './Component/Admin/BookingForm';
import TotalBooking from './Component/Admin/TotalBooking';
import TotalUser from './Component/Admin/TotalUser';
import TotalService from './Component/Admin/TotalServices';


function App() {
  return (
    <AuthProvider>
      <Router>
        <ToastContainer theme="dark" />
        <Header />

        <Routes>
          {/* Non-Admin Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} />
         
            {/* Admin Routes */}
       <Route path="/admin" element={<AdminApp />} />
        <Route path='/admin/servicelist' element={<ServiceList/>}/>
       <Route path='/admin/serviceform' element={<ServiceForm/>}/>
       <Route path='/admin/totalservice' element={<TotalService />}/>
        <Route path='/admin/users' element={<User />}/>
        <Route path='/admin/totalbooking' element={<TotalUser />}/>
        <Route path='/admin/bookings' element={<BookingList/>} />
        <Route path='/admin/bookingform' element={<BookingForm/>}/>
        <Route path='/admin/totalbooking' element={<TotalBooking />}/>

        </Routes>

        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
