// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    categories: false,
    video: false,
    stats: false,
    team: false,
    resources: false,
    clients: false,
    collab: false
  });

  const [isHovered, setIsHovered] = useState({
    category1: false,
    category2: false,
    category3: false,
    category4: false,
    category5: false,
    statsCard1: false,
    statsCard2: false,
    statsCard3: false
  });

 

  // Animation trigger on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      
      // Hero section animation
      const heroSection = document.querySelector('[data-section="hero"]');
      if (heroSection && scrollPosition > heroSection.offsetTop + 100) {
        setIsVisible(prev => ({ ...prev, hero: true }));
      }

      // Features section animation
      const featuresSection = document.querySelector('[data-section="features"]');
      if (featuresSection && scrollPosition > featuresSection.offsetTop + 100) {
        setIsVisible(prev => ({ ...prev, features: true }));
      }

      // Categories section animation
      const categoriesSection = document.querySelector('[data-section="categories"]');
      if (categoriesSection && scrollPosition > categoriesSection.offsetTop + 100) {
        setIsVisible(prev => ({ ...prev, categories: true }));
      }

      // Video section animation
      const videoSection = document.querySelector('[data-section="video"]');
      if (videoSection && scrollPosition > videoSection.offsetTop + 100) {
        setIsVisible(prev => ({ ...prev, video: true }));
      }

      // Stats section animation
      const statsSection = document.querySelector('[data-section="stats"]');
      if (statsSection && scrollPosition > statsSection.offsetTop + 100) {
        setIsVisible(prev => ({ ...prev, stats: true }));
      }

      // Team section animation
      const teamSection = document.querySelector('[data-section="team"]');
      if (teamSection && scrollPosition > teamSection.offsetTop + 100) {
        setIsVisible(prev => ({ ...prev, team: true }));
      }

      // Resources section animation
      const resourcesSection = document.querySelector('[data-section="resources"]');
      if (resourcesSection && scrollPosition > resourcesSection.offsetTop + 100) {
        setIsVisible(prev => ({ ...prev, resources: true }));
      }

      // Clients section animation
      const clientsSection = document.querySelector('[data-section="clients"]');
      if (clientsSection && scrollPosition > clientsSection.offsetTop + 100) {
        setIsVisible(prev => ({ ...prev, clients: true }));
      }

      // Collaboration section animation
      const collabSection = document.querySelector('[data-section="collab"]');
      if (collabSection && scrollPosition > collabSection.offsetTop + 100) {
        setIsVisible(prev => ({ ...prev, collab: true }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Trigger initial animations
    setTimeout(() => {
      setIsVisible(prev => ({ ...prev, hero: true }));
    }, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const redirectToLogin = () => {
    // Handle login redirection logic here
    window.location.href = "/login";
  };

  const scrollToCourses = () => {
    const coursesSection = document.getElementById('courses-section');
    if (coursesSection) {
      coursesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Internal CSS styles
  const styles = {
    // Global reset styles
    global: {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9'
    },
    
    // Header styles
    header: {
      backgroundColor: 'white',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease'
    },
    logo: {
      fontWeight: 'bold',
      fontSize: '1.5rem'
    },
    nav: {
      display: 'flex',
      gap: '20px'
    },
    allCoursesBtn: {
      padding: '8px 16px',
      border: '2px solid #4460f1',
      borderRadius: '8px',
      backgroundColor: 'transparent',
      color: '#4460f1',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'all 0.3s ease',
      transform: 'translateY(0)',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(68, 96, 241, 0.3)',
        backgroundColor: '#4460f1',
        color: 'white'
      }
    },
    dropdownIcon: {
      fontSize: '12px',
      marginLeft: '6px'
    },
    loginBtn: {
      padding: '10px 20px',
      backgroundColor: '#6c63ff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      transform: 'translateY(0)',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(108, 99, 255, 0.4)',
        backgroundColor: '#5a52d5'
      }
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    },
    
    // Hero section styles
    hero: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '60px',
      background: 'linear-gradient(to right, #eef2ff, #ffffff)',
      minHeight: '500px',
      opacity: 0,
      transform: 'translateY(30px)',
      transition: 'all 0.8s ease',
      animation: 'fadeInUp 0.8s ease forwards'
    },
    heroText: {
      maxWidth: '600px'
    },
    heroTitle: {
      fontSize: '2.5rem',
      marginBottom: '20px'
    },
    highlight: {
      color: '#6c63ff'
    },
    heroParagraph: {
      fontSize: '1rem',
      marginBottom: '30px',
      color: '#666'
    },
    heroButton: {
      backgroundColor: '#6c63ff',
      color: 'white',
      padding: '12px 30px',
      border: 'none',
      fontSize: '1rem',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      transform: 'translateY(0)',
      '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: '0 8px 25px rgba(108, 99, 255, 0.4)',
        backgroundColor: '#5a52d5'
      }
    },
    heroImages: {
      position: 'relative',
      animation: 'float 3s ease-in-out infinite'
    },
    heroImage: {
      width: '150px',
      borderRadius: '50%',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05) rotate(5deg)'
      }
    },
    
    // Features section styles
    features: {
      display: 'flex',
      justifyContent: 'space-around',
      backgroundColor: 'white',
      padding: '60px 0',
      boxShadow: '0 -2px 8px rgba(0,0,0,0.05)',
      opacity: 0,
      transform: 'translateY(30px)',
      transition: 'all 0.8s ease'
    },
    featureBox: {
      textAlign: 'center',
      transition: 'all 0.3s ease',
      transform: 'translateY(0)',
      '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      }
    },
    featureImage: {
      width: '40px',
      marginBottom: '10px',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'scale(1.2) rotate(10deg)'
      }
    },
    featureTitle: {
      marginBottom: '5px',
      fontSize: '1rem',
      color: '#333'
    },
    featureText: {
      fontSize: '0.9rem',
      color: '#666'
    },
    
    // Categories section styles
    categories: {
      padding: '60px 30px',
      background: '#fff',
      textAlign: 'center',
      opacity: 0,
      transform: 'translateY(30px)',
      transition: 'all 0.8s ease'
    },
    categoriesTitle: {
      fontSize: '2rem',
      marginBottom: '10px'
    },
    categoriesParagraph: {
      color: '#444',
      marginBottom: '40px'
    },
    categoryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px',
      justifyContent: 'center',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    category: {
      background: '#fdfdfd',
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '20px',
      cursor: 'pointer',
      position: 'relative',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      textAlign: 'left',
      height: '330px',
      justifyContent: 'space-between',
      transform: 'translateY(0)',
      '&:hover': {
        transform: 'translateY(-10px) scale(1.02)',
        boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
        borderColor: '#6c63ff'
      }
    },
    categoryTitle: {
      marginBottom: '15px'
    },
    tags: {
      marginBottom: '15px'
    },
    tag: {
      display: 'inline-block',
      background: '#fff',
      border: '1px solid #ccc',
      borderRadius: '20px',
      padding: '5px 12px',
      margin: '5px 5px 5px 0',
      fontSize: '0.85rem'
    },
    categoryImage: {
      width: '60px',
      marginTop: 'auto'
    },
    categoryButton: {
      background: '#f3f3f3',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '20px',
      fontWeight: 'bold',
      cursor: 'pointer',
      alignSelf: 'flex-start',
      transition: 'all 0.3s ease',
      transform: 'translateX(0)',
      '&:hover': {
        transform: 'translateX(5px)',
        backgroundColor: '#6c63ff',
        color: 'white',
        boxShadow: '0 4px 12px rgba(108, 99, 255, 0.3)'
      }
    },
    
    // Video section styles
    promoVideo: {
      display: 'flex',
      justifyContent: 'center',
      background: '#000',
      padding: '20px 0',
      opacity: 0,
      transform: 'translateY(30px)',
      transition: 'all 0.8s ease'
    },
    videoContainer: {
      width: '90%',
      maxWidth: '960px',
      aspectRatio: '16 / 9',
      position: 'relative'
    },
    videoIframe: {
      width: '100%',
      height: '100%',
      borderRadius: '12px',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
      }
    },
    
    // Trusted platform section styles
    trustedPlatform: {
      textAlign: 'center',
      padding: '40px 20px',
      opacity: 0,
      transform: 'translateY(30px)',
      transition: 'all 0.8s ease'
    },
    trustedTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)',
        color: '#6c63ff',
        textShadow: '0 2px 8px rgba(108, 99, 255, 0.3)'
      }
    },
    trustedParagraph: {
      fontSize: '1rem',
      color: '#555',
      marginBottom: '30px',
      transition: 'all 0.3s ease',
      '&:hover': {
        color: '#6c63ff',
        transform: 'translateX(5px)'
      }
    },
    statsCards: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      marginBottom: '30px'
    },
    statsCard: {
      width: '300px',
      minHeight: '160px',
      padding: '20px',
      borderRadius: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      position: 'relative',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      transform: 'translateY(0) scale(1)',
      cursor: 'pointer',
      overflow: 'hidden',
      '&:hover': {
        transform: 'translateY(-15px) scale(1.05)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
        '& .popIcon': {
          opacity: 1,
          transform: 'translateY(-10px) scale(1.2)'
        }
      }
    },
    statsCardTitle: {
      fontSize: '40px',
      fontWeight: 'bold',
      marginBottom: '5px',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'scale(1.1)',
        color: '#6c63ff'
      }
    },
    statsCardText: {
      fontSize: '14px',
      color: '#333'
    },
    statsCardImage: {
      width: '50px',
      position: 'absolute',
      bottom: '10px',
      right: '10px',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'rotate(360deg) scale(1.2)'
      }
    },
    popIcon: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      width: '30px',
      height: '30px',
      backgroundColor: '#6c63ff',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '16px',
      fontWeight: 'bold',
      opacity: 0,
      transform: 'translateY(0) scale(0.8)',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      boxShadow: '0 4px 12px rgba(108, 99, 255, 0.4)',
      zIndex: 10
    },
    getStartedBtn: {
      backgroundColor: '#5f38e9',
      color: 'white',
      padding: '12px 30px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      transform: 'translateY(0)',
      '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: '0 8px 25px rgba(95, 56, 233, 0.4)',
        backgroundColor: '#4a2dd8'
      }
    },
    
    // Team section styles
    ourTeamSection: {
      padding: '50px 20px',
      backgroundColor: '#f9f9f9',
      textAlign: 'center',
      opacity: 0,
      transform: 'translateY(30px)',
      transition: 'all 0.8s ease'
    },
    teamTitle: {
      fontSize: '2rem',
      marginBottom: '10px'
    },
    teamParagraph: {
      color: '#666',
      marginBottom: '30px'
    },
         teamGrid: {
       display: 'flex',
       gap: '20px',
       maxWidth: '100%',
       margin: 'auto',
       position: 'relative',
       animation: 'marquee 20s linear infinite',
     },
         teamImage: {
       width: '200px',
       height: '200px',
       objectFit: 'cover',
       borderRadius: '10px',
       filter: 'grayscale(100%)',
       transition: 'all 0.3s ease',
       transform: 'scale(1)',
       margin: '0 15px',
       flexShrink: 0,
       '&:hover': {
         transform: 'scale(1.1)',
         filter: 'grayscale(0%)',
         boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
       }
     },
    
    // Web dev resources section styles
    sectionTitle: {
      textAlign: 'center',
      padding: '60px 20px 40px',
      background: '#f8f9fa',
      opacity: 0,
      transform: 'translateY(30px)',
      transition: 'all 0.8s ease'
    },
    sectionTitleH1: {
      fontSize: '2.5rem',
      marginBottom: '10px'
    },
    sectionTitleP: {
      fontSize: '1.1rem',
      color: '#555'
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '30px',
      padding: '40px 20px'
    },
    resourceCard: {
      backgroundColor: '#f0f8ff',
      borderRadius: '15px',
      padding: '20px',
      width: '300px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      transform: 'translateY(0)',
      '&:hover': {
        transform: 'translateY(-10px) scale(1.02)',
        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)'
      }
    },
    resourceCardTitle: {
      fontSize: '1.5rem',
      color: '#222',
      marginBottom: '10px'
    },
    resourceCardText: {
      color: '#444',
      fontSize: '0.95rem',
      marginBottom: '20px'
    },
    resourceCardImage: {
      width: '40px',
      height: 'auto',
      marginBottom: '15px'
    },
    exploreBtn: {
      backgroundColor: '#000',
      color: '#fff',
      padding: '8px 16px',
      borderRadius: '5px',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
      transform: 'translateX(0)',
      '&:hover': {
        transform: 'translateX(5px)',
        backgroundColor: '#333',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
      }
    },
    card1: {
      backgroundColor: '#e6f4ff'
    },
    card2: {
      backgroundColor: '#fff6dd'
    },
    card3: {
      backgroundColor: '#e6fff2'
    },
    
    // Clients section styles
    clientsSection: {
      padding: '60px 20px',
      textAlign: 'center',
      background: '#f5f8ff',
      opacity: 0,
      transform: 'translateY(30px)',
      transition: 'all 0.8s ease'
    },
    clientsTitle: {
      fontSize: '2.5rem',
      marginBottom: '10px'
    },
    clientsParagraph: {
      color: '#666',
      fontSize: '1.1rem',
      marginBottom: '40px'
    },
    clientsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '20px',
      maxWidth: '1200px',
      margin: 'auto'
    },
    clientBox: {
      background: '#e8f0ff',
      padding: '25px 15px',
      borderRadius: '15px',
      transition: 'all 0.3s ease',
      boxShadow: '0 5px 12px rgba(0, 0, 0, 0.05)',
      cursor: 'pointer',
      transform: 'translateY(0)',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
        backgroundColor: '#d4e4ff'
      }
    },
    clientBoxTitle: {
      fontSize: '1.1rem',
      margin: 0,
      color: '#222'
    },
    clientBoxSmall: {
      display: 'block',
      marginTop: '5px',
      color: '#555',
      fontSize: '0.85rem'
    },
    
    // Collaboration section styles
    collabSection: {
      padding: '60px 20px',
      textAlign: 'center',
      background: '#fff',
      opacity: 0,
      transform: 'translateY(30px)',
      transition: 'all 0.8s ease'
    },
    collabTitle: {
      fontSize: '2.5rem',
      marginBottom: '10px'
    },
    collabParagraph: {
      color: '#666',
      fontSize: '1.1rem',
      marginBottom: '40px'
    },
    collabGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '20px',
      maxWidth: '1200px',
      margin: 'auto'
    },
    collabCard: {
      background: '#e8f0fe',
      padding: '25px 15px',
      borderRadius: '15px',
      transition: 'all 0.3s ease',
      boxShadow: '0 5px 12px rgba(0,0,0,0.05)',
      cursor: 'pointer',
      position: 'relative',
      transform: 'translateY(0)',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
        backgroundColor: '#d4e4fe'
      }
    },
    collabCardTitle: {
      fontSize: '1.1rem',
      margin: 0,
      color: '#222'
    },
    collabCardSmall: {
      display: 'block',
      marginTop: '5px',
      color: '#555',
      fontSize: '0.85rem'
    },
    marqueeContainer: {
      width: '100%',
      overflow: 'hidden',
      position: 'relative',
      margin: '0 auto',
      background: '#000',
      padding: '20px 0',
    },
  };

  // Add CSS keyframes for animations
  const keyframes = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    
    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    @keyframes bounce {
      0%, 20%, 53%, 80%, 100% {
        transform: translate3d(0,0,0);
      }
      40%, 43% {
        transform: translate3d(0, -30px, 0);
      }
      70% {
        transform: translate3d(0, -15px, 0);
      }
      90% {
        transform: translate3d(0, -4px, 0);
      }
    }
    
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(1);
      }
    }
    
         @keyframes popIn {
       0% {
         opacity: 0;
         transform: scale(0.3) translateY(-50px);
       }
       50% {
         opacity: 1;
         transform: scale(1.1) translateY(-10px);
       }
       100% {
         opacity: 1;
         transform: scale(1) translateY(-10px);
       }
     }
     
     @keyframes marquee {
       0% {
         transform: translateX(0);
       }
       100% {
         transform: translateX(-50%);
       }
     }

    /* Course section modern grid and card styles */
    .course-modern-grid {
      display: grid;
      grid-template-columns: 1fr;
      max-width: 500px;
      margin: 0 auto;
      gap: 16px;
      margin-top: 16px;
    }
    @media (min-width: 900px) {
      .course-modern-grid {
        grid-template-columns: repeat(2, 1fr);
        max-width: 1040px;
      }
    }

    .course-modern-card {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      background: #fff;
      border-radius: 14px;
      box-shadow: 0 2px 8px rgba(95,56,233,0.05);
      position: relative;
      overflow: hidden;
      min-height: 160px;
      border: 1px solid #eee;
      transition: box-shadow 0.18s, transform 0.18s, border 0.18s;
      height: 180px;
    }

    .course-modern-card:hover {
      box-shadow: 0 6px 20px rgba(95,56,233,0.13);
      transform: translateY(-3px) scale(1.012);
      border: 1px solid #d1c4e9;
    }

    .course-modern-content {
      flex: 1 1 60%;
      padding: 18px 10px 12px 18px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      min-width: 0;
    }

    .course-modern-title {
      font-size: 1.18rem;
      font-weight: bold;
      margin-bottom: 10px;
      color: #181818;
      letter-spacing: 0.2px;
      text-align: left;
      line-height: 1.1;
    }

    .course-modern-tags {
      display: grid;
      grid-template-columns: repeat(2, minmax(80px, 1fr));
      gap: 8px 10px;
      margin-bottom: 16px;
      width: 100%;
      max-width: 200px;
    }

    .course-modern-tag {
      background: #fff;
      border: 1px solid #e0e0e0;
      border-radius: 24px;
      padding: 7px 16px;
      font-size: 0.98rem;
      color: #222;
      font-weight: 500;
      box-shadow: 0 1px 2px rgba(95,56,233,0.02);
      text-align: center;
      min-width: 0;
      white-space: nowrap;
    }

    .course-modern-explore-row {
      margin-top: auto;
      display: flex;
      align-items: center;
      gap: 7px;
    }

    .course-modern-explore-btn {
      background: #fafafa;
      border: none;
      border-radius: 24px;
      padding: 7px 18px 7px 14px;
      font-size: 1rem;
      font-weight: 500;
      color: #181818;
      display: flex;
      align-items: center;
      gap: 7px;
      box-shadow: 0 1px 2px rgba(95,56,233,0.02);
      cursor: pointer;
      transition: background 0.15s;
    }

    .course-modern-explore-btn:hover {
      background: #ede7f6;
    }

    .course-modern-arrow {
      font-size: 1.1rem;
      margin-left: 1px;
    }

    .course-modern-visual {
      flex: 1 1 40%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      min-width: 70px;
      min-height: 100%;
    }

    .course-modern-halfcircle {
      position: absolute;
      right: -30px;
      top: 50%;
      transform: translateY(-50%);
      width: 140px;
      height: 140px;
      border-top-right-radius: 140px;
      border-bottom-right-radius: 140px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      z-index: 1;
      opacity: 0.18;
      background: #ffebee;
    }

    .course-modern-card.mern .course-modern-halfcircle { background: #ffebee; }
    .course-modern-card.python .course-modern-halfcircle { background: #fff8e1; }
    .course-modern-card.java .course-modern-halfcircle { background: #fffde7; }
    .course-modern-card.frontend .course-modern-halfcircle { background: #e3f2fd; }
    .course-modern-card.cpp .course-modern-halfcircle { background: #ede7f6; }

    .course-modern-sticker {
      position: relative;
      z-index: 2;
      width: 48px;
      height: 48px;
      object-fit: contain;
      filter: drop-shadow(0 2px 8px rgba(95,56,233,0.08));
    }

    /* Course title row with sticker */
    .course-title-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      gap: 10px;
      position: relative;
    }

    .course-title-row .course-title-text {
      font-size: 1.45rem;
      font-weight: bold;
      color: #181818;
      letter-spacing: 0.5px;
      text-align: left;
      line-height: 1.1;
      white-space: nowrap;
    }

    .course-title-row .course-sticker-inline {
      width: 48px;
      height: 48px;
      object-fit: contain;
      margin-left: 0;
      margin-bottom: 0;
      vertical-align: middle;
      z-index: 2;
      transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), filter 0.3s;
    }

    .courses-animate-card:hover .course-title-row .course-sticker-inline {
      transform: scale(1.18);
      filter: drop-shadow(0 0 12px #a1c4fd) drop-shadow(0 2px 8px rgba(95,56,233,0.18));
    }

    /* Hover effects for course cards */
    .courses-animate-card:hover {
      border: 1.5px solid #000 !important;
    }

    .courses-animate-card.stagger-1:hover {
      background: #fff6f7;
      box-shadow: 0 8px 32px #ffebee99, 0 2px 12px rgba(95,56,233,0.10);
      transform: translateY(-8px) scale(1.03);
      border: 1.5px solid #000;
    }

    .courses-animate-card.stagger-2:hover {
      background: #fffef7;
      box-shadow: 0 8px 32px #fff8e199, 0 2px 12px rgba(95,56,233,0.10);
      transform: translateY(-8px) scale(1.03);
      border: 1.5px solid #000;
    }

    .courses-animate-card.stagger-3:hover {
      background: #fffcf2;
      box-shadow: 0 8px 32px #fffde799, 0 2px 12px rgba(95,56,233,0.10);
      transform: translateY(-8px) scale(1.03);
      border: 1.5px solid #000;
    }

    .courses-animate-card.stagger-4:hover {
      background: #f7faff;
      box-shadow: 0 8px 32px #e3f2fd99, 0 2px 12px rgba(95,56,233,0.10);
      transform: translateY(-8px) scale(1.03);
      border: 1.5px solid #000;
    }

    .courses-animate-card.stagger-5:hover {
      background: #f8f6ff;
      box-shadow: 0 8px 32px #ede7f699, 0 2px 12px rgba(95,56,233,0.10);
      transform: translateY(-8px) scale(1.03);
      border: 1.5px solid #000;
    }
  `;

  return (
    <div style={styles.global}>
      <style>{keyframes}</style>
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <div style={styles.logo}>CodeCanvas</div>
          <button style={styles.allCoursesBtn} onClick={scrollToCourses}>
            All Courses
            <span style={styles.dropdownIcon}>▼</span>
          </button>
        </div>
        <button
          style={styles.loginBtn}
          onClick={() => (window.location.href = "/login")}
        >
          Login
        </button>
      </header>

      <section 
        style={{
          ...styles.hero,
          opacity: isVisible.hero ? 1 : 0,
          transform: isVisible.hero ? 'translateY(0)' : 'translateY(30px)'
        }}
        data-section="hero"
      >
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>
            India's <span style={styles.highlight}>Trusted & Affordable</span>
            <br />
            Educational Platform For Developer's
          </h1>
          <p style={styles.heroParagraph}>
            Unlock your potential by signing up with CodeCanvas - The most
            affordable learning solution
          </p>
          <button style={styles.heroButton}>Get Started</button>
        </div>
        <div style={styles.heroImages}>
          <img src="indew.jpeg" alt="Indew" style={styles.heroImage} />
        </div>
      </section>

      <section 
        style={{
          ...styles.features,
          opacity: isVisible.features ? 1 : 0,
          transform: isVisible.features ? 'translateY(0)' : 'translateY(30px)'
        }}
        data-section="features"
      >
        <div style={styles.featureBox}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/747/747310.png"
            alt="Live"
            style={styles.featureImage}
          />
          <h4 style={styles.featureTitle}>Daily Live</h4>
          <p style={styles.featureText}>Interactive classes</p>
        </div>
        <div style={styles.featureBox}>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3281/3281289.png" 
            alt="Real World Problems" 
            style={styles.featureImage} 
          />
          <h4 style={styles.featureTitle}>1000+</h4>
          <p style={styles.featureText}>Real World Problems</p>
        </div>
        <div style={styles.featureBox}>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1940/1940611.png" 
            alt="Doubt Solving" 
            style={styles.featureImage} 
          />
          <h4 style={styles.featureTitle}>24 x 7</h4>
          <p style={styles.featureText}>Doubt solving sessions</p>
        </div>
      </section>

      <section 
        id="courses-section" 
        style={{
          ...styles.categories,
          opacity: isVisible.categories ? 1 : 0,
          transform: isVisible.categories ? 'translateY(0)' : 'translateY(30px)'
        }}
        data-section="categories"
      >
        <h2 style={styles.categoriesTitle}>Our Courses</h2>
        <p style={styles.categoriesParagraph}>
          CodeCanvs is preparing students for 35+ exam categories. Scroll down to find
          the one you are preparing for
        </p>
        <div style={styles.categoryGrid}>
          <div 
            className="courses-animate-card stagger-1 course-modern-card mern"
            style={styles.category} 
            onClick={redirectToLogin}
            onMouseEnter={() => setIsHovered(prev => ({ ...prev, category1: true }))}
            onMouseLeave={() => setIsHovered(prev => ({ ...prev, category1: false }))}
          >
            <div className="course-modern-content">
              <div className="course-title-row">
                <span className="course-title-text">MERN FULL STACK</span>
                <img className="course-sticker-inline" src="mern.jpg" alt="MERN" />
              </div>
              <div className="course-modern-tags">
                <span className="course-modern-tag">Html</span>
                <span className="course-modern-tag">Css</span>
                <span className="course-modern-tag">Js</span>
                <span className="course-modern-tag">React</span>
                <span className="course-modern-tag">Tailwind</span>
                <span className="course-modern-tag">Node.js</span>
                <span className="course-modern-tag">Express.js</span>
                <span className="course-modern-tag">Ai integartion</span>
                <span className="course-modern-tag">DSA</span>
                <span className="course-modern-tag">Communication Skills</span>
                <span className="course-modern-tag">Aptitude</span>
                <span className="course-modern-tag">Reasoning</span>
                <span className="course-modern-tag">100+Interview Question</span>
                <span className="course-modern-tag">Live Project</span>
              </div>
              <div className="course-modern-explore-row">
                <button className="course-modern-explore-btn">
                  Explore Category <span className="course-modern-arrow">→</span>
                </button>
              </div>
            </div>
            <div className="course-modern-visual">
              <div className="course-modern-halfcircle"></div>
              <img className="course-modern-sticker" src="mern.jpg" alt="MERN" />
            </div>
          </div>
          
          <div 
            className="courses-animate-card stagger-2 course-modern-card python"
            style={styles.category} 
            onClick={redirectToLogin}
            onMouseEnter={() => setIsHovered(prev => ({ ...prev, category2: true }))}
            onMouseLeave={() => setIsHovered(prev => ({ ...prev, category2: false }))}
          >
            <div className="course-modern-content">
              <div className="course-title-row">
                <span className="course-title-text">Python Full Stack</span>
                <img className="course-sticker-inline" src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="Python" />
              </div>
              <div className="course-modern-tags">
                <span className="course-modern-tag">Html</span>
                <span className="course-modern-tag">Css</span>
                <span className="course-modern-tag">Js</span>
                <span className="course-modern-tag">React</span>
                <span className="course-modern-tag">Tailwind</span>
                <span className="course-modern-tag">python</span>
                <span className="course-modern-tag">Flask</span>
                <span className="course-modern-tag">Ai integartion</span>
                <span className="course-modern-tag">DSA</span>
                <span className="course-modern-tag">Communication Skills</span>
                <span className="course-modern-tag">Aptitude</span>
                <span className="course-modern-tag">Reasoning</span>
                <span className="course-modern-tag">100+Interview Question</span>
                <span className="course-modern-tag">Live Project</span>
              </div>
              <div className="course-modern-explore-row">
                <button className="course-modern-explore-btn">
                  Explore Category <span className="course-modern-arrow">→</span>
                </button>
              </div>
            </div>
            <div className="course-modern-visual">
              <div className="course-modern-halfcircle"></div>
              <img className="course-modern-sticker" src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="Python" />
            </div>
          </div>
          
          <div 
            className="courses-animate-card stagger-3 course-modern-card java"
            style={styles.category} 
            onClick={redirectToLogin}
            onMouseEnter={() => setIsHovered(prev => ({ ...prev, category3: true }))}
            onMouseLeave={() => setIsHovered(prev => ({ ...prev, category3: false }))}
          >
            <div className="course-modern-content">
              <div className="course-title-row">
                <span className="course-title-text">Java Full Stack</span>
                <img className="course-sticker-inline" src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png" alt="Java" />
              </div>
              <div className="course-modern-tags">
                <span className="course-modern-tag">Html</span>
                <span className="course-modern-tag">Css</span>
                <span className="course-modern-tag">Js</span>
                <span className="course-modern-tag">React</span>
                <span className="course-modern-tag">Tailwind</span>
                <span className="course-modern-tag">Java</span>
                <span className="course-modern-tag">Spring Boot</span>
                <span className="course-modern-tag">Ai integartion</span>
                <span className="course-modern-tag">DSA</span>
                <span className="course-modern-tag">Communication Skills</span>
                <span className="course-modern-tag">Aptitude</span>
                <span className="course-modern-tag">Reasoning</span>
                <span className="course-modern-tag">100+Interview Question</span>
                <span className="course-modern-tag">Live Project</span>
              </div>
              <div className="course-modern-explore-row">
                <button className="course-modern-explore-btn">
                  Explore Category <span className="course-modern-arrow">→</span>
                </button>
              </div>
            </div>
            <div className="course-modern-visual">
              <div className="course-modern-halfcircle"></div>
              <img className="course-modern-sticker" src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png" alt="Java" />
            </div>
          </div>
          
          <div 
            className="courses-animate-card stagger-4 course-modern-card frontend"
            style={styles.category} 
            onClick={redirectToLogin}
            onMouseEnter={() => setIsHovered(prev => ({ ...prev, category4: true }))}
            onMouseLeave={() => setIsHovered(prev => ({ ...prev, category4: false }))}
          >
            <div className="course-modern-content">
              <div className="course-title-row">
                <span className="course-title-text">Front-End</span>
                <img className="course-sticker-inline" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="Frontend" />
              </div>
              <div className="course-modern-tags">
                <span className="course-modern-tag">Html</span>
                <span className="course-modern-tag">Css</span>
                <span className="course-modern-tag">Js</span>
                <span className="course-modern-tag">React</span>
                <span className="course-modern-tag">Tailwind</span>
                <span className="course-modern-tag">DSA</span>
                <span className="course-modern-tag">Communication Skills</span>
                <span className="course-modern-tag">Aptitude</span>
                <span className="course-modern-tag">Reasoning</span>
                <span className="course-modern-tag">100+Interview Question</span>
                <span className="course-modern-tag">Live Project</span>
              </div>
              <div className="course-modern-explore-row">
                <button className="course-modern-explore-btn">
                  Explore Category <span className="course-modern-arrow">→</span>
                </button>
              </div>
            </div>
            <div className="course-modern-visual">
              <div className="course-modern-halfcircle"></div>
              <img className="course-modern-sticker" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="Frontend" />
            </div>
          </div>
          
          <div 
            className="courses-animate-card stagger-5 course-modern-card cpp"
            style={styles.category} 
            onClick={redirectToLogin}
            onMouseEnter={() => setIsHovered(prev => ({ ...prev, category5: true }))}
            onMouseLeave={() => setIsHovered(prev => ({ ...prev, category5: false }))}
          >
            <div className="course-modern-content">
              <div className="course-title-row">
                <span className="course-title-text">C and C++</span>
                <img className="course-sticker-inline" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="C++" />
              </div>
              <div className="course-modern-tags">
                <span className="course-modern-tag">Logic Building</span>
                <span className="course-modern-tag">500+ Programming Practice Question</span>
              </div>
              <div className="course-modern-explore-row">
                <button className="course-modern-explore-btn">
                  Explore Category <span className="course-modern-arrow">→</span>
                </button>
              </div>
            </div>
            <div className="course-modern-visual">
              <div className="course-modern-halfcircle"></div>
              <img className="course-modern-sticker" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="C++" />
            </div>
          </div>
        </div>
      </section>

      <section 
        style={{
          ...styles.promoVideo,
          opacity: isVisible.video ? 1 : 0,
          transform: isVisible.video ? 'translateY(0)' : 'translateY(30px)'
        }}
        data-section="video"
      >
        <div style={styles.videoContainer}>
          <iframe
            height="504"
            src="https://www.youtube.com/embed/5tHgvn5cgM8"
            title="Indew Technology"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={styles.videoIframe}
          ></iframe>
        </div>
      </section>

      <section 
        style={{
          ...styles.trustedPlatform,
          opacity: isVisible.stats ? 1 : 0,
          transform: isVisible.stats ? 'translateY(0)' : 'translateY(30px)'
        }}
        data-section="stats"
      >
        <h2 style={styles.trustedTitle}>A Platform Trusted by Students</h2>
        <p style={styles.trustedParagraph}>
          Physics Wallah aims to transform not just through words, but provide
          results with numbers!
        </p>

        <div style={styles.statsCards}>
          <div 
            style={{...styles.statsCard, backgroundColor: "#fff2dc"}}
            onMouseEnter={() => setIsHovered(prev => ({ ...prev, statsCard1: true }))}
            onMouseLeave={() => setIsHovered(prev => ({ ...prev, statsCard1: false }))}
          >
            <h3 style={styles.statsCardTitle}>1Million+</h3>
            <p style={styles.statsCardText}>Happy Students</p>
            <div 
              style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                width: '50px',
                height: '50px',
                backgroundColor: '#ffd700',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                transition: 'all 0.3s ease',
                transform: isHovered.statsCard1 ? 'rotate(360deg) scale(1.2)' : 'rotate(0deg) scale(1)'
              }}
            >
              🎓
            </div>
          </div>
          
          <div 
            style={{...styles.statsCard, backgroundColor: "#ffefef"}}
            onMouseEnter={() => setIsHovered(prev => ({ ...prev, statsCard2: true }))}
            onMouseLeave={() => setIsHovered(prev => ({ ...prev, statsCard2: false }))}
          >
            <h3 style={styles.statsCardTitle}>500+</h3>
            <p style={styles.statsCardText}>Interview Passsed</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2900/2900664.png"
              alt="Mock Test"
              style={{
                ...styles.statsCardImage,
                transform: isHovered.statsCard2 ? 'rotate(360deg) scale(1.2)' : 'rotate(0deg) scale(1)'
              }}
            />
          </div>
          
          <div 
            style={{...styles.statsCard, backgroundColor: "#e6f7ff"}}
            onMouseEnter={() => setIsHovered(prev => ({ ...prev, statsCard3: true }))}
            onMouseLeave={() => setIsHovered(prev => ({ ...prev, statsCard3: false }))}
          >
            <h3 style={styles.statsCardTitle}>15000+</h3>
            <p style={styles.statsCardText}>Video Lectures</p>
            <div 
              style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                width: '50px',
                height: '50px',
                backgroundColor: '#87ceeb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                transition: 'all 0.3s ease',
                transform: isHovered.statsCard3 ? 'rotate(360deg) scale(1.2)' : 'rotate(0deg) scale(1)'
              }}
            >
              📹
            </div>
          </div>
        </div>
        <a href="/login"><button style={styles.getStartedBtn}>Get Started</button></a>
        
      </section>

      <section 
        style={{
          ...styles.ourTeamSection,
          opacity: isVisible.team ? 1 : 0,
          transform: isVisible.team ? 'translateY(0)' : 'translateY(30px)'
        }}
        data-section="team"
      >
        <h2 style={styles.teamTitle}>Academic Excellence : Results</h2>
        <p style={styles.teamParagraph}>Meet the passionate developers behind our Web Dev CCG initiative</p>

        <div style={styles.marqueeContainer}>
          <div style={styles.teamGrid}>
            <img src="https://surl.li/mkarzx" alt="Team Member 1" style={styles.teamImage} />
            <img src="https://surl.li/mkarzx" alt="Team Member 2" style={styles.teamImage} />
            <img src="https://surl.li/mkarzx" alt="Team Member 3" style={styles.teamImage} />
            <img src="https://surl.li/mkarzx" alt="Team Member 4" style={styles.teamImage} />
            <img src="https://surl.li/mkarzx" alt="Team Member 5" style={styles.teamImage} />
            <img src="https://surl.li/mkarzx" alt="Team Member 6" style={styles.teamImage} />
            {/* Duplicate set for seamless marquee */}
            <img src="https://surl.li/mkarzx" alt="Team Member 1" style={styles.teamImage} />
            <img src="https://surl.li/mkarzx" alt="Team Member 2" style={styles.teamImage} />
            <img src="https://surl.li/mkarzx" alt="Team Member 3" style={styles.teamImage} />
            <img src="https://surl.li/mkarzx" alt="Team Member 4" style={styles.teamImage} />
            <img src="https://surl.li/mkarzx" alt="Team Member 5" style={styles.teamImage} />
            <img src="https://surl.li/mkarzx" alt="Team Member 6" style={styles.teamImage} />
          </div>
        </div>
      </section>

      <section 
        style={{
          ...styles.sectionTitle,
          opacity: isVisible.resources ? 1 : 0,
          transform: isVisible.resources ? 'translateY(0)' : 'translateY(30px)'
        }}
        data-section="resources"
      >
        <h1 style={styles.sectionTitleH1}>Web Dev Resources</h1>
        <p style={styles.sectionTitleP}>
          A curated list of resources to master front-end development with CCG
        </p>
      </section>

      <section style={styles.cardContainer}>
        <div style={{...styles.resourceCard, ...styles.card1, width: "20%", height: "300px"}}>
          <h2 style={styles.resourceCardTitle}>HTML & CSS Modules</h2>
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
            alt="HTML CSS Icon"
            style={styles.resourceCardImage}
          />
          <p style={styles.resourceCardText}>
            Learn the foundations of web development with clean HTML structure
            and responsive CSS design.
          </p>
          <a href="#" style={styles.exploreBtn}>
            Explore
          </a>
        </div>

        <div style={{...styles.resourceCard, ...styles.card2}}>
          <h2 style={styles.resourceCardTitle}>JavaScript Solutions</h2>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
            alt="JavaScript Icon"
            style={styles.resourceCardImage}
          />
          <p style={styles.resourceCardText}>
            Master dynamic web functionality with step-by-step JS examples and
            mini projects for practice.
          </p>
          <a href="#" style={styles.exploreBtn}>
            Explore
          </a>
        </div>

        <div style={{...styles.resourceCard, ...styles.card3}}>
          <h2 style={styles.resourceCardTitle}>React Notes</h2>
          <img
            src="https://cdn-icons-png.flaticon.com/512/919/919851.png"
            alt="React Icon"
            style={styles.resourceCardImage}
          />
          <p style={styles.resourceCardText}>
            Dive into the world of React with simplified notes, hooks, props,
            state, and more explained clearly.
          </p>
          <a href="#" style={styles.exploreBtn}>
            Explore
          </a>
        </div>
      </section>

      <section 
        style={{
          ...styles.clientsSection,
          opacity: isVisible.clients ? 1 : 0,
          transform: isVisible.clients ? 'translateY(0)' : 'translateY(30px)'
        }}
        data-section="clients"
      >
        <h2 style={styles.clientsTitle}>Our Clients</h2>
        <p style={styles.clientsParagraph}>Empowering global businesses with our digital solutions</p>

        <div style={styles.clientsGrid}>
          <div style={styles.clientBox}>
            <h3 style={styles.clientBoxTitle}>IBM</h3>
            <small style={styles.clientBoxSmall}>Technology Consulting</small>
          </div>
          <div style={styles.clientBox}>
            <h3 style={styles.clientBoxTitle}>Cognizant</h3>
            <small style={styles.clientBoxSmall}>Software Services</small>
          </div>
        </div>
      </section>

      <section 
        style={{
          ...styles.collabSection,
          opacity: isVisible.collab ? 1 : 0,
          transform: isVisible.collab ? 'translateY(0)' : 'translateY(30px)'
        }}
        data-section="collab"
      >
        <h2 style={styles.collabTitle}>Our Collaboration</h2>
        <p style={styles.collabParagraph}>
          Trusted by top organizations, startups, and institutions across India
        </p>

        <div style={styles.collabGrid}>
          <div style={styles.collabCard}>
            <h3 style={styles.collabCardTitle}>Britannia Industries Ltd.</h3>
            <small style={styles.collabCardSmall}>FMCG Leader</small>
          </div>
          <div style={styles.collabCard}>
            <h3 style={styles.collabCardTitle}>Ruchi Hi Seeds</h3>
            <small style={styles.collabCardSmall}>Agri-Tech Partner</small>
          </div>
          <div style={styles.collabCard}>
            <h3 style={styles.collabCardTitle}>Cyber Cell Surat</h3>
            <small style={styles.collabCardSmall}>Govt. Initiative</small>
          </div>
          <div style={styles.collabCard}>
            <h3 style={styles.collabCardTitle}>311 Indore</h3>
            <small style={styles.collabCardSmall}>Smart City Project</small>
          </div>
          <div style={styles.collabCard}>
            <h3 style={styles.collabCardTitle}>Bhopal Municipal Corp.</h3>
            <small style={styles.collabCardSmall}>Urban Dev Dept</small>
          </div>
          <div style={styles.collabCard}>
            <h3 style={styles.collabCardTitle}>Election Commission</h3>
            <small style={styles.collabCardSmall}>Govt. Campaign</small>
          </div>
          <div style={styles.collabCard}>
            <h3 style={styles.collabCardTitle}>Amity University</h3>
            <small style={styles.collabCardSmall}>Academic Alliance</small>
          </div>
          <div style={styles.collabCard}>
            <h3 style={styles.collabCardTitle}>CGC Mohali</h3>
            <small style={styles.collabCardSmall}>Placement Partner</small>
          </div>
          <div style={styles.collabCard}>
            <h3 style={styles.collabCardTitle}>Oppo India</h3>
            <small style={styles.collabCardSmall}>Hiring Partner</small>
          </div>
          <div style={styles.collabCard}>
            <h3 style={styles.collabCardTitle}>Urban Company</h3>
            <small style={styles.collabCardSmall}>Tech Skilling</small>
          </div>
          <div style={styles.collabCard}>
            <h3 style={styles.collabCardTitle}>Ishan Technologies</h3>
            <small style={styles.collabCardSmall}>IT Infra</small>
          </div>
          <div style={styles.collabCard}>
            <h3 style={styles.collabCardTitle}>...and many more</h3>
            <small style={styles.collabCardSmall}>Expanding Every Day</small>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
