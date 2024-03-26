import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = user;

    if (!email || !password) {
      toast.error('Please fill in both email and password.');
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          credentials: 'include',
        },
    
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || 'Invalid Credentials');
      } else {
        toast.success(data.message || 'Login Successful');

        const { email, role, username, token } = data.user;
      

        localStorage.setItem('petguardUser', JSON.stringify({ email, role, username, token }));
        const adminEmail = "sthamil1016@gmail.com";
        if (user.email === adminEmail) {
          localStorage.setItem('isAdmin', true);
        }
      
        login({ email, role, username, token });
        
        navigate('/');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('Login failed: An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container shadow my-5">
      <div className="row">
        <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
          <h1 className="display-4 fw-bolder">Welcome Back</h1>
          <p className="lead text-center "  style={{color:"black"}}>Enter Your Credentials To Login</p>
          <h5 className="mb-4">OR</h5>
          <Link to="/register" className="btn btn-outline-primary rounded-pill pb-2 w-50">
            Register
          </Link>
        </div>
        <div className="col-md-6 p-5">
          <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="Email1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="Email1"
                aria-describedby="emailHelp"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  id="Password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              <span
                  className="input-group-text password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-lg sign-up-btn btn-primary text-white mt-3 px-4 d-none d-lg-block"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


