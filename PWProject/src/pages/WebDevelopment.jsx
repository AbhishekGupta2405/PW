import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiFlask,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiChatbot,
} from "react-icons/si";
import {
  FaBrain,
  FaProjectDiagram,
  FaQuestionCircle,
  FaComments,
  FaJava,
} from "react-icons/fa";
import Header from "../components/Header";

export const courseData = {
  "Python Full Stack": [
    { label: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
    { label: "CSS", icon: <SiCss3 />, color: "#1572B6" },
    { label: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { label: "React", icon: <SiReact />, color: "#61DAFB" },
    { label: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    { label: "Python", icon: <SiPython />, color: "#3776AB" },
    { label: "Flask", icon: <SiFlask />, color: "#000000" },
    { label: "AI Integration", icon: <SiChatbot />, color: "#FF6B6B" },
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
  "Java Full Stack": [
    { label: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
    { label: "CSS", icon: <SiCss3 />, color: "#1572B6" },
    { label: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { label: "React", icon: <SiReact />, color: "#61DAFB" },
    { label: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    { label: "Java", icon: <FaJava />, color: "#ED8B00" },
    { label: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
    { label: "AI Integration", icon: <SiChatbot />, color: "#FF6B6B" },
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
  "Front-End": [
    { label: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
    { label: "CSS", icon: <SiCss3 />, color: "#1572B6" },
    { label: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { label: "React", icon: <SiReact />, color: "#61DAFB" },
    { label: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
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
  "MERN Full Stack": [
    { label: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
    { label: "CSS", icon: <SiCss3 />, color: "#1572B6" },
    { label: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { label: "React", icon: <SiReact />, color: "#61DAFB" },
    { label: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    { label: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { label: "Express.js", icon: <SiExpress />, color: "#000000" },
    { label: "AI Integration", icon: <SiChatbot />, color: "#FF6B6B" },
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

export const courseDetails = {
  "Python Full Stack": {
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
    startDate: "15 Aug 2025",
    endDate: "15 Feb 2026",
    duration: "6 months",
    price: "₹45,000",
    originalPrice: "₹50,000",
    discount: "10% Discount",
    description:
      "Complete Python Full Stack Development with Flask, React, and AI Integration",
  },
  "Java Full Stack": {
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop",
    startDate: "20 Aug 2025",
    endDate: "20 Mar 2026",
    duration: "7 months",
    price: "₹48,000",
    originalPrice: "₹55,000",
    discount: "12% Discount",
    description:
      "Master Java Full Stack Development with Spring Boot, React, and Enterprise Solutions",
  },
  "Front-End": {
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
    startDate: "10 Aug 2025",
    endDate: "10 Dec 2025",
    duration: "4 months",
    price: "₹25,000",
    originalPrice: "₹30,000",
    discount: "16% Discount",
    description:
      "Modern Frontend Development with React, Tailwind CSS, and Advanced JavaScript",
  },
  "MERN Full Stack": {
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
    startDate: "25 Aug 2025",
    endDate: "25 Mar 2026",
    duration: "7 months",
    price: "₹50,000",
    originalPrice: "₹60,000",
    discount: "16% Discount",
    description:
      "Complete MERN Stack Development with MongoDB, Express, React, and Node.js",
  },
};

// Demo data for plans and features
const plans = [
  {
    name: "Batch",
    label: "Best Value",
    price: "₹5500",
   
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
    label: "Recommended",
    price: "₹10500",
   
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
    label: "",
    price: "₹18500",
  
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

const WebDevelopment = () => {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState("Python Full Stack");
  const [showCourseDetails, setShowCourseDetails] = useState(false);
  const [showPlans, setShowPlans] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(0);
  const courses = Object.keys(courseData);
  const currentTopics = courseData[selectedCourse] || [];
  const currentCourseDetail = courseDetails[selectedCourse];

  const handleBuyNow = () => {
    // Navigate to cart with course information
    const encodedCourseName = encodeURIComponent(selectedCourse);
    navigate(`/cart/web-development/${encodedCourseName}`);
  };

  const handleMoreDetails = () => {
    const encodedCourseName = encodeURIComponent(selectedCourse);
    navigate(`/course-details/web-development/${encodedCourseName}`);
  };

  const handlePlanBuyNow = () => {
    setShowPlans(false);
    const encodedCourseName = encodeURIComponent(selectedCourse);
    navigate(`/cart/web-development/${encodedCourseName}`);
  };
  const handlePlanMoreDetails = () => {
    setShowPlans(false);
    const encodedCourseName = encodeURIComponent(selectedCourse);
    navigate(`/course-details/web-development/${encodedCourseName}`);
  };

  if (showCourseDetails) {
    return (
      <>
        <Header title="Web Development" />
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
                          onClick={() => setSelectedPlan(idx)}
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
                            if (e.key === "Enter") setSelectedPlan(idx);
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

            <div className="course-detail-container">
              <div className="course-detail-card">
                <div className="course-image-container">
                  <img
                    src={currentCourseDetail.image}
                    alt={selectedCourse}
                    className="course-image"
                  />
                  <div className="course-badge">new</div>
                </div>

                <div className="course-info">
                  <h3 className="course-title">{selectedCourse}</h3>
                  <p className="course-description">
                    {currentCourseDetail.description}
                  </p>

                  <div className="course-details">
                    <div className="course-dates">
                      <span>
                        📅 Starts on {currentCourseDetail.startDate} | Ends on{" "}
                        {currentCourseDetail.endDate}
                      </span>
                    </div>
                    <div className="course-duration">
                      <span>⏱️ Duration: {currentCourseDetail.duration}</span>
                    </div>
                  </div>

                  <div className="pricing-section">
                    <div className="price-info">
                      <span className="current-price">
                        {currentCourseDetail.price}
                      </span>
                      <span className="original-price">
                        {currentCourseDetail.originalPrice}
                      </span>
                      <span className="discount-badge">
                        {currentCourseDetail.discount}
                      </span>
                    </div>
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
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header title="Web Development" />
      <div className="webdev-container">
        <div className="sidebar">
          <h3>Web Development Courses</h3>
          {courses.map((course) => (
            <div
              key={course}
              className={`sidebar-item ${
                selectedCourse === course ? "active" : ""
              }`}
              onClick={() => setSelectedCourse(course)}
            >
              {course}
            </div>
          ))}
        </div>

        <div className="main">
          <div className="main-header">
            <div>
              <h2>{selectedCourse}</h2>
              <p className="course-description">
                Master the skills needed for {selectedCourse} development
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

export default WebDevelopment;
