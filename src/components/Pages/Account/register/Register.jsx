import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import Head from "../../../header/Head";
import Footer from "../../../footer/Footer";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <Head/>
       <div className="register-head-link">
        <div className="head-links">
        <Link className="register_link" to="/">
              Home
            </Link>{" "}
            /{" "}
            <Link className="register_link" to="/Account">
              Acccont
            </Link> 
        </div>
            
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
      {" "}
      <div className="register-form-container">
        <h2 className="register-h2">Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          {/* <label htmlFor="firstName">First Name:</label> */}
          <input className="register-input"
          placeholder="firstName"
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {/* <label htmlFor="lastName">Last Name:</label> */}
          <input className="register-input"
          placeholder="lastName"
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {/* <label htmlFor="email">Email:</label> */}
          <input className="register-input"
          placeholder="Email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <label htmlFor="password">Password:</label> */}
          <input className="register-input"
          placeholder="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="register-btn" type="submit">Submit</button>
        </form>
      </div>
      <div className="home_reg">
        <div className="home_reg_txt">
          <h2 className="home_reg_h1">Midevogue</h2>
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
      <div className="reg-footer">
      <Footer/>

      </div>
    </div>
  );
}

export default Register;
