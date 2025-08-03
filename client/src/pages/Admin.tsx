import React, { useState } from 'react';
import '../pages/adl.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
    // Add login logic here
  };

  return (
    <div className="admin-login-container">
      <div className="overlay" />
      <div className="login-box">
        <h1 className="login-title">36x Finance Admin Panel</h1>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Username or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;