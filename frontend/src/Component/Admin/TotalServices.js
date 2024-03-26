import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TotalService = () => {
  const [totalServices, setTotalServices] = useState(0);

  useEffect(() => {
    const fetchTotalServices = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/services`,{ withCredentials: 'true' });
        const total = response.data.services.length;
        setTotalServices(total);
      } catch (error) {
        console.error('Error fetching total services:', error);
      }
    };

    fetchTotalServices();
  }, []);

  return (
    <div>
      <h2>Total Service: {totalServices}</h2>
    </div>
  );
};

export default TotalService;
