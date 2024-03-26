

import React, { useState, useEffect } from 'react';
import ServiceModal from '../Modal/serviceModal';
import { useNavigate } from 'react-router-dom';
import Booking from './Booking';

function Service() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState({});
  const [serviceDetails, setServiceDetails] = useState({});
  const [showBooking, setShowBooking] = useState(false);
  const navigate = useNavigate();
  

  const handleBookNow = (service) => {
    navigate(`/booking?serviceTitle=${service.title}&servicePrice=${service.Price}`);
  };

  const handleCloseForm = () => {
    setShowBooking(false);
  };

  const handleShowModal = async (service) => {
    setSelectedService(service);
    setShowModal(true);
    await fetchServiceDetails(service.id);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const services = [
    { title: 'PetBoarding', Price: 900.00, description: 'Pet boarding attendants are a combination of a pet sitter and a veterinary assistant. The main difference is that pet boarding attendants don’t get to choose the pets they look after as pets are taken to a pet boarding business. Pet boarding assistants may be required to work on holidays, especially if the business is open 7 days a week.' },
    { title: 'DogWalking', Price: 1000.00, description: 'Exercise is as important to dogs as it is to humans. So, for very busy people, hiring someone to walk their dogs is just natural. To be a dog walker, one can either join an existing company. You can also be a private dog walker, or join a dog walking app for starters and get a feel of how things go and how much you can potentially earn from it. The job seems pretty simple, but there still are prerequisites to this profession. At the very least, a dog walker should be familiar with state laws, should know how to handle all kinds of dogs, and have the proper training for emergency situations.' },
    { title: 'DogGrooming', Price: 1100.00, description: 'If you are someone who just loves seeing those poodles and chow chows with their hair trimmed, and the Maltese that looks like it has its hair brushed more times in a day than you brush your hair in a week, then the dog grooming profession wouldn’t be alien to your ears. When you’re the creative type, or maybe even a frustrated hairstylist, perhaps dog grooming would be twice the fun for someone who loves pets.' },
    { title: 'PetTraining', Price: 1200.00, description: 'Pet trainers teach our pets to listen, be obedient, and ‘have manners’. Well-trained pets are also able to help their owners by being less of a headache when it comes to having to clean up after them. They can be dog trainers, cat trainers, or any other type of animal (whether domesticated or not) that requires a lot of expertise in animal behavior.' },
    { title: 'CatSitting & Feeding', Price: 1300.00, description: 'We at Animals at Home offer you a friendly, reliable and professional cat care service for your cats in the familiar surroundings of their own home. Many cats (and some owners) find the experience of a cattery stressful and we aim to provide a real alternative. Our Cat Care at Home service is ideal for all sorts of cats, from independent types that like to come and go as they please through a cat flap, to elderly cats that just want to sleep in their favourite spot and of course fuss and cuddles along the way. Cat Care Home visits include litter tray cleaning, feeding, changing water. We can even cater for cats on medication including diabetic cats as we are fully trained in administering tablets and injections. We will also keep a good eye on your home ensuring that you can enjoy your holiday in peace.' },
    { title: 'FamilyVacancies', Price: 1400.00, description: 'We need dog loving Boarding Host Families to join us to look after other peoples dogs….Many of our families are retired people who enjoy the flexibility of caring for a pet without the full time responsibility, or may work from home and would like some company. Alternatively, they may be at home during the day and would like to have a dog part-time. A visiting dog compliments their existing situation perfectly, whilst earning some additional income. Becoming a Boarding Host! You are able to enjoy the companionship of looking after pets, without the full time responsibility. Great exercise, very sociable. You become part of a pet loving national organisation. You are supported 24 hours a day, 7 days a week. You can add extra income for the household.' },
  ];



  const fetchServiceDetails = async (serviceId) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/service/${serviceId}`);
      const data = await response.json();
      setServiceDetails(data);
    } catch (error) {
      console.error('Error fetching service details:', error);
    }
  };

  return (
    <div className="Service">
      <div className="container-fluid bg-light pt-5">
        <div className="container py-5">
          <div className="d-flex flex-column text-center mb-5">
            <h4 className="text-secondary mb-3">Our Services</h4>
            <h1 className="display-4 m-0">
              <span className="text-primary">Premium</span> Pet Services
            </h1>
          </div>
          <div className="row pb-3">
            {services.map((service) => (
              <div key={service.id} className="col-md-6 col-lg-4 mb-4">
                <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                  <h3 className="mb-3">{service.title}</h3>
                  <h1 className="display-7 text-primary mb-0">
                    <small className="align-top">Rs</small>{service.Price}<small className="align-bottom">/ PerDay</small>
                  </h1>
                  {/* <p>{service.shortDescription}</p> */}
                  <button className="text-uppercase font-weight-boldx  text-white  mt-3 px-4  btn-lg  btn btn-lg btn-secondary" onClick={() => handleShowModal(service)}>
                    Read More<i className="bi bi-chevron-right "></i>
                  </button>
                  <button className="btn btn-lg btn-primary text-white mt-3 px-4 " onClick={() => handleBookNow(service)}>
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <ServiceModal show={showModal} handleClose={handleCloseModal} serviceDetails={selectedService} handleBookNow={handleBookNow} />

      {/* Booking Form */}
      {showBooking && (
        <Booking
          service={selectedService}
          handleClose={handleCloseForm}
          handleBookingSuccess={() => {
            setShowModal(true);
            handleCloseForm();
          }}
        />
      )}
    </div>
  );
}

export default Service;





