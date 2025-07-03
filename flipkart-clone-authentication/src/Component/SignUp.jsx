import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { loginAsync } from "../Service/Actions/authActions";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(loginAsync(userCredential.user));
      alert("Account created successfully!");
      navigate("/signin");
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
    <div className="card shadow-lg p-4 border-0 rounded-4" style={{ width: "100%", maxWidth: "450px" }}>
      <h3 className="text-center fw-bold mb-4">Create Account 🚀</h3>
  
      {errorMsg && (
        <div className="alert alert-danger py-2" role="alert">
          {errorMsg}
        </div>
      )}
  
      <form onSubmit={handleRegister}>
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
  
        <input
          className="form-control my-2 rounded-pill px-4"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
  
        <button className="btn btn-primary w-100 mt-3 rounded-pill shadow-sm">
          Sign Up
        </button>
      </form>
  
      <p className="text-center mt-3">
        Already have an account?{" "}
        <Link to="/signin" className="text-decoration-none fw-semibold text-primary">
          Sign In
        </Link>
      </p>
    </div>
  </div>
  
  );
};

export default SignUp;
