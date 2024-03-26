import React from "react";
import { Modal, Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";

const PaymentModal = ({ showModal, handleClose, handlePaymentSuccess }) => {
  const product = {
    name: "Get Your Service",
    price: 150000,
    productBy: "Petguard",
  };

  const makePayment = async (token) => {
    const body = {
      token,
      product,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const response = await fetch("http://localhost:5000/api/payment", {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });

      if (response.ok) {
        handlePaymentSuccess();
        console.log("Payment success:", response);
      } else {
        console.error("Payment failed:", response);
      }
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Make Payment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <StripeCheckout
          name="Payment"
          amount={product.price}
          currency="INR"
          token={makePayment}
          stripeKey="pk_test_51OsfGISJJxzqvdwncPXClnFB3PnAwmKJ6Y6kCOl7l4AfrvSzUnIjOaqGuDfAlmXBwwa4Puym7qqvFnce9PWRtivS00dHsD8OsV"
        >
          <Button variant="primary">Proceed to Payment</Button>
        </StripeCheckout>
      </Modal.Body>
    </Modal>
  );
};

export default PaymentModal;
