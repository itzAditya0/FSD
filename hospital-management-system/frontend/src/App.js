// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginOptions from './components/LoginOptions';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard'; // Adjust the path if needed

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginOptions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login-doctor" element={<Login type="doctor" />} />
          <Route path="/login-admin" element={<Login type="admin" />} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
