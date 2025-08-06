import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaTrash } from "react-icons/fa";
import Header from "../components/Header";

const Cart = () => {
  const navigate = useNavigate();
  const { category, courseName } = useParams();

  const [cartItems, setCartItems] = useState([]);

  // Course data mapping
  const courseDataMap = {
    "web-development": {
      "Python Full Stack": {
        name: "Python Full Stack",
        image:
          "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=300&h=200&fit=crop",
        price: 45000,
        originalPrice: 50000,
        category: "Web Development",
      },
      "Java Full Stack": {
        name: "Java Full Stack",
        image:
          "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=300&h=200&fit=crop",
        price: 48000,
        originalPrice: 55000,
        category: "Web Development",
      },
      "Front-End": {
        name: "Front-End",
        image:
          "https://images.unsplash.com/photo-1547658719-da2b51169166?w=300&h=200&fit=crop",
        price: 25000,
        originalPrice: 30000,
        category: "Web Development",
      },
      "MERN Full Stack": {
        name: "MERN Full Stack",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
        price: 50000,
        originalPrice: 60000,
        category: "Web Development",
      },
    },
    "programming-languages": {
      Python: {
        name: "Python",
        image:
          "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=300&h=200&fit=crop",
        price: 30000,
        originalPrice: 35000,
        category: "Programming Languages",
      },
      Java: {
        name: "Java",
        image:
          "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=300&h=200&fit=crop",
        price: 35000,
        originalPrice: 40000,
        category: "Programming Languages",
      },
      C: {
        name: "C",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
        price: 20000,
        originalPrice: 25000,
        category: "Programming Languages",
      },
      "C++": {
        name: "C++",
        image:
          "https://images.unsplash.com/photo-1547658719-da2b51169166?w=300&h=200&fit=crop",
        price: 28000,
        originalPrice: 35000,
        category: "Programming Languages",
      },
      JavaScript: {
        name: "JavaScript",
        image:
          "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop",
        price: 32000,
        originalPrice: 38000,
        category: "Programming Languages",
      },
    },
  };

  // Load course data based on URL parameters
  useEffect(() => {
    if (category && courseName) {
      const decodedCourseName = decodeURIComponent(courseName);
      const courseData = courseDataMap[category]?.[decodedCourseName];

      if (courseData) {
        setCartItems([
          {
            id: 1,
            ...courseData,
          },
        ]);
      }
    } else {
      // Default fallback if no parameters
      setCartItems([
        {
          id: 1,
          name: "Python Full Stack",
          image:
            "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=300&h=200&fit=crop",
          price: 45000,
          originalPrice: 50000,
          category: "Web Development",
        },
      ]);
    }
  }, [category, courseName]);

  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const discount = appliedCoupon ? Math.floor(subtotal * 0.1) : 0; // 10% discount example
  const deliveryCharges = 0;
  const couponDiscount = 0;
  const totalAmount = subtotal - discount + deliveryCharges - couponDiscount;

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "save10") {
      setAppliedCoupon({ code: couponCode, discount: 10 });
      setCouponCode("");
    }
  };

  const handleProceedToBuy = () => {
    if (category && courseName) {
      navigate(`/payment/${category}/${courseName}`);
    } else {
      navigate("/payment");
    }
  };

  return (
    <>
      <Header title="Cart" />
      <div className="cart-container">
        <div className="cart-header">
          
          <h1>Order Summary</h1>
        </div>

        <div className="cart-content">
          {/* Left Side - Cart Items */}
          <div className="cart-left">
            <div className="items-section">
              <h2>Items in Cart</h2>
              {cartItems.length === 0 ? (
                <div className="empty-cart">
                  <p>Your cart is empty</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <h3>{item.name}</h3>
                      <p className="cart-item-category">{item.category}</p>
                      <div className="cart-item-price">
                        <span className="current-price">
                          ₹{item.price.toLocaleString()}
                        </span>
                        {item.originalPrice && (
                          <span className="original-price">
                            ₹{item.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right Side - Payment Summary */}
          <div className="cart-right">
            <div className="payment-summary">
              {/* Coupon Section */}
              <div className="coupon-section">
                <div className="coupon-header">
                  <span>🎯 Switch to Infinity Pro</span>
                </div>
                <div className="coupon-input">
                  <span>🎁 Apply Code/Coupon</span>
                  <div className="coupon-form">
                    <input
                      type="text"
                      placeholder="Apply Coupon Code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button onClick={applyCoupon}>Apply</button>
                  </div>
                </div>
              </div>

              {/* Payment Summary */}
              <div className="summary-section">
                <h3>Payment Summary</h3>
                <div className="summary-line">
                  <span>Price ({cartItems.length} items)</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="summary-line">
                  <span>Discount</span>
                  <span>₹{discount}</span>
                </div>
                <div className="summary-line">
                  <span>Delivery Charges</span>
                  <span>₹{deliveryCharges}</span>
                </div>
                <div className="summary-line">
                  <span>Coupon Disc.</span>
                  <span>₹{couponDiscount}</span>
                </div>
                <div className="summary-line total-line">
                  <span>Total Amount</span>
                  <span>₹{totalAmount.toLocaleString()}</span>
                </div>
              </div>

              {/* Proceed to Buy Button */}
              <button className="proceed-btn" onClick={handleProceedToBuy}>
                PROCEED TO BUY
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
