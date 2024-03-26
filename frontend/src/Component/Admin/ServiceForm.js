import React, { useState } from 'react';

const ServiceForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <form className="card card-body p-2 m-2 shadow rounded-2" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input id="title" className="form-control" type="text" name="title" value={formData.title || ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea id="description" className="form-control" name="description" value={formData.description || ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input id="price" className="form-control" type="text" name="price" value={formData.price || ''} onChange={handleChange} />
            </div>
            <button className='btn btn-lg btn-primary text-white mr-5 mt-3 px-4' type="submit">{initialData ? 'Update' : 'create'}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;






















// // import React, { useState } from 'react';

// // const ServiceForm = ({ onSubmit, initialData }) => {
// //   const [formData, setFormData] = useState(initialData || {});

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     onSubmit(formData);
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <div>
// //         <label>Title:</label>
// //         <input className="form-control" type="text" name="title" value={formData.title || ''} onChange={handleChange} />
// //       </div>
// //       <div>
// //         <label>Description:</label>
// //         <textarea name="description" value={formData.description || ''} onChange={handleChange} />
// //       </div>
// //       <div>
// //         <label>Price:</label>
// //         <input className="form-control" type="text" name="price" value={formData.price || ''} onChange={handleChange} />
// //       </div>
// //       <button type="submit">{initialData ? 'Update' : 'Create'}</button>
// //     </form>
// //   );
// // };

// // export default ServiceForm;












// import React, { useState } from 'react';
// import { toast } from 'react-toastify';

// const ServiceForm = () => {
//   const [serviceData, setServiceData] = useState({
//     name: '',
//     price: '',
//     description: '',
//   });
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setServiceData({
//       ...serviceData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append('name', serviceData.name);
//       formData.append('price', serviceData.price);
//       formData.append('description', serviceData.description);

//       const response = await fetch('http://localhost:5000/api/service/new', {
//         method: 'POST',
//         credentials: 'include',
//         body: formData
//       });
//       if (!response.ok) {
//         throw new Error('Failed to add service');
//       }
//       toast.success("Service added successfully!");
//       setServiceData({
//         name: '',
//         price: '',
//         description: '',
//       });
//     } catch (error) {
//       toast.error("Failed to add service. Please try again.");
//       console.error('Error adding service:', error);
//     }
//   };

//   return (
//     <div className='details'>
//       <div className="row">
//         <div className="col-12 col-md-10">
//           <div className="wrapper my-5">
//             <form onSubmit={handleSubmit} className="shadow-lg form">
//               <div className="form-group">
//                 <label>Name:</label>
//                 <input className="form-control" type="text" className="form-control" name="name" value={serviceData.name} onChange={handleChange} required />
//               </div>
//               <div className="form-group">
//                 <label>Price:</label>
//                 <input className="form-control" type="text" className="form-control" name="price" value={serviceData.price} onChange={handleChange} required />
//               </div>
//               <div className="form-group">
//                 <label>Description:</label>
//                 <textarea name="description" className="form-control" value={serviceData.description} onChange={handleChange} required />
//               </div>
//               <button type="submit" className="btn btn-block py-3">Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceForm;

