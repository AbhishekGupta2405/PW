import React from 'react';

const LoginPage = () => {
  const handleOTPRequest = () => {
    // Handle OTP request logic here
    window.location.href = '/home';
  };

  const styles = {
    global: {
      boxSizing: 'border-box',
    },
    loginContainer: {
      margin: 0,
      fontFamily: "'Inter', sans-serif",
      background: '#f5f7fa',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    container: {
      width: '900px',
      maxWidth: '95vw',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
      display: 'flex',
      overflow: 'hidden',
    },
    leftPanel: {
      flex: 1,
      padding: '40px 30px 40px 50px',
      background: '#f9fbfe',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    rightPanel: {
      flex: 1,
      padding: '48px 40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: 'transparent',
      color: 'black',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '40px',
      textAlign: 'center',
      userSelect: 'none',
      cursor: 'default',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '10px',
      border: '2px solid #e5e7eb',
    },
    logoImg: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    title: {
      fontSize: '28px',
      margin: '24px 0 8px 0',
      color: '#111',
    },
    subtitle: {
      fontSize: '14px',
      color: '#555',
      marginBottom: '20px',
    },
    circleContainer: {
      position: 'relative',
      width: '400px',
      height: '400px',
      margin: '20px auto 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    circleBg: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '280px',
      height: '280px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(97,122,255,0.2) 30%, transparent 70%)',
      transform: 'translate(-50%, -50%)',
      filter: 'blur(16px)',
    },
    profilePic: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '104px',
      height: '104px',
      borderRadius: '50%',
      overflow: 'hidden',
      transform: 'translate(-50%, -50%)',
      boxShadow: '0 4px 12px rgb(0 0 0 / 0.1)',
      background: 'white',
    },
    profileImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    card: {
      position: 'absolute',
      background: '#fff',
      width: '140px',
      minHeight: '70px',
      borderRadius: '12px',
      padding: '12px 14px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontSize: '13px',
      fontWeight: 600,
      color: '#111',
      textAlign: 'center',
      animation: 'float 4s ease-in-out infinite',
    },
    card1: {
      top: '50%',
      left: 'calc(50% + 160px)',
      animationDelay: '0s',
      transform: 'translate(-50%, -50%)',
    },
    card2: {
      top: 'calc(50% - 160px)',
      left: '50%',
      animationDelay: '1s',
      transform: 'translate(-50%, -50%)',
    },
    card3: {
      top: '50%',
      left: 'calc(50% - 160px)',
      animationDelay: '2s',
      transform: 'translate(-50%, -50%)',
    },
    card4: {
      top: 'calc(50% + 160px)',
      left: '50%',
      animationDelay: '3s',
      transform: 'translate(-50%, -50%)',
    },
    cardOffline: {
      background: '#ffe3a3',
      color: '#926300',
    },
    cardHappy: {
      background: '#c6f2da',
      color: '#25613f',
    },
    cardLive: {
      background: '#fcd7d7',
      color: '#a43e3e',
    },
    cardDoubt: {
      background: '#c6d9f2',
      color: '#264d8a',
    },
    loginCard: {
      background: 'white',
      borderRadius: '12px',
      padding: '40px 40px 48px',
      width: '100%',
      maxWidth: '360px',
      boxShadow: '0 6px 24px rgba(0,0,0,0.08)',
    },
    loginTitle: {
      fontWeight: 700,
      fontSize: '20px',
      marginBottom: '10px',
      color: '#111',
    },
    loginSubtitle: {
      fontSize: '14px',
      color: '#333',
      marginBottom: '20px',
    },
    inputGroup: {
      display: 'flex',
      gap: '12px',
      marginBottom: '28px',
    },
    select: {
      fontSize: '14px',
      padding: '12px 14px',
      borderRadius: '8px',
      border: '1.5px solid #ccc',
      outlineOffset: '2px',
      outlineColor: 'transparent',
      transition: 'outline-color 0.3s ease, border-color 0.3s ease',
      minWidth: '90px',
      cursor: 'pointer',
      background: 'white',
    },
    input: {
      fontSize: '14px',
      padding: '12px 14px',
      borderRadius: '8px',
      border: '1.5px solid #ccc',
      outlineOffset: '2px',
      outlineColor: 'transparent',
      transition: 'outline-color 0.3s ease, border-color 0.3s ease',
      flexGrow: 1,
      color: '#333',
    },
    button: {
      width: '100%',
      padding: '14px 0',
      borderRadius: '10px',
      border: 'none',
      backgroundColor: '#8590f9',
      color: 'white',
      fontWeight: 600,
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.25s ease',
    },
    keyframes: `
      @keyframes float {
        0%, 100% {
          transform: translate(-50%, -50%) translateY(0);
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
        }
        50% {
          transform: translate(-50%, -50%) translateY(-10px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.12);
        }
      }
    `,
  };

  return (
    <>
      <style>{styles.keyframes}</style>
      <div style={styles.loginContainer}>
        <div style={styles.container}>
          <div style={styles.leftPanel}>
            <div style={styles.logo}>
              <span>CC</span>
            </div>

            <h1 style={styles.title}>Welcome to CodeCanvas!</h1>
            <p style={styles.subtitle}>India's most trusted education platform</p>

            <div style={styles.circleContainer}>
              <div style={styles.circleBg}></div>
              <div style={styles.profilePic}>
                <img 
                  src="/images/codecanvalogo.jpeg" 
                  alt="Profile" 
                  style={styles.profileImg}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div style={{
                  display: 'none',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>CC</div>
              </div>

              {/* Circular Cards */}
              <div style={{...styles.card, ...styles.card1, ...styles.cardOffline}}>
                <div style={{fontWeight: 'bold', marginBottom: '2px'}}>100 +</div>
                <div>Real World Problems</div>
              </div>
              <div style={{...styles.card, ...styles.card2, ...styles.cardLive}}>
                <div style={{fontWeight: 'bold', marginBottom: '2px'}}>Daily live</div>
                <div>interactive classes</div>
              </div>
              <div style={{...styles.card, ...styles.card3, ...styles.cardDoubt}}>
                <div style={{fontWeight: 'bold', marginBottom: '2px'}}>24 x 7</div>
                <div>Doubt Solving</div>
              </div>
              <div style={{...styles.card, ...styles.card4, ...styles.cardHappy}}>
                <div style={{fontWeight: 'bold', marginBottom: '2px'}}>1 Million +</div>
                <div>Happy Students</div>
              </div>
            </div>
          </div>

          <div style={styles.rightPanel}>
            <div style={styles.loginCard} role="form" aria-label="Login/Register form">
              <h2 style={styles.loginTitle}>Login / Register</h2>
              <p style={styles.loginSubtitle}>Please enter your mobile number</p>
              <div style={styles.inputGroup}>
                <select 
                  style={styles.select}
                  aria-label="Country code"
                  onFocus={(e) => {
                    e.target.style.outlineColor = '#6077f7';
                    e.target.style.borderColor = '#6077f7';
                  }}
                  onBlur={(e) => {
                    e.target.style.outlineColor = 'transparent';
                    e.target.style.borderColor = '#ccc';
                  }}
                >
                  <option value="+91">IN +91</option>
                  {/* Add more options here if needed */}
                </select>
                <input 
                  type="text" 
                  placeholder="Eg. 987654335" 
                  pattern="\d*" 
                  maxLength="10" 
                  aria-label="Mobile number"
                  style={styles.input}
                  onFocus={(e) => {
                    e.target.style.outlineColor = '#6077f7';
                    e.target.style.borderColor = '#6077f7';
                  }}
                  onBlur={(e) => {
                    e.target.style.outlineColor = 'transparent';
                    e.target.style.borderColor = '#ccc';
                  }}
                />
              </div>
              <button 
                type="button" 
                onClick={handleOTPRequest}
                style={styles.button}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#6b72e9';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#8590f9';
                }}
              >
                Request OTP
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;