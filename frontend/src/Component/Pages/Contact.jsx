import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, formData);
      toast.success('Email sent successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to send email. Please try again.');
    }
  };

  return (
    <div className="Contact">
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: "600px" }}>
            <h6 className="text-primary text-uppercase">Contact Us</h6>
            <h1 className="display-5 text-uppercase mb-0">Please Feel Free To Contact Us</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-7">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12">
                    <input
                      type="text"
                      name="name"
                      className="form-control bg-light border-0 px-4"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      name="email"
                      className="form-control bg-light border-0 px-4"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Subject"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control bg-light border-0 px-4 py-3"
                      rows="8"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary text-white btn-lg w-100 py-3" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-5">
              <div className="bg-light mb-5 p-5">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h6 className="text-uppercase mb-1">Our Office</h6>
                    {/* <span>123 Street, New York, USA</span> */}
                  </div>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h6 className="text-uppercase mb-1">Email Us</h6>
                    {/* <span>info@example.com</span> */}
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h6 className="text-uppercase mb-1">Call Us</h6>
                    {/* <span>+012 345 6789</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
