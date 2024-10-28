import React from "react";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/icons/search_icon.svg";
import bellIcon from "../../assets/icons/bell_icon.svg";
import profileIcon from "../../assets/icons/profile_img.png";
import caretIcon from "../../assets/icons/caret_icon.svg";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="Navbar">
      <div className="Navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by languages</li>
        </ul>
      </div>
      <div className="Navbar-right">
        <img className="icons" src={searchIcon} />
        <p>Children</p>
        <img src={bellIcon} className="bell-icons" />
        <div className="Profile">
          <img src={profileIcon} className="profile-icon" />
          <img src={caretIcon} className="caret-icon" />
          <div className="dropdown">
            <button
              className="sign-out"
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
            >
              SIGN OUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
