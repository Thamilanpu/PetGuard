import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TotalUser = () => {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchTotalUsers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users`, { withCredentials: true });
        const total = response.data.users.length;
        setTotalUsers(total);
      } catch (error) {
        console.error('Error fetching total users:', error);
      }
    };

    fetchTotalUsers();
  }, []);

  return (
    <div>
      <h2>Total Users: {totalUsers}</h2>
    </div>
  );
};

export default TotalUser;
