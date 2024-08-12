import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Email: ${email}\nPassword: ${password}`);
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <h2 className="login-title">Welcome Back</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="login-input"
                        />
                        <label className="login-label">Email</label>
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="login-input"
                        />
                        <label className="login-label">Password</label>
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <p className="login-footer">
                    Don't have an account? <a href="#">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;