import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const { name, email, password, confirmPassword } = user;

    if (!name || !email|| !password || !confirmPassword) {
      setError('Please fill in all fields.');
      toast.error('Please fill in all fields.');
      setLoading(false);
      return;
    }

   

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      toast.error('Password must be at least 6 characters long.');
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Password and Confirm Password don't match.");
      toast.error("Password and Confirm Password don't match.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/logoutapi/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          credentials: 'include',
        },
        body: JSON.stringify({
          username: name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.status === 400 || !data.success) {
        setError(data.message);
        toast.error(data.message);
      } else {
        toast.success(data.message);
        navigate('/login'); 
      }

      localStorage.setItem('petguardUser', JSON.stringify({ name: data.name, email: data.email, role: data.role }));

    } catch (error) {
      console.error('Error in fetch request:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container shadow my-5">
      <div className="row justify-content-end">
        <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
          <h1 className="display-4 fw-bolder">Hello, Friend</h1>
          <p className="lead text-center" style={{color:"black"}}>Enter Your Details to Register</p>
          <h5 className="mb-4">OR</h5>
          <Link to="/login" className="btn btn-outline-primary rounded-pill pb-2 w-50">
            Login
          </Link>
        </div>
        <div className="col-md-6 p-5">
          <form onSubmit={handleSubmit} method="POST">
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={user.name}
                onChange={handleInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="Email1"
                aria-describedby="emailHelp"
                name="email"
                value={user.email}
                onChange={handleInput}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="Password1" className="form-label">
                Password
              </label>
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  id="Password1"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
                <span
                  className="input-group-text password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleInput}
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
              className="btn btn-lg btn-primary text-white px-3 d-none d-lg-block"
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
