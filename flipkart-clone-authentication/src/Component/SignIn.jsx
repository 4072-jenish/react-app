import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth, googleProvider, facebookProvider } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { loginAsync } from "../Service/Actions/authActions";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(loginAsync(userCredential.user));
      toast.success("SIGN IN SUCCESSFULLY ");
      setTimeout(() => {
       navigate("/");
      },3000)
    } catch (err) {
      toast.error(`SIGN IN FAILED ${err.message}`);
    }
  };

  const handleGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      dispatch(loginAsync(result.user));
      toast.success("SIGN IN SUCCESSFULLY ");
     setTimeout(() => {
      navigate("/");
     },3000)
    } catch (err) {
      toast.error(`SIGN IN FAILED ${err.message}`);

    }
  };

  const handleFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      dispatch(loginAsync(result.user));
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
    <ToastContainer autoClose={3000} theme="dark" />
    <div className="card shadow-lg p-4 border-0 rounded-4" style={{ width: "100%", maxWidth: "450px" }}>
      <h3 className="text-center fw-bold mb-4">Welcome Back 👋</h3>
  
      <form onSubmit={handleEmailLogin}>
        <input
          className="form-control my-2 rounded-pill px-4"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="form-control my-2 rounded-pill px-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-success w-100 mt-3 rounded-pill shadow-sm">Sign In</button>
      </form>
  
      <hr className="my-4" />
  
      <button
        onClick={handleGoogle}
        className="btn btn-outline-danger w-100 mb-3 rounded-pill d-flex align-items-center justify-content-center gap-2"
      >
        <FaGoogle /> Sign in with Google
      </button>
  
      <button
        onClick={handleFacebook}
        className="btn btn-outline-primary w-100 mb-2 rounded-pill d-flex align-items-center justify-content-center gap-2"
      >
        <FaFacebookF /> Sign in with Facebook
      </button>
  
      <p className="text-center mt-3">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-decoration-none fw-semibold text-primary">
          Register
        </Link>
      </p>
    </div>
  </div>
  
  );
};

export default SignIn;
