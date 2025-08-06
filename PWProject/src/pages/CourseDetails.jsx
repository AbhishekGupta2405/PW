import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { courseData, courseDetails } from "./WebDevelopment";
import Header from "../components/Header";

const otherDetails = [
  "PDF Notes of each Class will be uploaded on PW App",
  "Daily Practice Problems with their Video Solution in Quiz format",
  "Peer to Peer doubt solving will be provided.",
  "Scheduled tests will be held according to the planner.",
  "All India Test Series (AITS) will be provided according to the Test Planner.",
  "Revision Classes will be provided after syllabus Completion.",
  "The complete course will be accessible to all the students until the NEET 2027 Exams.",
  "For App/web Navigation the latest Feature Updates & Student Support please subscribe to our Support YouTube channel: https://youtube.com/@pwstudentsupport",
];

const CourseDetails = () => {
  const { courseName } = useParams();
  const navigate = useNavigate();
  const decodedCourseName = decodeURIComponent(courseName);
  const details = courseDetails[decodedCourseName];
  const topics = courseData[decodedCourseName] || [];
  const [selectedTopic, setSelectedTopic] = useState(0);
  const [activeTab, setActiveTab] = useState("Description");

  if (!details) {
    return <div style={{ padding: 32 }}>Course not found.</div>;
  }

  const handleBuyNow = () => {
    const encodedCourseName = encodeURIComponent(decodedCourseName);
    navigate(`/cart/web-development/${encodedCourseName}`);
  };

  return (
    <>
      <Header title="Course Details" />
      {/* Header Bar */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto 24px auto",
          display: "flex",
          alignItems: "center",
          gap: 32,
          borderBottom: "1.5px solid #e5e7eb",
          paddingBottom: 0,
          fontWeight: 500,
          fontSize: 17,
          background: "#f7f7f7",
        }}
      >
        <div
          style={{
            color: activeTab === "Description" ? "#2563eb" : "#222",
            borderBottom:
              activeTab === "Description" ? "3px solid #2563eb" : "none",
            padding: "12px 0 8px 0",
            cursor: "pointer",
            fontWeight: activeTab === "Description" ? 700 : 500,
            transition: "color 0.15s, border-bottom 0.15s",
          }}
          onClick={() => setActiveTab("Description")}
        >
          Description
        </div>
        <div
          style={{
            color: activeTab === "All Classes" ? "#2563eb" : "#222",
            borderBottom:
              activeTab === "All Classes" ? "3px solid #2563eb" : "none",
            padding: "12px 0 8px 0",
            cursor: "pointer",
            fontWeight: activeTab === "All Classes" ? 700 : 500,
            transition: "color 0.15s, border-bottom 0.15s",
          }}
          onClick={() => setActiveTab("All Classes")}
        >
          All Classes
        </div>
        <div
          style={{
            color: activeTab === "Infinite Learning" ? "#fbbf24" : "#eab308",
            borderBottom:
              activeTab === "Infinite Learning" ? "3px solid #fbbf24" : "none",
            padding: "12px 0 8px 0",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontWeight: activeTab === "Infinite Learning" ? 700 : 500,
            transition: "color 0.15s, border-bottom 0.15s",
          }}
          onClick={() => setActiveTab("Infinite Learning")}
        >
          <span style={{ fontSize: 18 }}>🟡</span> Infinite Learning
        </div>
        <div
          style={{
            color: activeTab === "Tests" ? "#2563eb" : "#222",
            borderBottom: activeTab === "Tests" ? "3px solid #2563eb" : "none",
            padding: "12px 0 8px 0",
            cursor: "pointer",
            fontWeight: activeTab === "Tests" ? 700 : 500,
            transition: "color 0.15s, border-bottom 0.15s",
          }}
          onClick={() => setActiveTab("Tests")}
        >
          Tests
        </div>
        <div
          style={{
            color: activeTab === "Community" ? "#2563eb" : "#222",
            borderBottom:
              activeTab === "Community" ? "3px solid #2563eb" : "none",
            padding: "12px 0 8px 0",
            cursor: "pointer",
            fontWeight: activeTab === "Community" ? 700 : 500,
            transition: "color 0.15s, border-bottom 0.15s",
          }}
          onClick={() => setActiveTab("Community")}
        >
          Community
        </div>
      </div>
      {/* Tab Content */}
      {activeTab === "Description" && (
        <div
          style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 32 }}
        >
          {/* Left Side */}
          <div style={{ flex: 2 }}>
            <button
              onClick={() => navigate(-1)}
              style={{
                background: "none",
                border: "none",
                color: "#2563eb",
                fontWeight: "bold",
                fontSize: 18,
                marginBottom: 24,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <FaArrowLeft /> Back
            </button>
            <h2 style={{ fontWeight: 700, fontSize: 26, marginBottom: 24 }}>
              Checkout Your Schedule
            </h2>
            {/* Topics in Two Rows */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 18,
                padding: "16px 0",
                marginBottom: 32,
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
                justifyContent: "flex-start",
              }}
            >
              {topics.map((topic, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedTopic(idx)}
                  style={{
                    width: 90,
                    textAlign: "center",
                    padding: "10px 4px",
                    borderRadius: 10,
                    background: idx === selectedTopic ? "#e0edff" : "#fff",
                    border:
                      idx === selectedTopic
                        ? "2.5px solid #2563eb"
                        : "1.5px solid #e5e7eb",
                    boxShadow:
                      idx === selectedTopic
                        ? "0 2px 8px rgba(37,99,235,0.10)"
                        : "0 1px 4px rgba(0,0,0,0.03)",
                    cursor: "pointer",
                    transition: "all 0.18s cubic-bezier(.4,0,.2,1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    fontWeight: idx === selectedTopic ? 600 : 400,
                    color: idx === selectedTopic ? "#2563eb" : "#222",
                    outline: "none",
                    margin: "0 2px",
                  }}
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") setSelectedTopic(idx);
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 4px 16px rgba(37,99,235,0.13)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.boxShadow =
                      idx === selectedTopic
                        ? "0 2px 8px rgba(37,99,235,0.10)"
                        : "0 1px 4px rgba(0,0,0,0.03)")
                  }
                >
                  <span
                    style={{
                      fontSize: 24,
                      color: topic.color,
                      marginBottom: 4,
                    }}
                  >
                    {topic.icon}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 400,
                      whiteSpace: "nowrap",
                      letterSpacing: 0.1,
                      marginTop: 2,
                      textAlign: "center",
                      lineHeight: 1.2,
                    }}
                  >
                    {topic.label}
                  </span>
                </div>
              ))}
            </div>
            {/* Other Details Section */}
            <div
              style={{
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
                padding: 32,
              }}
            >
              <h3 style={{ fontWeight: 700, fontSize: 22, marginBottom: 20 }}>
                Other Details
              </h3>
              <ol style={{ paddingLeft: 24, margin: 0 }}>
                {otherDetails.map((item, idx) => (
                  <li
                    key={idx}
                    style={{ fontSize: 16, marginBottom: 12, lineHeight: 1.7 }}
                  >
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          {/* Right Side Info Card */}
          <div style={{ flex: 1, minWidth: 320 }}>
            <div
              style={{
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
                padding: 24,
                position: "sticky",
                top: 32,
              }}
            >
              <img
                src={details.image}
                alt={decodedCourseName}
                style={{
                  width: "100%",
                  height: 160,
                  objectFit: "cover",
                  borderRadius: 8,
                  marginBottom: 16,
                }}
              />
              <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>
                {decodedCourseName}
              </div>
              <div style={{ color: "#555", fontSize: 15, marginBottom: 12 }}>
                {details.description}
              </div>
              <div style={{ marginBottom: 12 }}>
                <span
                  style={{ fontSize: 22, fontWeight: 700, color: "#2563eb" }}
                >
                  {details.price}
                </span>
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "#888",
                    marginLeft: 10,
                  }}
                >
                  {details.originalPrice}
                </span>
                <span
                  style={{
                    background: "#e0edff",
                    color: "#2563eb",
                    borderRadius: 4,
                    padding: "2px 8px",
                    marginLeft: 10,
                    fontWeight: "bold",
                    fontSize: 14,
                  }}
                >
                  {details.discount}
                </span>
              </div>
              <button
                style={{
                  width: "100%",
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "12px 0",
                  fontWeight: 700,
                  fontSize: 18,
                  cursor: "pointer",
                  marginTop: 8,
                }}
                onClick={handleBuyNow}
              >
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      )}
      {activeTab === "All Classes" && (
        <div
          style={{
            maxWidth: 1200,
            margin: "32px auto",
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
            padding: 32,
          }}
        >
          <h2 style={{ fontWeight: 700, fontSize: 22, marginBottom: 20 }}>
            All Classes
          </h2>
          <ul style={{ fontSize: 16, lineHeight: 1.7 }}>
            <li>Class 1: Introduction to Web Development</li>
            <li>Class 2: HTML Basics</li>
            <li>Class 3: CSS Fundamentals</li>
            <li>Class 4: JavaScript Essentials</li>
            <li>Class 5: React Components</li>
            <li>Class 6: Backend with Node.js</li>
            <li>Class 7: Project Work</li>
          </ul>
        </div>
      )}
      {activeTab === "Infinite Learning" && (
        <div
          style={{
            maxWidth: 1200,
            margin: "32px auto",
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
            padding: 32,
            color: "#b45309",
          }}
        >
          <h2 style={{ fontWeight: 700, fontSize: 22, marginBottom: 20 }}>
            Infinite Learning
          </h2>
          <p>
            Access a vast library of extra resources, quizzes, and practice
            problems to boost your learning journey. New content is added every
            week!
          </p>
          <ul style={{ fontSize: 16, lineHeight: 1.7 }}>
            <li>7000+ Video Lectures</li>
            <li>Practice Quizzes</li>
            <li>Weekly Live Doubt Sessions</li>
            <li>Exclusive Interview Prep Material</li>
          </ul>
        </div>
      )}
      {activeTab === "Tests" && (
        <div
          style={{
            maxWidth: 1200,
            margin: "32px auto",
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
            padding: 32,
          }}
        >
          <h2 style={{ fontWeight: 700, fontSize: 22, marginBottom: 20 }}>
            Tests
          </h2>
          <ul style={{ fontSize: 16, lineHeight: 1.7 }}>
            <li>Weekly Practice Tests</li>
            <li>All India Test Series (AITS)</li>
            <li>Mock Interviews</li>
            <li>Project Evaluations</li>
          </ul>
        </div>
      )}
      {activeTab === "Community" && (
        <div
          style={{
            maxWidth: 1200,
            margin: "32px auto",
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
            padding: 32,
          }}
        >
          <h2 style={{ fontWeight: 700, fontSize: 22, marginBottom: 20 }}>
            Community
          </h2>
          <p>
            Join our student community to discuss, share, and learn together.
            Participate in forums, group projects, and more!
          </p>
          <ul style={{ fontSize: 16, lineHeight: 1.7 }}>
            <li>Discussion Forums</li>
            <li>Peer-to-Peer Support</li>
            <li>Group Projects</li>
            <li>Events & Webinars</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default CourseDetails;
