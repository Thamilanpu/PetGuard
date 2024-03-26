import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [editingBooking, setEditingBooking] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/bookings', { credentials: 'include' });
      if (!response.ok) {
        throw new Error('Failed to fetch bookings');
      }
      const { bookings: fetchedBookings } = await response.json();
      setBookings(fetchedBookings);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const createBooking = async (formData) => {
    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to create booking');
      }
      const newBooking = await response.json();
      setBookings(prevBookings => [...prevBookings, newBooking]);
      setShowBookingForm(false);
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  const updateBooking = async (formData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}api/bookings/${editingBooking._id}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to update booking');
      }
      const updatedBooking = await response.json();
      setBookings(prevBookings =>
        prevBookings.map(booking => (booking._id === updatedBooking._id ? updatedBooking : booking))
      );
      setEditingBooking(null);
      setShowBookingForm(false);
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  const deleteBooking = async (bookingId) => {
    try {
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/bookings/${bookingId}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      setBookings(prevBookings => prevBookings.filter(booking => booking._id !== bookingId));
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  const handleEditBooking = (booking) => {
    setEditingBooking(booking);
    setShowBookingForm(true);
  };

  const handleShowCreateForm = () => {
    setEditingBooking(null);
    setShowBookingForm(true);
  };

  return (
    <div className='container'>
      <h2>Booking List</h2>
      {/* {showBookingForm && (
        <BookingForm
          onSubmit={editingBooking ? updateBooking : createBooking}
          initialData={editingBooking}
          onCancel={() => setShowBookingForm(false)}
        />
      )} */}
         {/* <Link to="/serviceform">
        <button className='btn btn-lg btn-primary text-white  mr-5 mt-3 px-4' onClick={handleShowCreateForm}>Create</button>
      </Link> */}
     
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Address</th>
            <th>Pet Category</th>
            <th>Pet Age</th>
            <th>Reservation Date</th>
            <th>Reservation End Date</th>
            <th>Reservation Time</th>
            <th>Service</th>
            <th>Price</th>
            <th>Total Days</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking._id}>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.phoneNo}</td>
              <td>{booking.address}</td>
              <td>{booking.petCategory}</td>
              <td>{booking.petAge}</td>
              <td>{new Date(booking.reservationDate).toLocaleDateString()}</td>
              <td>{new Date(booking.reservationEndDate).toLocaleDateString()}</td>
              <td>{booking.reservationTime}</td>
              <td>{booking.service}</td>
              <td>{booking.price}</td>
              <td>{booking.totalDays}</td>
              <td>
                <button className='btn btn-lg btn-primary text-white mr-5 mt-3 px-4' onClick={() => handleEditBooking(booking)}>Edit</button>
                <button className='btn btn-lg btn-primary text-white mr-5 mt-3 px-4' onClick={() => deleteBooking(booking._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <BookingForm onSubmit={editingBooking ? updateBooking : createBooking} initialData={editingBooking} />
    </div>
  );
};

export default BookingList;
