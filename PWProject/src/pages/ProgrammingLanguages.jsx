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

// Dynamic pricing structure for all programming languages (same pricing for all)
const programmingLanguagePricing = {
  "Python": {
    batch: 4000,
    infinity: 4000,
    infinityPro: 4000
  },
  "Java": {
    batch: 4000,
    infinity: 4000,
    infinityPro: 4000
  },
  "C": {
    batch: 4000,
    infinity: 4000,
    infinityPro: 4000
  },
  "C++": {
    batch: 4000,
    infinity: 4000,
    infinityPro: 4000
  },
  "JavaScript": {
    batch: 4000,
    infinity: 4000,
    infinityPro: 4000
  }
};

// Plan types with features (prices will be dynamic)
const planTypes = [
  {
    name: "Batch",
    key: "batch",
    label: "Best Value",
    features: {
      support: true,
      notes: true,
      upcoming: true,
      khazana: true,
      uday: false,
      testPass: false,
      infinitePractice: false,
      preparationMeter: false,
      pitara: false,
    },
  },
  {
    name: "Infinity",
    key: "infinity",
    label: "Recommended",
    features: {
      support: true,
      notes: true,
      upcoming: true,
      khazana: true,
      uday: true,
      testPass: true,
      infinitePractice: true,
      preparationMeter: true,
      pitara: false,
    },
  },
  {
    name: "Infinity Pro",
    key: "infinityPro",
    label: "",
    features: {
      support: true,
      notes: true,
      upcoming: true,
      khazana: true,
      uday: true,
      testPass: true,
      infinitePractice: true,
      preparationMeter: true,
      pitara: true,
    },
  },
];

const featureList = [
  { key: "support", label: "24*7 Doubt Support" },
  { key: "notes", label: "Class notes & Handwritten Notes" },
  { key: "upcoming", label: "Free access of all upcoming versions" },
  { key: "khazana", label: "communication" },
  { key: "uday", label: "Enterview calls" },
  // {
  //   key: "testPass",
  //   label: "Test Pass (Chapterwise, PYQ & all Practice Tests)",
  // },
  // { key: "infinitePractice", label: "Infinite Practice" },
  // { key: "preparationMeter", label: "Preparation Meter" },
  { key: "pitara", label: "Placement Guarantee" },
];

const ProgrammingLanguages = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("Python");
  const [showPlans, setShowPlans] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [selectedCourseType, setSelectedCourseType] = useState("batch");
  const languages = Object.keys(languageData);
  const currentTopics = languageData[selectedLanguage] || [];
  const currentCourseDetail = languageCourseDetails[selectedLanguage];
  
  // Get dynamic plans with current language pricing
  const plans = planTypes.map(planType => ({
    ...planType,
    price: `₹${programmingLanguagePricing[selectedLanguage][planType.key]}`
  }));

  const handleBuyNow = () => {
    // Navigate to cart with language course information (default batch pricing)
    const encodedLanguageName = encodeURIComponent(selectedLanguage);
    const price = programmingLanguagePricing[selectedLanguage].batch;
    navigate(`/cart/programming-languages/${encodedLanguageName}?courseType=batch&price=${price}`);
  };

  const handleMoreDetails = () => {
    const encodedLanguageName = encodeURIComponent(selectedLanguage);
    navigate(`/course-details/programming-languages/${encodedLanguageName}`);
  };

  const handlePlanBuyNow = () => {
    setShowPlans(false);
    const encodedLanguageName = encodeURIComponent(selectedLanguage);
    const selectedPlanType = planTypes[selectedPlan].key;
    const price = programmingLanguagePricing[selectedLanguage][selectedPlanType];
    navigate(`/cart/programming-languages/${encodedLanguageName}?courseType=${selectedPlanType}&price=${price}`);
  };
  const handlePlanMoreDetails = () => {
    setShowPlans(false);
    const encodedLanguageName = encodeURIComponent(selectedLanguage);
    navigate(`/course-details/programming-languages/${encodedLanguageName}`);
  };

  const handlePlanSelection = (planIndex) => {
    setSelectedPlan(planIndex);
    setSelectedCourseType(planTypes[planIndex].key);
  };



  return (
    <>
      <Header title="Programming Languages" />
      
      {/* Feature Comparison Modal/Section */}
      {showPlans && (
        <div
          className="plans-modal"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#18181b",
              borderRadius: 16,
              padding: 32,
              minWidth: 700,
              position: "relative",
              color: "#fff",
              boxShadow: "0 8px 40px rgba(0,0,0,0.45)",
              maxWidth: 900,
              width: "90vw",
            }}
          >
            <button
              onClick={() => setShowPlans(false)}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                fontSize: 22,
                background: "none",
                border: "none",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              ×
            </button>
            <h2
              style={{
                textAlign: "center",
                marginBottom: 28,
                fontWeight: 700,
                fontSize: 28,
                letterSpacing: 0.2,
              }}
            >
              Features
            </h2>
            {/* Plan Tabs */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 18,
                marginBottom: 24,
              }}
            >
              {plans.map((plan, idx) => {
                const isSelected = selectedPlan === idx;
                return (
                  <div
                    key={plan.name}
                    onClick={() => handlePlanSelection(idx)}
                    style={{
                      minWidth: 170,
                      padding: "14px 0 10px 0",
                      borderRadius: 10,
                      background: isSelected ? "#23232a" : "transparent",
                      color: isSelected ? "#fff" : "#e5e7eb",
                      border: isSelected
                        ? "2.5px solid #2563eb"
                        : "2px solid #444",
                      boxShadow: isSelected
                        ? "0 4px 18px rgba(37,99,235,0.18)"
                        : "none",
                      cursor: "pointer",
                      textAlign: "center",
                      fontWeight: 700,
                      fontSize: 20,
                      position: "relative",
                      transition: "all 0.18s cubic-bezier(.4,0,.2,1)",
                      outline: isSelected ? "2px solid #2563eb" : "none",
                      marginBottom: isSelected ? -8 : 0,
                      zIndex: isSelected ? 2 : 1,
                      borderBottom: isSelected
                        ? "none"
                        : "2px solid #444",
                    }}
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") handlePlanSelection(idx);
                    }}
                  >
                    {plan.label && (
                      <div
                        style={{
                          position: "absolute",
                          top: -18,
                          left: "50%",
                          transform: "translateX(-50%)",
                          fontSize: 13,
                          color: "#fff",
                          background:
                            idx === 0
                              ? "#e74c3c"
                              : idx === 1
                              ? "#27ae60"
                              : "#b7950b",
                          borderRadius: 4,
                          padding: "2px 10px",
                          fontWeight: 600,
                          letterSpacing: 0.2,
                          boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
                        }}
                      >
                        {plan.label}
                      </div>
                    )}
                    {plan.name}
                  </div>
                );
              })}
            </div>
            {/* Plan Features Table */}
            <div
              style={{
                background: "#23232a",
                borderRadius: 12,
                padding: 24,
                marginBottom: 24,
                boxShadow: "0 1px 8px rgba(0,0,0,0.18)",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  color: "#fff",
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        textAlign: "left",
                        padding: 8,
                        fontWeight: 700,
                        fontSize: 16,
                      }}
                    >
                      Features
                    </th>
                    {plans.map((plan, idx) => (
                      <th
                        key={plan.name}
                        style={{
                          textAlign: "center",
                          padding: 8,
                          fontWeight: 700,
                          fontSize: 16,
                          color:
                            selectedPlan === idx ? "#a3e635" : "#fff",
                        }}
                      >
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {featureList.map((feature) => (
                    <tr key={feature.key}>
                      <td
                        style={{
                          padding: 8,
                          fontWeight: 500,
                          fontSize: 15,
                        }}
                      >
                        {feature.label}
                      </td>
                      {plans.map((plan, idx) => (
                        <td
                          key={plan.name}
                          style={{
                            textAlign: "center",
                            padding: 8,
                            fontSize: 18,
                          }}
                        >
                          {plan.features[feature.key] ? (
                            <span
                              style={{
                                color:
                                  selectedPlan === idx
                                    ? "#a3e635"
                                    : "#22c55e",
                                fontWeight: 700,
                                fontSize: 20,
                              }}
                            >
                              ✔
                            </span>
                          ) : (
                            <span
                              style={{
                                color: "#f87171",
                                fontWeight: 700,
                                fontSize: 20,
                              }}
                            >
                              ✖
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Plan Price and Actions */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 18,
              }}
            >
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 22,
                    marginBottom: 2,
                  }}
                >
                  {plans[selectedPlan].name} Plan
                </div>
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: 700,
                    color: "#a3e635",
                  }}
                >
                  {plans[selectedPlan].price}
                </span>
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "#d1d5db",
                    marginLeft: 10,
                    fontSize: 18,
                  }}
                >
                  {plans[selectedPlan].originalPrice}
                </span>
              </div>
              <div style={{ display: "flex", gap: 16 }}>
                <button
                  style={{
                    background: "#facc15",
                    color: "#222",
                    border: "none",
                    borderRadius: 6,
                    padding: "14px 38px",
                    fontWeight: 700,
                    fontSize: 20,
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                    transition: "background 0.15s",
                  }}
                  onClick={handlePlanBuyNow}
                >
                  Buy Now
                </button>
                <button
                  style={{
                    background: "#23232a",
                    color: "#fff",
                    border: "2px solid #facc15",
                    borderRadius: 6,
                    padding: "14px 32px",
                    fontWeight: 700,
                    fontSize: 20,
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                    transition: "background 0.15s, color 0.15s",
                  }}
                  onClick={handlePlanMoreDetails}
                >
                  More Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
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
            <div className="course-actions">
              <button
                className="explore-btn"
                onClick={() => setShowPlans(true)}
              >
                EXPLORE
              </button>
              <button className="buy-now-btn" onClick={handleBuyNow}>
                BUY NOW
              </button>
            </div>
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
