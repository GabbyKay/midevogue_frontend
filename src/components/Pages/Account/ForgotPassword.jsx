import React, { useState } from 'react';
import Footer from '../../footer/Footer';
import Head from '../../header/Head';
import './ForgotPassword.css';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
  };

  return (
    <div>
        <Head/>
        <div className="head-links">
        <Link className="forget-p-link" to="/">
              Home
            </Link>{" "}
            /{" "}
            <Link className="forget-p-link" to="/Account">
              Acccont
            </Link> 
        </div>
            
         <div className="Account_img_container">
        <img
          src="https://images.pexels.com/photos/9377959/pexels-photo-9377959.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="img1"
        />
        <img
          src="https://images.unsplash.com/photo-1619785292559-a15caa28bde6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="img1"
        />
        <img
          src="https://images.pexels.com/photos/9377965/pexels-photo-9377965.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="img1"
        />
      </div>
        <div className="forgot-password-container">
      <h2 className='forget-p-h2'>Forgot Password?</h2>
      <form className='forget-p-form' onSubmit={handleSubmit}>
        <label className='forget-p-label' htmlFor="email">Email:</label>
        <input
        className='forget-p-input'
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
    <div className="reg-footer">
      <Footer/>

      </div>    </div>
    
  );
}

export default ForgotPassword;
