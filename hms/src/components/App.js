//App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginOptions from './LoginOptions';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginOptions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login-doctor" element={<Login type="doctor" />} />
        <Route path="/login-admin" element={<Login type="admin" />} />
      </Routes>
    </Router>
  );
}

export default App;
