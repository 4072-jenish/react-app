import React, { useState } from "react";
import { auth, googleProvider, facebookProvider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      console.error("Google sign-in error:", err.message);
      alert(err.message);
    }
  };
  
  const handleFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      navigate("/");
    } catch (err) {
      console.error("Facebook sign-in error:", err.message);
      alert(err.message);
    }
  };
  return (
    <div className="container mt-5">
      <h3>Sign In</h3>
      <form onSubmit={handleEmailLogin}>
        <input className="form-control my-2" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input className="form-control my-2" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button className="btn btn-success w-100">Sign In</button>
      </form>
      <hr />
      <button onClick={handleGoogle} className="btn btn-danger w-100 my-2">Sign In with Google</button>
      <button onClick={handleFacebook} className="btn btn-primary w-100">Sign In with Facebook</button>
    </div>
  );
};

export default SignIn;
