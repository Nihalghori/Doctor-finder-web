import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GetStarted.css';

function GetStarted() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    // Navigate to the Signup Page when the "Get Started" button is clicked
    navigate('/signup'); // Adjust the path to match your route
  };
  

  return (
    <div className="get-started">
      <h1>Find The right doctor<br ></br> get the best care</h1>
      <p>World best health consultant</p>
      <button onClick={handleGetStartedClick}>Get Started</button>
     
    </div>
  );
}

export default GetStarted;


