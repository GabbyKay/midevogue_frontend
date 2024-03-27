import React, { useState } from 'react';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-form-container">
      <h2 className='login-h2'>Login</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
        className='login-input'
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className='login-label' htmlFor="password">Password:</label>
        <input
        className='login-input'
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='login-' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
