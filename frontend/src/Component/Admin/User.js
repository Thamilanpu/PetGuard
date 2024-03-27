import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    Username: '',
  email: '',
    // id: ''
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users`,{withCredentials:true});
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/users/${userId}`,{withCredentials:true});
      setUsers(users.filter(user => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
console.log(users);
  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({
      Username: user. Username,
      email: user.email,
      id: user.id
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = { ...editingUser, ...formData };
      await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/users/${editingUser._id}`, updatedUser,{withCredentials:true});
      setUsers(users.map(user => user._id === editingUser._id ? updatedUser : user));
      setEditingUser(null);
      setFormData({
        Username: '',
        // lastName: '',
        email: ''
      });
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className='container'>
      <h2 className='details'>User List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button  className="btn btn-primary btn-lg text-white" onClick={() => handleEdit(user)}>Edit</button>
                <button className='btn btn-lg btn-primary text-white ' onClick={() => deleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingUser && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <h3>Edit User</h3>
            <label>
            Username:
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            </label>
            {/* <label>
              Last Name:
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            </label> */}
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <button className='btn btn-lg btn-primary text-white mt-3 px-4' type="submit">Save</button>
            <button className='btn btn-lg btn-secondary text-white mt-3 px-4' type="button" onClick={() => setEditingUser(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserList;

