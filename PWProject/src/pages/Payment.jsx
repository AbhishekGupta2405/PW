import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FaCreditCard,
  FaWallet,
  FaUniversity,
  FaMobile,
  FaQrcode,
} from "react-icons/fa";
import { SiPaytm, SiGooglepay, SiPhonepe } from "react-icons/si";
import Header from "../components/Header";

const Payment = () => {
  const navigate = useNavigate();
  const { category, courseName } = useParams();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("upi");
  const [upiId, setUpiId] = useState("");

  // Course data for order summary
  const courseDataMap = {
    "web-development": {
      "Python Full Stack": { name: "Python Full Stack", price: 45000 },
      "Java Full Stack": { name: "Java Full Stack", price: 48000 },
      "Front-End": { name: "Front-End", price: 25000 },
      "MERN Full Stack": { name: "MERN Full Stack", price: 50000 },
    },
    "programming-languages": {
      Python: { name: "Python", price: 30000 },
      Java: { name: "Java", price: 35000 },
      C: { name: "C", price: 20000 },
      "C++": { name: "C++", price: 28000 },
      JavaScript: { name: "JavaScript", price: 32000 },
    },
  };

  const decodedCourseName = courseName
    ? decodeURIComponent(courseName)
    : "Python Full Stack";
  const courseData = courseDataMap[category]?.[decodedCourseName] || {
    name: "Python Full Stack",
    price: 45000,
  };

  // const handlePayment = () => {
  //   // In a real app, this would integrate with payment gateway
  //   alert(`Payment initiated for ${courseData.name} using ${selectedPaymentMethod}`);
  // };

  const generateQRCode = () => {
    // In a real app, this would generate actual QR code
    alert("QR Code generated for payment");
  };

  return (
    <>
      <Header title="Payment" />
      <div className="payment-container">
        {/* Header */}
        <div className="payment-header">
          <div className="order-summary-header">
            <h2>Order Summary</h2>
            <div className="purchased-order">
              <span>Purchased Order</span>
              <div className="course-info">
                <span className="course-name">{courseData.name}</span>
                <span className="course-price">
                  ₹{courseData.price.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="payment-content">
          {/* Left Side - Payment Methods */}
          <div className="payment-methods">
            <h3>Payment Methods</h3>

            {/* UPI Payment */}
            <div
              className={`payment-option ${
                selectedPaymentMethod === "upi" ? "active" : ""
              }`}
            >
              <div
                className="payment-option-header"
                onClick={() => setSelectedPaymentMethod("upi")}
              >
                <FaMobile className="payment-icon upi-icon" />
                <span>Pay Via UPI</span>
              </div>
            </div>

            {/* Cards Payment */}
            <div
              className={`payment-option ${
                selectedPaymentMethod === "cards" ? "active" : ""
              }`}
            >
              <div
                className="payment-option-header"
                onClick={() => setSelectedPaymentMethod("cards")}
              >
                <FaCreditCard className="payment-icon cards-icon" />
                <span>Cards</span>
              </div>
            </div>

            {/* Wallets Payment */}
            <div
              className={`payment-option ${
                selectedPaymentMethod === "wallets" ? "active" : ""
              }`}
            >
              <div
                className="payment-option-header"
                onClick={() => setSelectedPaymentMethod("wallets")}
              >
                <FaWallet className="payment-icon wallets-icon" />
                <span>Wallets</span>
              </div>
            </div>

            {/* Net Banking */}
            <div
              className={`payment-option ${
                selectedPaymentMethod === "netbanking" ? "active" : ""
              }`}
            >
              <div
                className="payment-option-header"
                onClick={() => setSelectedPaymentMethod("netbanking")}
              >
                <FaUniversity className="payment-icon netbanking-icon" />
                <span>Net Banking</span>
              </div>
            </div>
          </div>

          {/* Right Side - Payment Details */}
          <div className="payment-details">
            {selectedPaymentMethod === "upi" && (
              <div className="payment-details-content">
                <div className="upi-section">
                  <div className="upi-apps">
                    <p>Pay by any UPI app</p>
                    <p className="upi-description">
                      Scan the QR using any UPI app on your mobile phone like
                      PhonePe, Paytm, GooglePay, BHIM etc.
                    </p>

                    <div className="upi-app-icons">
                      <SiPhonepe className="upi-app-icon phonepe" />
                      <SiPaytm className="upi-app-icon paytm" />
                      <SiGooglepay className="upi-app-icon gpay" />
                      <FaMobile className="upi-app-icon bhim" />
                    </div>

                    <button
                      className="generate-qr-btn"
                      onClick={generateQRCode}
                    >
                      <FaQrcode /> Generate QR Code
                    </button>
                  </div>

                  <div className="upi-manual">
                    <div className="upi-input-section">
                      <label>UPI ID / VPA</label>
                      <input
                        type="text"
                        className="upi-input"
                        placeholder="username@bankname"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                      />
                      <p className="upi-note">
                        A collect request will be sent to this UPI ID
                      </p>
                      <Link to="https://dashboard.codecanvas.org.in/dashboard">
                        <button className="verify-pay-btn" disabled={!upiId}>
                          Verify and Pay
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* QR Code Section for UPI */}
                <div className="qr-section">
                  <div className="qr-placeholder">
                    <FaQrcode className="qr-icon" />
                    <p>QR Code will appear here</p>
                    <div className="phone-illustration">📱</div>
                  </div>
                </div>
              </div>
            )}

            {selectedPaymentMethod === "cards" && (
              <div className="payment-details-content">
                <div className="card-form">
                  <div className="form-group">
                    <label>Card Number</label>
                    <input type="text" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input type="text" placeholder="MM/YY" />
                    </div>
                    <div className="form-group">
                      <label>CVV</label>
                      <input type="text" placeholder="123" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Cardholder Name</label>
                    <input type="text" placeholder="John Doe" />
                  </div>
                  <button className="pay-btn" onClick={handlePayment}>
                    Pay ₹{courseData.price.toLocaleString()}
                  </button>
                </div>
              </div>
            )}

            {selectedPaymentMethod === "wallets" && (
              <div className="payment-details-content">
                <div className="wallet-options">
                  <div className="wallet-item">
                    <SiPaytm className="wallet-icon paytm" />
                    <span>Paytm Wallet</span>
                  </div>
                  <div className="wallet-item">
                    <SiPhonepe className="wallet-icon phonepe" />
                    <span>PhonePe Wallet</span>
                  </div>
                  <button className="pay-btn" onClick={handlePayment}>
                    Pay ₹{courseData.price.toLocaleString()}
                  </button>
                </div>
              </div>
            )}

            {selectedPaymentMethod === "netbanking" && (
              <div className="payment-details-content">
                <div className="bank-selection">
                  <select className="bank-select">
                    <option>Select your bank</option>
                    <option>State Bank of India</option>
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>Axis Bank</option>
                    <option>Punjab National Bank</option>
                    <option>Bank of Baroda</option>
                  </select>
                  <button className="pay-btn" onClick={handlePayment}>
                    Pay ₹{courseData.price.toLocaleString()}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="payment-footer">
          <span>Powered by</span>
          <strong>JUSPAY</strong>
        </div>
      </div>
    </>
  );
};

export default Payment;
