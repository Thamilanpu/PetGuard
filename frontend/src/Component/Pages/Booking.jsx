
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Modal, Button } from "react-bootstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookingSummaryModal from '../Modal/BookingSummaryModal';

const Booking = ({ handleClose, handleBookingSuccess, selectedService }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const serviceTitle = queryParams.get('serviceTitle');
  const servicePrice = queryParams.get('servicePrice');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showBookingSummary, setShowBookingSummary] = useState(false);
  const [totalDays, setTotalDays] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [reservationDate, setStartDate] = useState('');
  const [reservationEndDate, setEndDate] = useState('');
  const [response, setresponse] = useState('');
  

 
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    address: "",
    PetCategory: "",
    petAge: "",
    reservationTime: "",
    reservationDate: "",
    reservationEndDate: "",
    totalDays: "",
    totalPrice:"",
    selectedService: selectedService || { Price: 0.00 }});
    
    


  const handleCloseModal = () => {
    setShowModal(false);
    setShowBookingSummary(false);
  };

const handleStartDateChange = (event) => {
  const { name, value } = event.target;
  setBookingData({ ...bookingData, [name]: value });
};

const handleEndDateChange = (event) => {
  const { name, value } = event.target;
  setBookingData({ ...bookingData, [name]: value });
};


  const nextPage = () => {
    if (currentPage === 1) {
      if (!validateFormPage1()) {
        return;
      }
    }

    if (currentPage === 2) {
      if (!validateFormPage2()) {
        return;
      }
    }

    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const validateFormPage1 = () => {
    const { name, email, phoneNo, address, PetCategory, petAge } = bookingData;

    if (!name) {
      toast.error('Please enter your name.');
      return false;
    }

    if (!email || !validateEmail(email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }

    

    if (!phoneNo || !validatePhoneNumber(phoneNo)) {
      toast.error('Please enter a valid phone number.');
      return false;
    }
    
    if( !(phoneNo.match('[0-9]{10}')) ){
      alert('Please provide valid phone number');
      toast.error('Please provide valid phone number');
      return;
     
  }


    if (!address) {
      toast.error('Please enter your address.');
      return false;
    }

    if (!PetCategory) {
      toast.error('Please enter your pet category.');
      return false;
    }

    if (!petAge ) {
      toast.error('Please enter your pet age.');
      return false;
    }

    return true;
  };

  const validateFormPage2 = () => {
    const { reservationTime, reservationDate, reservationEndDate } = bookingData;

    if (!reservationTime) {
      toast.error('Please select a reservation time.');
      return false;
    }

    if (!reservationDate || !reservationEndDate || !validateDates(reservationDate, reservationEndDate)) {
      toast.error('Please select valid reservation dates.');
      return false;
    }

 
    return true;
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhoneNumber = (phoneNumber) => {
    const re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    return re.test(phoneNumber);
  };

 
 

  // const validateDates = (startDate, endDate) => {
  //   const start = new Date(startDate);
  //   const end = new Date(endDate);

  //   return end > start;
  // };


  const validateDates = (reservationDate, reservationEndDate) => {
    const start = new Date(reservationDate);
    const end = new Date(reservationEndDate);

    return end > start;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (currentPage === 1 && !validateFormPage1()) {
      return;
    }

    if (currentPage === 2 && !validateFormPage2()) {
      return;
    }

    try {
      setLoading(true);

      if (currentPage === 1) {
        const isEmailUnique = await validateEmail(bookingData.email);

        if (!isEmailUnique) {
          toast.error('Email is already registered. Please use a different email.');
          return;
        }
      }

      // const response = await fetch("http://localhost:5000/api/booking/book", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Authorization": "UlwRltzy8WxbKDBByVgcM6uSuuZXjisSpKXgVa97nyw=",
      //     // credentials: 'include',
      //   },
      //   body: JSON.stringify(bookingData),
      // });
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/booking`, {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "UlwRltzy8WxbKDBByVgcM6uSuuZXjisSpKXgVa97nyw=",
            },
            body: JSON.stringify(bookingData),
        });
    
        console.log(bookingData);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const responseData = await response.json();
        console.log("Booking successful:", responseData);
        if (!responseData.success) {
        console.error("Booking failed:", responseData.message);
        toast.error("Booking failed. Please try again later.");
        return;
      }

      toast.success("Booking successful!");
      setShowModal(true);
      setShowBookingSummary(true);
    } catch (error) {
        console.error("Error:", error.message);
        toast.error("An error occurred while processing your request. Please try again later.");
        return; 
    }
    

    } catch (error) {
      console.error("Booking failed:", error.message);
      toast.error("Booking failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

    useEffect(() => {
    if (location && location.search) {
      const searchParams = new URLSearchParams(location.search);
      const serviceTitle = searchParams.get("serviceTitle");
      const servicePrice = searchParams.get("servicePrice");
      setBookingData((prevData) => ({
        ...prevData,
        selectedService: { title: serviceTitle, Price: servicePrice },
      }));
    }
  }, [location]);
  

  useEffect(() => {
    calculateTotalDays();
  }, [bookingData.reservationDate,bookingData.reservationEndDate]);

  const calculateTotalDays = () => {
    const startDateObject = new Date(bookingData.reservationDate);
    const endDateObject = new Date(bookingData.reservationEndDate);

    if (!isNaN(startDateObject.getTime()) && !isNaN(endDateObject.getTime())) {
      const differenceInMilliseconds = endDateObject - startDateObject;
      const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
      setTotalDays(differenceInDays);
      setBookingData({ ...bookingData, totalDays: totalDays });
    } else {
      setTotalDays(null);
    }
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [totalDays,totalPrice, bookingData.selectedService&&bookingData.selectedService.Price]);

  const calculateTotalPrice = () => {
    if (!isNaN(totalDays) && !isNaN(bookingData.selectedService&&bookingData.selectedService.Price)) {
      const newTotalPrice = totalDays * bookingData.selectedService.Price;
      setTotalPrice(newTotalPrice);
      setBookingData({ ...bookingData, totalPrice: totalPrice });
    } else {
      setTotalPrice(null);
    }
  };

  const renderFormPage = () => {
    switch (currentPage) {
      case 1:
        return renderFormPage1();
      case 2:
        return renderFormPage2();
      default:
        return null;
    }
  };

  const renderFormPage1 = () => {
    return (
      <div className="contrainer">
      <div className="row">
         
        <div className="col-lg-6">
          <form className="card card-body p-2 m-2 shadow rounded-2" onSubmit={handleSubmit}>
            <h5>User Details</h5>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your Full Name"
                onChange={handleInput}
                name="name"
                value={bookingData.name}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                onChange={handleInput}
                name="email"
                value={bookingData.email}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNo">Phone No</label>
              <input
                type="tel"
                className="form-control"
                id="phoneNo"
                placeholder="Enter your phone number"
                onChange={handleInput}
                name="phoneNo"
                value={bookingData.phoneNo}
                pattern="[0-9]*"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter your address"
                onChange={handleInput}
                name="address"
                value={bookingData.address}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="PetCategory">Pet Category</label>
              <input
                type="text"
                className="form-control"
                id="PetCategory"
                placeholder="Enter your Pet Catory"
                onChange={handleInput}
                name="PetCategory"
                value={bookingData.PetCategory}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="petAge">Pet Age</label>
              <input
                type="text"
                className="form-control"
                id="petAge"
                placeholder="Enter your Pet Age"
                onChange={handleInput}
                name="petAge"
                value={bookingData.petAge}
                required
              />
            </div>
            <br/>
            <Modal.Footer>
    
        <Button variant=" btn btn-lg btn-primary text-white mt-3 px-4" onClick={nextPage}>
              Next
            </Button>

      </Modal.Footer>
          </form>
        </div>

        <div className="col-lg-6">
          <div className="card card-body p-2 m-2 shadow rounded-2">
            <img
              src={require("../Assets/img/about-1.jpg")}
              alt="Image Alt Text"
              className="img-fluid"
              style={{ height: '681px' }}
            />
          </div>
        </div>
      </div>
      </div>
    );
  };

  const renderFormPage2 = () => {
    return (
      <div className="row">
        <div className="col-lg-6">
          <form className="card card-body p-2 m-2 shadow rounded-2" onSubmit={handleSubmit}>
            <h5>Service Details</h5>
            <div className="form-group">
              <label htmlFor="reservationTime">Reservation Time</label>
              <input
                type="time"
                className="form-control"
                id="reservationTime"
                onChange={handleInput}
                name="reservationTime"
                value={bookingData.reservationTime}
                required
              />
            </div>

<div className="form-group">
  <label htmlFor="reservationDate">Reservation Date</label>
  <input
    type="date"
    className="form-control"
    id="reservationDate"
    onChange={handleStartDateChange}
    name="reservationDate"
    value={bookingData.reservationDate} 
    required
  />
</div>

<div className="form-group">
  <label htmlFor="reservationEndDate">Reservation End Date</label>
  <input
    type="date"
    className="form-control"
    id="reservationEndDate"
    onChange={handleEndDateChange}
    name="reservationEndDate"
    value={bookingData.reservationEndDate} 
    required
  />
</div>

            <div className="form-group">
  <label htmlFor="totalDays">Total Days</label>
  <input
    type="text"
    className="form-control"
    id="totalDays"
    value={totalDays !== null ? totalDays : "Please select valid dates"}
    readOnly
  />
</div>

            <div className="form-group">
              <label htmlFor="selectedService">Service</label>
              <input
                type="text"
                className="form-control"
                id="selectedService"
                value={bookingData.selectedService ? bookingData.selectedService.title : "No service selected"}
                readOnly
              />
            </div>

            <div className="form-group">
              <label htmlFor="totalPrice">Total Price</label>
              <input
                type="text"
                className="form-control"
                id="totalPrice"
                value={totalPrice !== null ? totalPrice : ""}
                readOnly
              />
            </div>
            <br/>
            <Modal.Footer>
      
         <Button variant=" btn btn-lg btn-secondary  text-white ml-5 mt-3 px-4" onClick={prevPage}>
              Previous
            </Button>

            <Button
                type="submit"
                className="btn btn-lg btn-primary text-white mr-5 mt-3 px-4"
                disabled={loading}
              >
                {loading ? "Booking..." : "Book Now"}
              </Button>

      </Modal.Footer>
          </form>
        </div>

        <div className="col-lg-6">
          <div className="card card-body p-2 m-2 shadow rounded-2">
            <img
              src={require("../Assets/img/about-1.jpg")}
              alt="Image Alt Text"
              className="img-fluid"
              style={{ height: '681px'}}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="containermt-5">
      <div className="row">
        {renderFormPage()}
        <div className="col-lg-12 d-flex justify-content-between mt-3">
          {currentPage > 1 && (
            <Button variant="" onClick={prevPage}>
             
            </Button>
          )}
          {currentPage < 2 ? (
            <Button variant="" onClick={nextPage}>
            
            </Button>
          ) : (
            <form
              className="col-lg-12 d-flex justify-content-between mt-6"
              onSubmit={handleSubmit}
            >
          
            </form>
          )}
        </div>
        <div className="container mt-5">
      
        <BookingSummaryModal
          show={showModal}
          handleClose={handleCloseModal}
          bookingData={bookingData}
          totalDays={totalDays}
          totalPrice={totalPrice}
          service={selectedService?.title || 'No service selected'}
        />
     
    </div>
      </div>
    </div>
  );
};

export default Booking;





