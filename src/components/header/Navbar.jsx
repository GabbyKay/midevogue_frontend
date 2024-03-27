import React, { useState } from "react";
import { Link, } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  // const navigate = useNavigate();

  // State to control the dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="category_box" onClick={toggleDropdown}>
        <i className="fa-solid fa-boxes-stacked"></i>
        <span>All Category</span>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <Link to="/CategoryPage/Jewelry">Jewelry</Link>
            <Link to="/CategoryPage/Heels">Heels</Link>
            <Link to="/CategoryPage/Beautyproducts">Beauty, Health & Hairs</Link>
            <Link to="/CategoryPage/WomenFashion">Women Fashion</Link>
            <Link to="/CategoryPage/Bags">Bags</Link>
            <Link to="/CategoryPage/Shoes">Shoes</Link>
            <Link to="/CategoryPage/Acessories">Acessories</Link>
            <Link to="/CategoryPage/Bracelets">Bracelets</Link>
            {/* <Link to="/CategoryPage/Bracelets">Bracelets</Link> */}
            {/* Add more categories as needed */}
          </div>
        )}
      </div>
      <div className="navlinks">
        <ul>
          <li>
            <Link to="/" id="nav_text">
              Home
            </Link>
          </li>
          <li>
            <Link to="/NewArrivals" id="nav_text">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link to="/Trackmyorder" id="nav_text">
              Track my Order
            </Link>
          </li>
          <li>
            <Link to="/About" id="nav_text">
              About
            </Link>
          </li>
          <li>
            <Link to="/Contact" id="nav_text">
              Contact
            </Link>
          </li>
          {/* <li>
            <Link to="/Login" id="nav_text">
              Login
            </Link>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
