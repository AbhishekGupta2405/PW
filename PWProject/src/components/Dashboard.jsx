// src/pages/Dashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
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
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
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
      transition: 'all 0.3s ease'
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
      cursor: 'pointer'
    },
    
    // Hero section styles
    hero: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '60px',
      background: 'linear-gradient(to right, #eef2ff, #ffffff)',
      minHeight: '500px'
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
      cursor: 'pointer'
    },
    heroImages: {
      position: 'relative'
    },
    heroImage: {
      width: '150px',
      borderRadius: '50%'
    },
    
    // Features section styles
    features: {
      display: 'flex',
      justifyContent: 'space-around',
      backgroundColor: 'white',
      padding: '60px 0',
      boxShadow: '0 -2px 8px rgba(0,0,0,0.05)'
    },
    featureBox: {
      textAlign: 'center'
    },
    featureImage: {
      width: '40px',
      marginBottom: '10px'
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
      textAlign: 'center'
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
      transition: 'transform 0.2s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      textAlign: 'left',
      height: '330px',
      justifyContent: 'space-between'
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
      alignSelf: 'flex-start'
    },
    
    // Video section styles
    promoVideo: {
      display: 'flex',
      justifyContent: 'center',
      background: '#000',
      padding: '20px 0'
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
      borderRadius: '12px'
    },
    
    // Trusted platform section styles
    trustedPlatform: {
      textAlign: 'center',
      padding: '40px 20px'
    },
    trustedTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '10px'
    },
    trustedParagraph: {
      fontSize: '1rem',
      color: '#555',
      marginBottom: '30px'
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
      fontFamily: 'Arial, sans-serif'
    },
    statsCardTitle: {
      fontSize: '40px',
      fontWeight: 'bold',
      marginBottom: '5px'
    },
    statsCardText: {
      fontSize: '14px',
      color: '#333'
    },
    statsCardImage: {
      width: '50px',
      position: 'absolute',
      bottom: '10px',
      right: '10px'
    },
    getStartedBtn: {
      backgroundColor: '#5f38e9',
      color: 'white',
      padding: '12px 30px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: '0.3s'
    },
    
    // Team section styles
    ourTeamSection: {
      padding: '50px 20px',
      backgroundColor: '#f9f9f9',
      textAlign: 'center'
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
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '25px',
      maxWidth: '1000px',
      margin: 'auto',
      alignItems: 'center',
      justifyContent: 'center'
    },
    teamImage: {
      width: '100%',
      maxWidth: '200px',
      objectFit: 'contain',
      borderRadius: '10px',
      filter: 'grayscale(100%)',
      transition: 'all 0.3s ease'
    },
    
    // Web dev resources section styles
    sectionTitle: {
      textAlign: 'center',
      padding: '60px 20px 40px',
      background: '#f8f9fa'
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
      transition: 'transform 0.3s ease',
      textAlign: 'center'
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
      fontWeight: 'bold'
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
      background: '#f5f8ff'
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
      cursor: 'pointer'
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
      background: '#fff'
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
      position: 'relative'
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
    }
  };

  return (
    <div style={styles.global}>
      <header style={styles.header}>
        <div style={styles.logo}>CodeCanvas</div>
        <nav style={styles.nav}>
          <button style={styles.allCoursesBtn} onClick={scrollToCourses}>
            All Courses
            <span style={styles.dropdownIcon}>▼</span>
          </button>
        </nav>
        <button
          style={styles.loginBtn}
          onClick={() => (window.location.href = "/login")}
        >
          Login
        </button>
      </header>

      <section style={styles.hero}>
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

      <section style={styles.features}>
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

      <section id="courses-section" style={styles.categories}>
        <h2 style={styles.categoriesTitle}>Our Courses</h2>
        <p style={styles.categoriesParagraph}>
          PW is preparing students for 35+ exam categories. Scroll down to find
          the one you are preparing for
        </p>
        <div style={styles.categoryGrid}>
          <div style={styles.category} onClick={redirectToLogin}>
            <div>
              <h3 style={styles.categoryTitle}>MERN FULL STACK</h3>
              <div style={styles.tags}>
                <span style={styles.tag}>Html</span>
                <span style={styles.tag}>Css</span>
                <span style={styles.tag}>Js</span>
                <span style={styles.tag}>React</span>
                <span style={styles.tag}>Tailwind</span>
                <span style={styles.tag}>Node.js</span>
                <span style={styles.tag}>Express.js</span>
                <span style={styles.tag}>Ai integartion</span>
                <span style={styles.tag}>DSA</span>
                <span style={styles.tag}>Communication Skills</span>
                <span style={styles.tag}>Aptitude</span>
                <span style={styles.tag}>Reasoning</span>
                <span style={styles.tag}>100+Interview Question</span>
                <span style={styles.tag}>Live Project</span>
              </div>
              <img src="mern.jpg" alt="" style={styles.categoryImage} />
            </div>
            <button style={styles.categoryButton}>Explore Category →</button>
          </div>
          <div style={styles.category} onClick={redirectToLogin}>
            <div>
              <h3 style={styles.categoryTitle}>Python Full Stack</h3>
              <div style={styles.tags}>
                <span style={styles.tag}>Html</span>
                <span style={styles.tag}>Css</span>
                <span style={styles.tag}>Js</span>
                <span style={styles.tag}>React</span>
                <span style={styles.tag}>Tailwind</span>
                <span style={styles.tag}>python</span>
                <span style={styles.tag}>Flask</span>
                <span style={styles.tag}>Ai integartion</span>
                <span style={styles.tag}>DSA</span>
                <span style={styles.tag}>Communication Skills</span>
                <span style={styles.tag}>Aptitude</span>
                <span style={styles.tag}>Reasoning</span>
                <span style={styles.tag}>100+Interview Question</span>
                <span style={styles.tag}>Live Project</span>
              </div>
            </div>
            <button style={styles.categoryButton}>Explore Category →</button>
          </div>
          <div style={styles.category} onClick={redirectToLogin}>
            <div>
              <h3 style={styles.categoryTitle}>Java Full Stack</h3>
              <div style={styles.tags}>
                <span style={styles.tag}>Html</span>
                <span style={styles.tag}>Css</span>
                <span style={styles.tag}>Js</span>
                <span style={styles.tag}>React</span>
                <span style={styles.tag}>Tailwind</span>
                <span style={styles.tag}>Java</span>
                <span style={styles.tag}>Spring Boot</span>
                <span style={styles.tag}>Ai integartion</span>
                <span style={styles.tag}>DSA</span>
                <span style={styles.tag}>Communication Skills</span>
                <span style={styles.tag}>Aptitude</span>
                <span style={styles.tag}>Reasoning</span>
                <span style={styles.tag}>100+Interview Question</span>
                <span style={styles.tag}>Live Project</span>
              </div>
            </div>
            <button style={styles.categoryButton}>Explore Category →</button>
          </div>
          <div style={styles.category} onClick={redirectToLogin}>
            <div>
              <h3 style={styles.categoryTitle}>Front-End</h3>
              <div style={styles.tags}>
                <span style={styles.tag}>Html</span>
                <span style={styles.tag}>Css</span>
                <span style={styles.tag}>Js</span>
                <span style={styles.tag}>React</span>
                <span style={styles.tag}>Tailwind</span>
                <span style={styles.tag}>DSA</span>
                <span style={styles.tag}>Communication Skills</span>
                <span style={styles.tag}>Aptitude</span>
                <span style={styles.tag}>Reasoning</span>
                <span style={styles.tag}>100+Interview Question</span>
                <span style={styles.tag}>Live Project</span>
              </div>
            </div>
            <button style={styles.categoryButton}>Explore Category →</button>
          </div>
          <div style={styles.category} onClick={redirectToLogin}>
            <div>
              <h3 style={styles.categoryTitle}>C and C++</h3>
              <div style={styles.tags}>
                <span style={styles.tag}>Logic Building</span>
                <span style={styles.tag}>500+ Programming Practice Question</span>
              </div>
            </div>
            <button style={styles.categoryButton}>Explore Category →</button>
          </div>
        </div>
      </section>

      <section style={styles.promoVideo}>
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

      <section style={styles.trustedPlatform}>
        <h2 style={styles.trustedTitle}>A Platform Trusted by Students</h2>
        <p style={styles.trustedParagraph}>
          Physics Wallah aims to transform not just through words, but provide
          results with numbers!
        </p>

        <div style={styles.statsCards}>
          <div style={{...styles.statsCard, backgroundColor: "#fff2dc"}}>
            <h3 style={styles.statsCardTitle}>1Million+</h3>
            <p style={styles.statsCardText}>Happy Students</p>
          </div>
          <div style={{...styles.statsCard, backgroundColor: "#ffefef"}}>
            <h3 style={styles.statsCardTitle}>500+</h3>
            <p style={styles.statsCardText}>Interview Passsed</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2900/2900664.png"
              alt="Mock Test"
              style={styles.statsCardImage}
            />
          </div>
          <div style={{...styles.statsCard, backgroundColor: "#e6f7ff"}}>
            <h3 style={styles.statsCardTitle}>15000+</h3>
            <p style={styles.statsCardText}>Video Lectures</p>
          </div>
        </div>
        <a href="/login"><button style={styles.getStartedBtn}>Get Started</button></a>
        
      </section>

      <section style={styles.ourTeamSection}>
        <h2 style={styles.teamTitle}>Our Team</h2>
        <p style={styles.teamParagraph}>Meet the passionate developers behind our Web Dev CCG initiative</p>

        <div style={styles.teamGrid}>
          <img src="data:image/jpeg;base64," alt="Team Member 1" style={styles.teamImage} />
          <img src="team2.jpg" alt="Team Member 2" style={styles.teamImage} />
          <img src="team3.jpg" alt="Team Member 3" style={styles.teamImage} />
          <img src="team4.jpg" alt="Team Member 4" style={styles.teamImage} />
          <img src="team5.jpg" alt="Team Member 5" style={styles.teamImage} />
          <img src="team6.jpg" alt="Team Member 6" style={styles.teamImage} />
        </div>
      </section>

      <section style={styles.sectionTitle}>
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

      <section style={styles.clientsSection}>
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

      <section style={styles.collabSection}>
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
