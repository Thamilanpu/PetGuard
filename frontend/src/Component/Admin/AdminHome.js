import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill } from 'react-icons/bs';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

function AdminHome() {
  const [totalServices, setTotalServices] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalBookings, setTotalBookings] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const servicesResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/services`, { withCredentials: true });
        setTotalServices(servicesResponse.data.length);

        const usersResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users`, { withCredentials: true });
        setTotalUsers(usersResponse.data.length);

        const bookingsResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/bookings`, { withCredentials: true });
        setTotalBookings(bookingsResponse.data.length);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>USERS</h3>
            <p>{totalUsers}</p>
            <BsFillArchiveFill className='card_icon' />
          </div>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>PSERVICES</h3>
            <p>{totalServices}</p>
            <BsPeopleFill className='card_icon' />
          </div>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>BOOKINGS</h3>
            <p>{totalBookings}</p>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            width={500}
            height={300}
            data={[
              { name: 'Services', value: totalServices },
              { name: 'Users', value: totalUsers },
              { name: 'Bookings', value: totalBookings },
            ]}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={300}
            data={[
              { name: 'Services', value: totalServices },
              { name: 'Users', value: totalUsers },
              { name: 'Bookings', value: totalBookings },
            ]}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default AdminHome;
