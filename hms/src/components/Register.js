// Register.js

import React from "react";
import styles from "./Styles/Register.css";

const Register = ({ type = "patient" }) => {
  const getHeader = () => {
    switch (type) {
      case "doctor":
        return "Doctor Registration";
      case "admin":
        return "Admin Registration";
      default:
        return "Patient Registration";
    }
  };

  return (
    <div className={styles.registerPage}>
      <div className={styles.registerContainer}>
        <header className={styles.header}>{getHeader()}</header>
        <div className={styles.twoForms}>
          <div className={styles.inputBox}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Firstname"
            />
            <i className="bx bx-user"></i>
          </div>
          <div className={styles.inputBox}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Lastname"
            />
            <i className="bx bx-user"></i>
          </div>
        </div>
        <div className={styles.inputBox}>
          <input
            type="text"
            className={styles.inputField}
            placeholder="Email"
          />
          <i className="bx bx-envelope"></i>
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
          <input type="submit" className={styles.submit} value="Register" />
        </div>
        <div className={styles.twoCol}>
          <div className={styles.one}>
            <input type="checkbox" id="register-check" />
            <label htmlFor="register-check"> Remember Me</label>
          </div>
          <div className={styles.two}>
            <a href="#">Terms & conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
