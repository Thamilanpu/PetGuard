import React, { useState } from 'react';

const BookingForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <form className="card card-body p-2 m-2 shadow rounded-2" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input id="name" className="form-control" type="text" name="name" value={formData.name || ''} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input id="email" className="form-control" type="email" name="email" value={formData.email || ''} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNo">Phone Number:</label>
              <input id="phoneNo" className="form-control" type="text" name="phoneNo" value={formData.phoneNo || ''} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input id="address" className="form-control" type="text" name="address" value={formData.address || ''} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="petCategory">Pet Category:</label>
              <input id="petCategory" className="form-control" type="text" name="petCategory" value={formData.petCategory || ''} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="petAge">Pet Age:</label>
              <input id="petAge" className="form-control" type="text" name="petAge" value={formData.petAge || ''} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="reservationDate">Reservation Date:</label>
              <input id="reservationDate" className="form-control" type="date" name="reservationDate" value={formData.reservationDate || ''} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="reservationEndDate">Reservation End Date:</label>
              <input id="reservationEndDate" className="form-control" type="date" name="reservationEndDate" value={formData.reservationEndDate || ''} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="reservationTime">Reservation Time:</label>
              <input id="reservationTime" className="form-control" type="text" name="reservationTime" value={formData.reservationTime || ''} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service:</label>
              <input id="service" className="form-control" type="text" name="service" value={formData.service || ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input id="price" className="form-control" type="number" name="price" value={formData.price || ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="totalDays">Total Days:</label>
              <input id="totalDays" className="form-control" type="number" name="totalDays" value={formData.totalDays || ''} onChange={handleChange} />
            </div>
            <button className="btn btn-lg btn-primary text-white mr-5 mt-3 px-4" type="submit">{initialData ? 'Update Booking' : 'Create Booking'}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
