import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TotalBooking = () => {
  const [totalBookings, setTotalBookings] = useState(0);

  useEffect(() => {
    const fetchTotalBookings = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/bookings`, { withCredentials: true });
        const total = response.data.bookings.length;
        setTotalBookings(total);
      } catch (error) {
        console.error('Error fetching total bookings:', error);
      }
    };

    fetchTotalBookings();
  }, []);

  return (
    <div>
      <h2>Total Bookings: {totalBookings}</h2>
    </div>
  );
};

export default TotalBooking;
