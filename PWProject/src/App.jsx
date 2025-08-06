import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import WebDevelopment from "./pages/WebDevelopment";
import ProgrammingLanguages from "./pages/ProgrammingLanguages";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import CourseDetails from "./pages/CourseDetails";
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/web-development" element={<WebDevelopment />} />
      <Route path="/programming-languages" element={<ProgrammingLanguages />} />
      <Route path="/cart/:category/:courseName" element={<Cart />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment/:category/:courseName" element={<Payment />} />
      <Route path="/payment" element={<Payment />} />
      <Route
        path="/course-details/web-development/:courseName"
        element={<CourseDetails />}
      />
    </Routes>
  );
};

export default App;
