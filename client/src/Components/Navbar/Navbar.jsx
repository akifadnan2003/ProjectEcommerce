import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import AboutUs from "../../Pages/AboutUs";
import ContactUs from "../../Pages/ContactUs";
import { useAuth } from "../AuthContext/AuthContext";
import axios from "axios";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const { isAdmin, isUser, setIsAdmin, setIsUser } = useAuth();

  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:4000/user/logout", {}, {
        withCredentials: true,
      });
      if (response.status === 200) {
        setIsAdmin(false);
        setIsUser(false);
      }
    } catch (error) {
      console.error("Error during logout");
    }
  }

  return (
    <div className="navbar">
      <Link
        to="/"
        onClick={() => {
          setMenu("shop");
        }}
        className="nav-logo"
      >
        <img src={logo} alt="" />
        <p>Dijital Dokuma</p>
      </Link>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <div
          className="dropdown"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <button className="dropbtn">Categories</button>
          {menu === "Categories" ? <hr /> : <></>}
          {isDropdownOpen && (
            <div className="dropdown-content">
              <li
                onClick={() => {
                  setMenu("Thick Curtains");
                }}
              >
                <Link to="/Thick Curtains">Thick Curtains</Link>
                {menu === "Thick Curtains" ? <hr /> : <></>}
              </li>
              <li
                onClick={() => {
                  setMenu("Anti UV Curtains");
                }}
              >
                <Link to="Anti UV Curtains">Anti UV Curtains</Link>
                {menu === "Anti UV Curtains" ? <hr /> : <></>}
              </li>
              <li
                onClick={() => {
                  setMenu("Window Blinds");
                }}
              >
                <Link to="/Window Blinds">Window Blinds</Link>
                {menu === "Window Blinds" ? <hr /> : <></>}
              </li>
            </div>
          )}
        </div>
        <li
          onClick={() => {
            setMenu("Contact");
          }}
        >
          <Link to="/ContactUs">Contact</Link>
          {menu === "Contact" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("AboutUs");
          }}
        >
          <Link to="/AboutUs">About Us</Link>
          {menu === "AboutUs" ? <hr /> : <></>}
        </li>
      </ul>
      <div
        className={`search-box ${isSearchOpen ? "open" : ""}`}
        onMouseEnter={() => setIsSearchOpen(true)}
        onMouseLeave={() => setIsSearchOpen(false)}
      >
        <button className="btn-search">
          <i className="fas fa-search"></i>
        </button>
        <input
          type="text"
          className="input-search"
          placeholder="Type to Search..."
        />
      </div>
      <div className="nav-login-cart">
        {isAdmin ? (
          <>
            <Link to="/adminPanel">
              <button>Admin Panel</button>
            </Link>
            <button onClick={handleLogout}>Log Out</button>
          </>
        ) : isUser ? (
          <>
            <button onClick={handleLogout}>Log Out</button>
          </>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
