import React from "react";
import { Carousel } from 'react-bootstrap';
import About from "./About";
import Service from "./Service";

function Home() {
  return (
    <div className="Home ">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={require("../../Component/Assets/img/carousel-1.jpg")} alt="First slide" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">

          <Carousel.Caption className="carousel-caption-content text-center">
          <div className="p-3 text-center" style={{maxWidth: "900px", backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: "10px", padding: "20px" }}>
              <h3 className="text-white mb-3 d-none d-sm-block">Best Pet Services</h3>
              <h1 className="display-3 text-white mb-3">Pet Spa & Grooming</h1>
              <h5 className="text-white mb-3 d-none d-sm-block">Discover the best pet services to keep your furry friend happy and healthy, ensuring a life filled with joy and well-being.</h5>
       
            <a href="/booking" className="btn btn-lg btn-primary  text-white mt-3 px-4">Book Now</a>
            </div>
          </Carousel.Caption>
         </div> 
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={require("../../Component/Assets/img/carousel-2.jpg")} alt="Second slide" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">

          <Carousel.Caption className="carousel-caption-content text-center">
            <div className="p-3 text-center" style={{ maxWidth: "900px", backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: "10px", padding: "20px" }}>
              <h3 className="text-white mb-3 d-none d-sm-block">Best Pet Services</h3>
              <h1 className="display-3 text-white mb-3">Pet Spa & Grooming</h1>
              <h5 className="text-white mb-3 d-none d-sm-block">Discover the best pet services to keep your furry friend happy and healthy, ensuring a life filled with joy and well-being.</h5>
              <a href="/booking" className="btn btn-lg btn-primary text-white mt-3 px-4">Book Now</a>
             </div>
          </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
      
      <About></About>
      <Service></Service>
    </div>
  );
}

export default Home;
