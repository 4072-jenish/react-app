import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth, googleProvider, facebookProvider } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { loginAsync } from "../Service/Actions/authActions";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

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
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      dispatch(loginAsync(result.user));
      navigate("/");
    } catch (err) {
      alert(err.message);
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
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "450px" }}>
        <h3 className="text-center mb-4">Sign In</h3>

        <form onSubmit={handleEmailLogin}>
          <input
            className="form-control my-2"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="form-control my-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn btn-success w-100 mt-2 rounded-pill">Sign In</button>
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
          Don't have an account?{" "}
          <Link to="/signup" className="text-decoration-none fw-semibold">
            Register your account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
