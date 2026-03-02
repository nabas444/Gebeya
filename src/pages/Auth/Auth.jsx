import Layout from "../../components/Layout/Layout";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import classes from "./Auth.module.css";

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email.includes("@")) {
      return "Please enter a valid email.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    
    <div className={classes.authContainer}>
      <Link to="/">
        <img
          className={classes.logo}
          src="/gebeyacom.png"
          alt="gebeyacom logo"
        />
      </Link>

      <div className={classes.authBox}>
        <h1>{isSignUp ? "Create Account" : "Sign-In"}</h1>

        <form onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={classes.formGroup}>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className={classes.error}>{error}</p>}

          <button type="submit" className={classes.signInButton}>
            {isSignUp ? "Create Account" : "Sign-In"}
          </button>
        </form>

        <p className={classes.terms}>
          By continuing, you agree to the Conditions of Use and Privacy Notice.
        </p>

        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className={classes.toggleButton}
        >
          {isSignUp
            ? "Already have an account? Sign-In"
            : "New to Gebeya? Create your account"}
        </button>
      </div>
    </div>
    
  );
}

export default Auth;
