//LoginOption.js

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Styles/LoginOptions.css';
import patient from '../assets/patient.png';
import doctor from '../assets/doctor.png';
import admin from '../assets/admin.png';

const LoginOptions = () => {
  return (
    <div className="login-page">
      <div className="header-container">
        <div className="login-header">
          <h1>LOGIN / REGISTER</h1>
        </div>
      </div>
      <div className="login-container">
        <div className="login-box">
          <img src={patient} alt="For Patients" />
          <h2>For Patients</h2>
          <p>
            Take your healthcare to the next level. Take it into your hands. You choose
            the care you need from a select group of physicians from the convenience of
            your home.
          </p>
          <div className="button-group1">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/register"><button>Register</button></Link>
          </div>
        </div>
        <div className="login-box">
          <img src={doctor} alt="For Doctors" />
          <h2>For Doctors</h2>
          <p>
            Elevate your healthcare delivery—provide care to patients efficiently. Improve
            your patient base and access.
          </p>
          <div className="button-group2">
            <Link to="/login-doctor"><button>Login</button></Link>
          </div>
        </div>
        <div className="login-box">
          <img src={admin} alt="Admin" />
          <h2>For Admin</h2>
          <p>
            Admin login for overall management and everything.
          </p>
          <div className="button-group2">
            <Link to="/login-admin"><button>Login</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOptions;