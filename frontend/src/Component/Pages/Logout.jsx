import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Logout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/logout`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      const data = await res.json();

      if (res.status === 200 && data.success) {
        toast.success(data.message);
        localStorage.removeItem('token');
        localStorage.removeItem("isAdmin")
        navigate('/login');
      } else {
        toast.error(data.message || 'Logout failed. Please try again.');
      }
    } catch (error) {
      console.error('Error in fetch request:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Logout</h5>
              <p className="card-text">Are you sure you want to logout?</p>
              <button
                type="button"
                className="btn btn-lg btn-primary  text-white mx-2"
                onClick={handleLogout}
                disabled={loading}
              >
                {loading ? 'Logging out...' : 'Logout'}
              </button>
              <Link to="/" className="btn btn-lg btn-secondary text-white mx-2">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;















