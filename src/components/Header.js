import React from "react";
import { Link } from "react-router-dom";
import { VscSearch } from "react-icons/vsc";
import "./Header.css";

import Logo from "../assets/SDASD.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="header-left-container">
          <div className="logo">
            <Link to="/">
              <img src={Logo} width="100%" height="100%" />
            </Link>
          </div>
          <div>
            <Link className="nav-link" to="/trends">
              trends
            </Link>
          </div>
          <div>
            <Link className="nav-link" to="/collections">
              collections
            </Link>
          </div>
          <div>
            <Link className="nav-link" to="/tips-and-guides">
              tips & guides
            </Link>
          </div>
        </div>
      </div>
      <div className="header-right">
        <div className="header-right-container">
          <div className="nav-link-container">
            <Link className="nav-link" to="/stores">
              stores
            </Link>
            <Link className="nav-link" to="/contact">
              contact
            </Link>
            <Link className="nav-link" to="#">
              <VscSearch />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
