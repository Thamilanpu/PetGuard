import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceForm from './ServiceForm';

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/services', { credentials: 'include' });
      if (!response.ok) {
        throw new Error('Failed to fetch services');
      }
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const createService = async (formData) => {
    try {
      const response = await fetch('http://localhost:5000/api/services', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to create service');
      }
      const data = await response.json();
      setServices(prevServices => [...prevServices, data]);
    } catch (error) {
      console.error('Error creating service:', error);
    }
  };

  const updateService = async (formData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/services/${editingService._id}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to update service');
      }
      const data = await response.json();
      setServices(prevServices =>
        prevServices.map(service =>
          service._id === data._id ? { ...service, ...data } : service
        )
      );
      setEditingService(null);
    } catch (error) {
      console.error('Error updating service:', error);
    }
  };

  const deleteService = async (serviceId) => {
    try {
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/services/${serviceId}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      setServices(prevServices => prevServices.filter(service => service._id !== serviceId));
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  const handleEditService = (service) => {
    setEditingService(service);
  };

  return (
    <div className='container'>
    <div >
      <h2 className='details ml-4'>Service List</h2>
      {/* <Link to="/serviceform">
        <button className='btn btn-lg btn-primary text-white'>Create</button>
      </Link> */}

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map(service => (
            <tr key={service._id}>
              <td>{service.title}</td>
              <td>{service.price}</td>
              <td>{service.description}</td>
              <td>
                <button className='btn btn-lg btn-primary text-white mr-5 mt-3 px-4' onClick={() => handleEditService(service._id)}>Edit  </button>
                <button className='btn btn-lg btn-primary text-white mr-5 mt-3 px-4' onClick={() => deleteService(service._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ServiceForm onSubmit={editingService ? updateService : createService} initialData={editingService} />
    </div>
    </div>
  );
};

export default ServiceList;
