

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DropdownButton, Dropdown, Image } from 'react-bootstrap';
import img from  '../img/user2.jpeg';
import logo from  '../Assets/img/logo.png';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  const storedUser = JSON.parse(localStorage.getItem('petguardUser') || '{}');
  const {  logout } = useAuth();

  const loginCheck=(route)=>{
    if(storedUser===null){
      navigate("/login");
    }else{
      
      navigate(route);
    }
  }

  
  return (
    <>
    <div className="container-fluid p-0" id="petguard">
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
          <div className="d-flex align-items-center br-50%">
                      <Image width="100px" src={logo}  />
                      {/* <span>{storedUser.username}</span> <br/> */}
                    </div>
            {/* <h1 className="m-0 text-uppercase text-dark">
              <i className="bi bi-shop fs-1 text-primary me-3"></i> Pet Guard
            </h1> */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
              <Link to="/service" className="nav-item nav-link">
                Service
              </Link>

              {storedUser ? (
                
                
                <DropdownButton 
               
                  title={
                    <div className="d-flex align-items-center br-50%">
                      <Image width="50px" src={img} roundedCircle />
                      {/* <span>{storedUser.username}</span> <br/> */}
                    </div>
                  }
                  variant="default"
                  className="btn-circle text-white pr-5"
                  roundedCircle
                >
                  <Dropdown.ItemText>
                    <span>{storedUser.username}</span> <br/>
                    <span>{storedUser.email}</span>
                  </Dropdown.ItemText>
                  {isAdmin && (
                    <Dropdown.Item onClick={() => loginCheck('/admin')} className="text-dark">
                      Dashboard
                    </Dropdown.Item>
                    //   <Dropdown.Item onClick={() => navigate('/admin')} className="text-dark">
                    //   Dashboard
                    // </Dropdown.Item>
                  )}
                  <Dropdown.Item onClick={() => navigate('/profile')} className="text-dark">
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => {navigate('/login');logout()}} className="text-danger">
                    Logout
                  </Dropdown.Item>
                </DropdownButton>
                
              ) : (
                <Link to="/login" className="btn" id="login_btn">
                  Login
                </Link>
                // btn btn-warning px-4 py-2 fs-5 mt-3 go-btn fw-bold
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div className='nav' style={{width:"100vw",height:"14vh"}}> </div>
    </>
  );
};

export default Header;



































































