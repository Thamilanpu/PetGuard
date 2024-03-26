// ~

// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Profile = () => {
//   const { user } = useAuth();
//   const [open, setOpen] = useState(false);
//   const [profileData, setProfileData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const dropdownRef = useRef();
//   const navigate = useNavigate();

//   const fetchUserProfile = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/profile', {
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setProfileData(data.user);
//       } else {
//         console.error('Error fetching user profile:', response.statusText);
//       }
//     } catch (error) {
//       console.error('An error occurred while fetching user profile:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUserProfile();
//   }, []);

//   const handleUpdateProfile = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/profile/update', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//         // body: JSON.stringify(img:avatar),
//       });

//       if (response.ok) {
       
//         fetchUserProfile();
//         console.log('Profile updated successfully');
//       } else {
//         console.error('Error updating user profile:', response.statusText);
//       }
//     } catch (error) {
//       console.error('An error occurred during profile update:', error);
//     }
//   };

//   return (
//     <div className="profile-dropdown" ref={dropdownRef}>
//       <div className="profile-trigger" onClick={() => setOpen(!open)}>
//         <img src={profileData.avatar || '/default-avatar.png'} alt="User Avatar" />
//       </div>

//       {open && (
//         <div className="dropdown-menu">
//           <h4>Name</h4> <br/>
//           <h3>{profileData.username}</h3>
//           <h4>Email Address</h4>
//           <p>{profileData.email}</p>
//           <ul>
//             <li>
//               <Link to="/profile">My Profile</Link>
//             </li>
//             <li>
//               <Link to="/profile/edit">Edit Profile</Link>
//             </li>
//             <li onClick={handleUpdateProfile}>Update Profile</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;














