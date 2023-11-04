import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import './login.css'
import { useNavigate } from "react-router-dom";
import { auth } from "../componenets/Base";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    function onRegister() {
      signInWithEmailAndPassword(auth, email, password).catch((error) =>
        console.log(error)
      );
      navigate("/doctor-dashboard");
    }
    onRegister();
  };

  return (
    <div className="container">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h1 className="heading2">Login Here</h1>
        <input
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;

