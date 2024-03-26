import React from "react";
// import { Link } from "react-router-dom";

function About() {
    return (
        <div className="About">
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-5 mb-5 mb-lg-0" style={{ minheight: "500px" }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded" src={require("../Assets/img/about.jpg")} style={{ objectfit: "cover" }} alt="" />
                            </div>
                        </div>
                        <div className="container py-5">
                            <div className="row py-5">
                                <div className="col-lg-7 pb-5 pb-lg-0 px-3 px-lg-5">
                                    <h4 className="text-secondary mb-3">About Us</h4>
                                    <h1 className="display-4 mb-4"><span className="text-primary">Boarding</span> & <span className="text-secondary">Daycare</span></h1>
                                    <h5 className="text-muted mb-3">Tailored Boarding and Daycare Services for Your Furry Companions</h5>
                                    <p className="mb-4">At Pet Guard, we understand that your pets are cherished members of your family. Our boarding and daycare services are designed to provide a home away from home, ensuring your furry friends experience comfort, care, and joy in a secure environment. Our dedicated team of pet enthusiasts is committed to creating a positive and engaging experience, offering personalized attention, playtime, and cozy accommodations. Whether it's a short stay or an extended vacation, entrust us with the well-being of your pets, and rest assured they'll receive the love and attention they deserve.</p>
                                    <ul className="list-inline">
                                        <li><h5><i className="fa fa-check-double text-secondary mr-3"></i>Best In Industry</h5></li>
                                        <li><h5><i className="fa fa-check-double text-secondary mr-3"></i>Emergency Services</h5></li>
                                        <li><h5><i className="fa fa-check-double text-secondary mr-3"></i>24/7 Customer Support</h5></li>
                                    </ul>
                                    {/* <a href="" className="btn btn-lg btn-primary text-white mt-3 px-4">Learn More</a> */}
                                </div>
                                <div className="col-lg-5">
                                    <div className="row px-3">
                                        <div className="col-12 p-0">
                                            <img className="img-fluid w-100" src={require("../Assets/img/about-1.jpg")} alt="" />
                                        </div>
                                        <div className="col-6 p-0">
                                            <img className="img-fluid w-100" src={require("../Assets/img/about-2.jpg")} alt="" />
                                        </div>
                                        <div className="col-6 p-0">
                                            <img className="img-fluid w-100" src={require("../Assets/img/about-3.jpg")} alt="" />
                                        </div>
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

export default About;
