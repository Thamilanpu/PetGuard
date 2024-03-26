import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { Link, useNavigate } from 'react-router-dom';

const BookingSummaryModal = ({ show, handleClose, bookingData, totalDays, totalPrice, service, handlePayNow }) => {
  const fadeAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 300 }, 
  });

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Booking Summary</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <animated.h5 style={fadeAnimation} className="text-success">
          Booking Successful!
        </animated.h5>
        <p>Thank you for your reservation.</p>

        <p>Name: {bookingData.name}</p>
        <p>Email: {bookingData.email}</p>
        <p>Phone No: {bookingData.phoneNo}</p>
        <p>Address: {bookingData.address}</p>
        <p>Address: {bookingData.PetCategory}</p>
        <p>Address: {bookingData.petAge}</p>
        <p>Service: {service}</p>
        <p>Reservation Date: {bookingData.reservationDate}</p>
        <p>Reservation Time: {bookingData.reservationTime}</p>
        <p>Total Days: {totalDays !== null ? totalDays : 'Invalid Date'}</p>
        <p>Total Price: {totalPrice !== null ? `$${totalPrice}` : 'Invalid Date or Service'}</p>
      
              
      </Modal.Body>
      <Modal.Footer>
      
        <button className="btn  text-white" onClick={handlePayNow}>
        <Link to="/payment" >
        Pay Now
              </Link> 
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookingSummaryModal;
