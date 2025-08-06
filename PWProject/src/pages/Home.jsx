import React from "react";
import Card from "../components/Card";
import { FaLaptopCode, FaCode } from "react-icons/fa";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header title="Home" showBackButton={false} />
      <div className="container">
        <h2>Select the category you want...</h2>
        <div className="grid">
          <Card
            title="Web Development"
            description="Learn full-stack web development with modern technologies"
            to="/web-development"
            Icon={FaLaptopCode}
          />
          <Card
            title="Programming Languages"
            description="Master programming languages and core concepts"
            to="/programming-languages"
            Icon={FaCode}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
