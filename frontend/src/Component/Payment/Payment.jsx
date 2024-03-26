import React, { useState } from "react";
import StripeCheckout from 'react-stripe-checkout';
const Payment = ({handlePaymentSuccess}) => {
  const [product , setProduct] = useState({
    name :'Get Your Service ',
    price : 90000,
    productBy : 'Petguard'
  })         
  const makePayment = async(token) => {
    const body = {
      token,
      product
    }
    const headers ={
      'Content-Type':"application/json"
    }
    return fetch(`${process.env.REACT_APP_BACKEND_URL}/api/payment`,{
      method:'POST',
      headers,
      body :JSON.stringify(body)
    }).then((response) => {
      handlePaymentSuccess()
      console.log(response)
    }).catch((err) => {
      console.log(err)
    })
  }
  return(
    <div style={{marginTop:"100px"}}>
     <StripeCheckout
       name="Payment"
       amount={product.price}
       currency="LKR"
       token={makePayment}
       stripeKey="pk_test_51OsfGISJJxzqvdwncPXClnFB3PnAwmKJ6Y6kCOl7l4AfrvSzUnIjOaqGuDfAlmXBwwa4Puym7qqvFnce9PWRtivS00dHsD8OsV"
     >
      <button>Payment</button>
     </StripeCheckout>
    </div>
  )
}
export default Payment










// import React, { useState } from "react";
// import PaymentModal from "../Modal/PaymentModal";

// const Payment = ({ handlePaymentSuccess }) => {
//   const [showModal, setShowModal] = useState(false);

//   const openModal = () => {
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div style={{ marginTop: "100px" }}>
//       <button onClick={openModal}>Payment</button>

//       <PaymentModal
//         showModal={showModal}
//         handleClose={closeModal}
//         handlePaymentSuccess={handlePaymentSuccess}
//       />
//     </div>
//   );
// };

// export default Payment;
