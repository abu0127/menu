import React from 'react';
import { useNavigate } from 'react-router-dom';

const Burgers = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <h1>Burgers Page</h1>
      <button style={styles.button} onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
};

const styles = {
  page: {
    textAlign: 'center',
    marginTop: '50px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#2a9d8f',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    marginTop: '20px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};

export default Burgers;