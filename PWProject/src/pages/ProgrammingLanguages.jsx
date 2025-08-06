import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPython,
  FaJava,
  FaCode,
  FaBrain,
  FaQuestionCircle,
  FaComments,
  FaProjectDiagram,
} from "react-icons/fa";
import { SiC, SiCplusplus, SiJavascript } from "react-icons/si";
import Header from "../components/Header";

const languageData = {
  Python: [
    { label: "Basic Syntax", icon: <FaPython />, color: "#3776AB" },
    { label: "Data Structures", icon: <FaCode />, color: "#FF6B6B" },
    {
      label: "Object Oriented Programming",
      icon: <FaPython />,
      color: "#3776AB",
    },
    { label: "File Handling", icon: <FaCode />, color: "#8B5CF6" },
    { label: "Exception Handling", icon: <FaPython />, color: "#3776AB" },
    { label: "Libraries & Frameworks", icon: <FaCode />, color: "#10B981" },
    { label: "DSA", icon: <FaBrain />, color: "#8B5CF6" },
    { label: "Communication Skills", icon: <FaComments />, color: "#10B981" },
    { label: "Aptitude", icon: <FaQuestionCircle />, color: "#F59E0B" },
    { label: "Reasoning", icon: <FaQuestionCircle />, color: "#EF4444" },
    {
      label: "100+ Interview Questions",
      icon: <FaQuestionCircle />,
      color: "#6366F1",
    },
    { label: "Live Project", icon: <FaProjectDiagram />, color: "#EC4899" },
  ],
  Java: [
    { label: "Basic Syntax", icon: <FaJava />, color: "#ED8B00" },
    {
      label: "Object Oriented Programming",
      icon: <FaJava />,
      color: "#ED8B00",
    },
    { label: "Collections Framework", icon: <FaCode />, color: "#FF6B6B" },
    { label: "Exception Handling", icon: <FaJava />, color: "#ED8B00" },
    { label: "Multithreading", icon: <FaCode />, color: "#8B5CF6" },
    { label: "JDBC", icon: <FaJava />, color: "#ED8B00" },
    { label: "DSA", icon: <FaBrain />, color: "#8B5CF6" },
    { label: "Communication Skills", icon: <FaComments />, color: "#10B981" },
    { label: "Aptitude", icon: <FaQuestionCircle />, color: "#F59E0B" },
    { label: "Reasoning", icon: <FaQuestionCircle />, color: "#EF4444" },
    {
      label: "100+ Interview Questions",
      icon: <FaQuestionCircle />,
      color: "#6366F1",
    },
    { label: "Live Project", icon: <FaProjectDiagram />, color: "#EC4899" },
  ],
  C: [
    { label: "Basic Syntax", icon: <SiC />, color: "#A8B9CC" },
    { label: "Pointers", icon: <SiC />, color: "#A8B9CC" },
    { label: "Memory Management", icon: <FaCode />, color: "#FF6B6B" },
    { label: "File Handling", icon: <SiC />, color: "#A8B9CC" },
    { label: "Data Structures", icon: <FaCode />, color: "#8B5CF6" },
    { label: "DSA", icon: <FaBrain />, color: "#8B5CF6" },
    { label: "Communication Skills", icon: <FaComments />, color: "#10B981" },
    { label: "Aptitude", icon: <FaQuestionCircle />, color: "#F59E0B" },
    { label: "Reasoning", icon: <FaQuestionCircle />, color: "#EF4444" },
    {
      label: "100+ Interview Questions",
      icon: <FaQuestionCircle />,
      color: "#6366F1",
    },
    { label: "Live Project", icon: <FaProjectDiagram />, color: "#EC4899" },
  ],
  "C++": [
    { label: "Basic Syntax", icon: <SiCplusplus />, color: "#00599C" },
    {
      label: "Object Oriented Programming",
      icon: <SiCplusplus />,
      color: "#00599C",
    },
    { label: "Pointers & References", icon: <FaCode />, color: "#FF6B6B" },
    {
      label: "STL (Standard Template Library)",
      icon: <SiCplusplus />,
      color: "#00599C",
    },
    { label: "Memory Management", icon: <FaCode />, color: "#8B5CF6" },
    { label: "DSA", icon: <FaBrain />, color: "#8B5CF6" },
    { label: "Communication Skills", icon: <FaComments />, color: "#10B981" },
    { label: "Aptitude", icon: <FaQuestionCircle />, color: "#F59E0B" },
    { label: "Reasoning", icon: <FaQuestionCircle />, color: "#EF4444" },
    {
      label: "100+ Interview Questions",
      icon: <FaQuestionCircle />,
      color: "#6366F1",
    },
    { label: "Live Project", icon: <FaProjectDiagram />, color: "#EC4899" },
  ],
  JavaScript: [
    { label: "Basic Syntax", icon: <SiJavascript />, color: "#F7DF1E" },
    { label: "DOM Manipulation", icon: <SiJavascript />, color: "#F7DF1E" },
    { label: "Async Programming", icon: <FaCode />, color: "#FF6B6B" },
    { label: "ES6+ Features", icon: <SiJavascript />, color: "#F7DF1E" },
    { label: "Node.js", icon: <FaCode />, color: "#339933" },
    { label: "DSA", icon: <FaBrain />, color: "#8B5CF6" },
    { label: "Communication Skills", icon: <FaComments />, color: "#10B981" },
    { label: "Aptitude", icon: <FaQuestionCircle />, color: "#F59E0B" },
    { label: "Reasoning", icon: <FaQuestionCircle />, color: "#EF4444" },
    {
      label: "100+ Interview Questions",
      icon: <FaQuestionCircle />,
      color: "#6366F1",
    },
    { label: "Live Project", icon: <FaProjectDiagram />, color: "#EC4899" },
  ],
};

const languageCourseDetails = {
  Python: {
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
    startDate: "12 Aug 2025",
    endDate: "12 Dec 2025",
    duration: "4 months",
    price: "₹30,000",
    originalPrice: "₹35,000",
    discount: "14% Discount",
    description:
      "Master Python programming from basics to advanced with real-world projects",
  },
  Java: {
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop",
    startDate: "18 Aug 2025",
    endDate: "18 Jan 2026",
    duration: "5 months",
    price: "₹35,000",
    originalPrice: "₹40,000",
    discount: "12% Discount",
    description:
      "Complete Java programming course with OOP, Collections, and Enterprise development",
  },
  C: {
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
    startDate: "8 Aug 2025",
    endDate: "8 Nov 2025",
    duration: "3 months",
    price: "₹20,000",
    originalPrice: "₹25,000",
    discount: "20% Discount",
    description:
      "Learn C programming fundamentals with pointers, memory management, and system programming",
  },
  "C++": {
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
    startDate: "22 Aug 2025",
    endDate: "22 Dec 2025",
    duration: "4 months",
    price: "₹28,000",
    originalPrice: "₹35,000",
    discount: "20% Discount",
    description:
      "Advanced C++ programming with OOP, STL, and competitive programming focus",
  },
  JavaScript: {
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
    startDate: "15 Aug 2025",
    endDate: "15 Dec 2025",
    duration: "4 months",
    price: "₹32,000",
    originalPrice: "₹38,000",
    discount: "15% Discount",
    description:
      "Modern JavaScript programming with ES6+, DOM manipulation, and Node.js",
  },
};

const ProgrammingLanguages = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("Python");
  const [showCourseDetails, setShowCourseDetails] = useState(false);
  const languages = Object.keys(languageData);
  const currentTopics = languageData[selectedLanguage] || [];

  const handleBuyNow = () => {
    // Navigate to cart with language course information
    const encodedLanguageName = encodeURIComponent(selectedLanguage);
    navigate(`/cart/programming-languages/${encodedLanguageName}`);
  };

  if (showCourseDetails) {
    return (
      <div className="webdev-container">
        <div className="sidebar">
          <h3>Course Categories</h3>
          <div className="sidebar-item">Study</div>
          <div className="sidebar-item">Batches</div>
          <div className="sidebar-item">Offline</div>
          <div className="sidebar-item">Power Batch</div>
        </div>

        <div className="main">
          <div className="course-detail-header">
            <button
              className="back-button"
              onClick={() => setShowCourseDetails(false)}
            >
              ← Back to Topics
            </button>
          </div>

          <div className="course-detail-container">
            <div className="course-detail-card">
              <div className="course-image-container">
                <img
                  src={languageCourseDetails[selectedLanguage].image}
                  alt={selectedLanguage}
                  className="course-image"
                />
                <div className="course-badge">new</div>
              </div>

              <div className="course-info">
                <h3 className="course-title">{selectedLanguage}</h3>
                <p className="course-description">
                  {languageCourseDetails[selectedLanguage].description}
                </p>

                <div className="course-details">
                  <div className="course-dates">
                    <span>
                      📅 Starts on{" "}
                      {languageCourseDetails[selectedLanguage].startDate} | Ends
                      on {languageCourseDetails[selectedLanguage].endDate}
                    </span>
                  </div>
                  <div className="course-duration">
                    <span>
                      ⏱️ Duration:{" "}
                      {languageCourseDetails[selectedLanguage].duration}
                    </span>
                  </div>
                </div>

                <div className="pricing-section">
                  <div className="price-info">
                    <span className="current-price">
                      {languageCourseDetails[selectedLanguage].price}
                    </span>
                    <span className="original-price">
                      {languageCourseDetails[selectedLanguage].originalPrice}
                    </span>
                    <span className="discount-badge">
                      {languageCourseDetails[selectedLanguage].discount}
                    </span>
                  </div>
                </div>

                <div className="course-actions">
                  <button className="explore-btn">EXPLORE</button>
                  <button className="buy-now-btn" onClick={handleBuyNow}>
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header title="Programming Languages" />
      <div className="webdev-container">
        <div className="sidebar">
          <h3>Programming Languages</h3>
          {languages.map((language) => (
            <div
              key={language}
              className={`sidebar-item ${
                selectedLanguage === language ? "active" : ""
              }`}
              onClick={() => setSelectedLanguage(language)}
            >
              {language}
            </div>
          ))}
        </div>

        <div className="main">
          <div className="main-header">
            <div>
              <h2>{selectedLanguage}</h2>
              <p className="course-description">
                Master {selectedLanguage} programming and core computer science
                concepts
              </p>
            </div>
            <button
              className="course-detail-btn"
              onClick={() => setShowCourseDetails(true)}
            >
              Course Details
            </button>
          </div>

          <div className="grid">
            {currentTopics.map((topic, index) => (
              <div className="topic-card" key={index}>
                <div className="topic-icon" style={{ color: topic.color }}>
                  {topic.icon}
                </div>
                <h3>{topic.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgrammingLanguages;
