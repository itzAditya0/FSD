//Login.js

import React from "react";
import styles from "./Styles/Login.module.css";

const Login = ({ type = "patient" }) => {
  const getHeader = () => {
    switch (type) {
      case "doctor":
        return "Doctor Login";
      case "admin":
        return "Admin Login";
      default:
        return "Patient Login";
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.loginContainer}>
        <header className={styles.header}>{getHeader()}</header>
        <div className={styles.inputBox}>
          <input
            type="text"
            className={styles.inputField}
            placeholder="Username or Email"
          />
          <i className="bx bx-user"></i>
        </div>
        <div className={styles.inputBox}>
          <input
            type="password"
            className={styles.inputField}
            placeholder="Password"
          />
          <i className="bx bx-lock-alt"></i>
        </div>
        <div className={styles.inputBox}>
          <input type="submit" className={styles.submit} value="Sign In" />
        </div>
        <div className={styles.twoCol}>
          <div className={styles.one}>
            <input type="checkbox" id="login-check" />
            <label htmlFor="login-check"> Remember Me</label>
          </div>
          <div className={styles.two}>
            <a href="#">Forgot password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
