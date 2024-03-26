import React from "react";
import { SocialIcon } from 'react-social-icons'
function Footer() {
  return (
    <div className="Footer">

      <div className="container-fluid bg-light mt-5 py-5 py-lg-0 mb-5">
        <div className="container pt-4">
          <div className="row g-7">
            <div className="col-lg-3 col-md-4">
              <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Get In Touch</h5>
              <p className="mb-4">Reach out to us and get in touch for any inquiries, assistance, or to schedule a visit – we're here to ensure your pet's well-being and answer all your questions</p>
             
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Quick Links</h5>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-body mb-2" href="/home"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                <a className="text-body mb-2" href="/about"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                <a className="text-body mb-2" href="/services"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                <a className="text-body" href="/contact"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Popular Links</h5>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-body mb-2" href="/home"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                <a className="text-body mb-2" href="/about"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                <a className="text-body mb-2" href="/services "><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                <a className="text-body" href="/contact"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Newsletter</h5>
              <form action="">
                <div className="input-group">
                  <input type="text" className="form-control p-3" placeholder="Your Email"/>
                    <button className="btn-lg btn btn-primary text-white">Sign Up</button>
                </div>
              </form>
              </div>
            {/* <div className="col-12 text-center text-body">
              <a className="text-body" href="">Customer Support</a>
              <span className="mx-1">|</span>
              <a className="text-body" href="">Payments</a>
              <span className="mx-1">|</span>
              <a className="text-body" href="">Help</a>
              <span className="mx-1">|</span>
              <a className="text-body" href="">FAQs</a>
            </div> */}
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white-50 py-4">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">&copy; <a className="text-white" href="#">Pet Guard</a>. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">Designed by <a className="text-white" href="https://PetGuard">Pet Guard</a></p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Footer;
