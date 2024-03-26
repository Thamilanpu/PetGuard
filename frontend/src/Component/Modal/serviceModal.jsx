
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function ServiceModal({ show, handleClose, serviceDetails, handleBookNow }) {
  const navigate = useNavigate();

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{serviceDetails.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{serviceDetails.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-lg btn-secondary text-white" onClick={handleClose}>
          Close
        </button>
        <button className="btn btn-lg btn-primary text-white" onClick={handleBookNow}>
          Book Now
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ServiceModal;

