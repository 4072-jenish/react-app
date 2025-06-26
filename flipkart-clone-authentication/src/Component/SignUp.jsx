import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created!");
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container mt-5">
      <h3>Sign Up</h3>
      <form onSubmit={handleRegister}>
        <input className="form-control my-2" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input className="form-control my-2" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button className="btn btn-primary w-100">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
