import React, { useState } from "react";
import { auth, db } from "../componenets/Base"; // Use the correct relative path
import './SigninPage.css'


import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    function onRegister() {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          set(ref(db, "users/" + userCredential.user.uid), {
            firstName: firstName,
            lastName: lastName,
            email: email,
          });
          navigate("/login");
        })
        .catch((error) => console.log(error));
      navigate("/");
    }
    onRegister();
  };
  const handleLoginClick = () => {
    // Navigate to the Signup Page when the "Get Started" button is clicked
    navigate('/login'); // Adjust the path to match your route
  };
  return (
    <div className="container">
    
      <form className="signupForm" onSubmit={handleSubmit}>
        <h1 className="heading2">Create Your Account</h1>
        <input
          placeholder="first name"
          onChange={(e) => setFirstName(e.target.value)}
          required
        ></input>
        <input
          placeholder="last name"
          onChange={(e) => setLastName(e.target.value)}
          required
        ></input>
        <input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
        ></input>
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
        ></input>
        <button>Sign Up</button>
        <p>You have already an Account</p>
        <button onClick={handleLoginClick}>login</button>
      </form>
    </div>
 
  );
};

export default SignUp;






