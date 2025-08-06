import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Header = ({ title, showBackButton = true }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleGoBack = () => {
    // Custom back navigation logic based on current page
    const currentPath = location.pathname;
    
    if (currentPath.includes('/payment')) {
      // From payment, go back to cart
      const pathParts = currentPath.split('/');
      if (pathParts.length >= 4) {
        navigate(`/cart/${pathParts[2]}/${pathParts[3]}`);
      } else {
        navigate('/cart');
      }
    } else if (currentPath.includes('/cart')) {
      // From cart, go back to course selection
      const pathParts = currentPath.split('/');
      if (pathParts[2] === 'web-development') {
        navigate('/web-development');
      } else if (pathParts[2] === 'programming-languages') {
        navigate('/programming-languages');
      } else {
        navigate('/');
      }
    } else if (currentPath === '/web-development' || currentPath === '/programming-languages') {
      // From course pages, go back to home
      navigate('/');
    } else {
      // Default: go back in history or to home
      if (window.history.length > 1) {
        navigate(-1);
      } else {
        navigate('/');
      }
    }
  };
  
  const shouldShowBackButton = showBackButton && location.pathname !== '/';
  
  return (
  <header
    style={{
      width: "100%",
      background: "#fff",
      padding: "28px 0 16px 0",
      borderBottom: "2px solid #e5e7eb",
      marginBottom: -1,
      boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
      // zIndex: 10,
    }}
  >
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: shouldShowBackButton ? "space-between" : "center",
        position: "relative",
      }}
    >
      {shouldShowBackButton && (
        <button
          onClick={handleGoBack}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            backgroundColor: "#f3f4f6",
            border: "1px solid #d1d5db",
            color: "#374151",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            fontSize: "0.875rem",
            fontWeight: 500,
            cursor: "pointer",
            transition: "all 0.3s ease",
            marginLeft: "-10vw",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#e5e7eb";
            e.target.style.borderColor = "#9ca3af";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#f3f4f6";
            e.target.style.borderColor = "#d1d5db";
          }}
        >
          <FaArrowLeft /> Back
        </button>
      )}
      
      <h1
        style={{
          fontSize: 32,
          fontWeight: 800,
          color: "#222",
          letterSpacing: 0.2,
          margin: 0,
          position: shouldShowBackButton ? "absolute" : "static",
          left: shouldShowBackButton ? "50%" : "auto",
          transform: shouldShowBackButton ? "translateX(-50%)" : "none",
        }}
      >
        {title}
      </h1>
    </div>
  </header>
  );
};

export default Header;
