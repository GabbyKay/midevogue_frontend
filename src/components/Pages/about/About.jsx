import React from "react";
import Head from "../../header/Head";
import { Link } from "react-router-dom";
import "./About.css";
import Footer from "../../footer/Footer";

const About = () => {
  return (
    <div>
      <div className="about_head">
        <Head />
      </div>
      {/* header sec  */}
      <div className="about_header">
        <h1 className="h_headertxt">About</h1>
        <p className="p_header">
          <Link className="links" to="/">
            Home
          </Link>{" "}
          /{" "}
          <Link className="links" to="/About">
            About
          </Link>
        </p>
      </div>
      <div className="about_img_container">
        <img
          src="https://images.pexels.com/photos/9377959/pexels-photo-9377959.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="img1"
        />
        <img
          src="https://images.pexels.com/photos/3893093/pexels-photo-3893093.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="img1"
        />
        <img
          src="https://images.pexels.com/photos/9377965/pexels-photo-9377965.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="img1"
        />
      </div>

      {/* welcome to Midevogue sec section */}
      <div className="about_text_container">
        <div className="left">
          <img src="https://images.unsplash.com/photo-1564227901-6b1d20bebe9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQwfHxqZXdlbHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" className="left_img1" />
          <img
            src="https://images.unsplash.com/photo-1617229008930-1ea392b575e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcwfHxqZXdlbHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
            className="left_img2"
          />
        </div>
        <div className="right">
          <h1>Welcome to Midevogue.</h1>
          <p>
            At Midevogue, we offer a stunning collection of exquisite and unique
            jewelry pieces to add a touch of glamour and elegance to your
            everyday look. From sparkling diamonds to precious gemstones, our
            hand-selected pieces are crafted to perfection to suit every taste
            and style.im enim sit. Tellus rutrum tellus pellentesque eu.
            Consequat interdum varius sit amet mattis. Sed arcu non odio euismod
            lacinia. Lobortis elementum nibh tellus molestie. Lorem mollis
            aliquam ut porttitor leo a diam. Duis convallis convallis tellus id.
            Aliquet bibendum enim facilisis gravida. Mauris vitae ultricies leo
            integer.
          </p>
          <br />
          <div className="list">
            <li>Bridal Jewellery</li>
            <br />
            <li>Fashion Jewellery</li>
            <br />
            <li>Handmade Jewellery</li>
            <br />
            <li> Kundan Jewellery</li>
          </div>
          {/* <br /> */}
          <button className="read_more">READ MORE </button>
        </div>

        {/* about_sec2  */}
      </div>

      {/* blank page for ads  */}
      {/* <div className="blank1">ADS</div> */}

      {/* about sec 2  */}
      <div className="about_sec2">
        {/* header  */}
        <div>
          <h1 className="about_sec2_header">Pure & shine jewelry</h1>
        </div>
        <div className="about_sec2_txt">
          {/* left side  */}
          <div className="sec2_left">
            <h1 className="about_h1">
              Antique, traditional & fashion Jewelry manufacture
            </h1>
            <br />
            <br />
            <p className="about_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim Duis aute irure dolor in reprehenderit in voluptate
              velit esadipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim Duis aute irure
              dolor in reprehen derit in voluptate velit esveniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit es
            </p>
          </div>
          {/* right side  */}
          <div className="sec2_right">
            <h1 className="about_h1">
              Jewelry repair, appraisal, sizing & replacement
            </h1>
            <br />
            <br />
            <p className="about_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim Duis aute irure dolor in reprehenderit in voluptate
              velit esadipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim Duis aute irure
              dolor in reprehen derit in voluptate velit esveniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit es
            </p>
          </div>
        </div>
      </div>

      {/* about section 3  */}

      <div className="about_sec3">
        <div className="sec3_left">
          <h1 className="sec3_h_txt">Classy craftsmanship</h1>
          <p className="sec3_p_txt">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna al incididunt ut
            labore et dolore magna aliqua.
            <br />
            <br />
            Do eiusmod tempor incididunt ut labore et dolore magna aliqua torem
            ipsum dolor sit amet, consectetur adipiscing elit sed Do eiusmod
            tempor incididunt ut labore et dolore magna aliqua torem ipsum dolor
            sit amet, consectetur adipiscing elit sed.
          </p>
        </div>
        {/* section 3 the middle image  */}
        <div className="sec3_img">
          <img
            src="https://images.unsplash.com/photo-1606623546924-a4f3ae5ea3e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjg2fHxqZXdlbHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
            className="sec3_img"
            width={250}
          />
        </div>

        <div className="sec3_right">
          <li>Signature style</li>
          <br />
          <li>Branded jewelry</li>
          <br />
          <li>Best value & price</li>
          <br />
          <li> Custom jewelry design</li> <br />
          <li>Lifestyle Men and Women</li> <br />
          <li>Trusted by clients</li>
        </div>
      </div>

      {/* section 4 join us  */}

      <div className="join_us_full_container">
        <div className="join_us_container">
          <h1 className="join_us_h_text">
            Join Us : <span>Let's Join To Get Shined</span>
          </h1>
          <p className="join_us_p_text">
            Ac turpis egestas maecenas pharetra convallis posuere morbi leo
            urna. Sagittis vitae et leo duis ut diam quam nulla. Arcu bibendum.
          </p>
          <button className="learn_more">LEARN MORE </button>{" "}
        </div>
      </div>

      {/* team section  */}
      <div className="team_sec">
        <div className="our_team_header_text">
        <h1>Our Team</h1>
        <p className="our_team_p_text">Best in Profession</p>
        </div>
        <div className="team_container">
          
            <img src="https://images.unsplash.com/photo-1635696211161-ee5c6b8dd048?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGpld2VscnklMjBtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="C.E.O" />
        
          
            <img src="https://images.unsplash.com/photo-1635686833332-bb6f4fb1872d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGpld2VscnklMjBtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="Marketing manager"  />
          
          
            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjYzfHxqZXdlbHJ5JTIwbW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="Therapist"  />
          
          
            {/* <img src="https://images.unsplash.com/photo-1635686616203-ff9281969531?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxqZXdlbHJ5JTIwbW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="C.T.O"  /> */}
          
          
            <img src="https://images.unsplash.com/photo-1611008556532-b5643d2bcff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxqZXdlbHJ5JTIwbW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="Model Manager"  />          
        </div>
        <div className="team_names">
              <h2>Rachel Anabell </h2>
              <h2>Dion Mary</h2>
              <h2>Valentina James</h2>
              <h2>Dixon Velma</h2>
            </div>

            <div className="team_spec">
            <p>C.E.O</p>
            <p>Marketer</p>
            <p>Therapist</p>
            <p>Model</p>
            </div>
      </div>

{/* footer  */}
      <div className="home_about">
            <div className="home_about_txt">
              <h2 className="home_about_h1">Midevogue</h2>
              <p className="home_about_p">
                {" "}
                At Midevogue, we offer a stunning collection of exquisite and
                unique jewelry pieces to add a touch of glamour and elegance to
                your everyday look. From sparkling diamonds to precious
                gemstones, our hand-selected pieces are crafted to perfection to
                suit every taste and style.
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

          <Footer/>
    </div>
  );
};

export default About;
