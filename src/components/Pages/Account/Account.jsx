import {React, useState} from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import Head from "../../header/Head";
import "./Account.css";
import './login.css'

const Account = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };



  const accountStyle = {
    textAlign: "center",
    color: "balck",
    fontSize: "40px",
    fontWeight: "500",
    padding: "14px",
  };

  const accountStyle2 = {
    textAlign: "center",
    color: "black",
    fontSize: "18px",
    fontWeight: "500",
    padding: "0px",
    cursor: "pointer",
    textDecoration: "none",
    position: "relative",
    bottom: "5rem",
  };
  return (
    <div className="Account">
      <Head />
      <div className="heat-txt">
        <h1 style={accountStyle}>Account</h1>
        <p style={accountStyle2}>
          <div className="account-head-link">
            <Link className="account_link" to="/">
              Home
            </Link>{" "}
            /{" "}
            <Link className="account_link" to="/Account">
              Acccont
            </Link>
          </div>
        </p>
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
      <div className="login">
        <div className="login-contain">

          {/* login form it css is in login css  */}
        <h2 className='login-h2'>Login</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        {/* <label htmlFor="username">Username:</label> */}
        <input
        className='login-input'
          type="text"
          placeholder="Username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* <label className='login-label' htmlFor="password">Password:</label> */}
        <input
        className='login-input'
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='login-btn' type="submit">Submit</button>
      </form>
      <hr className="login-hr" />
      <div className="login-options">
        <Link className="login-links" to='/ForgotPassword'><h3>Forget Password?</h3></Link>
        <Link className="login-links" to='/Register' ><h3> Register/Create new Account</h3></Link>
        <Link className="login-links" to='/'> <h3> Back to Store</h3> </Link>
      </div>
        </div>
      </div>

      <div className="home_about">
        <div className="home_about_txt">
          <h2 className="home_about_h1">Midevogue</h2>
          <p>
            {" "}
            At Midevogue, we offer a stunning collection of exquisite and unique
            jewelry pieces to add a touch of glamour and elegance to your
            everyday look. From sparkling diamonds to precious gemstones, our
            hand-selected pieces are crafted to perfection to suit every taste
            and style.
          </p>

          {/* social section */}
          <div className="social_links">
            <ul class="social-icons">
              <li>
                <a
                  class="icon-fallback-text twitt hexagon"
                  target="blank"
                  href="#"
                  title="Twitter"
                >
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li>
                <a
                  class="icon-fallback-text fb hexagon"
                  target="blank"
                  href="#"
                  title="Facebook"
                >
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>

              <li>
                <a
                  class="icon-fallback-text pin hexagon"
                  target="blank"
                  href="#"
                  title="Pinterest"
                >
                  <i class="fa-brands fa-pinterest"></i>
                </a>
              </li>

              <li>
                <a
                  class="icon-fallback-text ins"
                  target="blank"
                  href="#"
                  title="Instagram"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* footer section  */}
      <div className="acc-footer">
      <Footer />
      </div>
      
    </div>
  );
};

export default Account;
